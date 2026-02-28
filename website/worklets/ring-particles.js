class RingParticlesPainter {
  static get inputProperties() {
    return [
      '--ring-x',
      '--ring-y',
      '--ring-radius',
      '--ring-thickness',
      '--particle-count',
      '--particle-rows',
      '--particle-size',
      '--particle-color',
      '--particle-min-alpha',
      '--particle-max-alpha',
      '--ring-interactive',
      '--seed',
      '--animation-tick'
    ]
  }

  parseNumber(value, fallback) {
    const raw = value && typeof value.toString === 'function' ? value.toString().trim() : ''
    if (!raw) return fallback
    const parsed = Number.parseFloat(raw)
    return Number.isFinite(parsed) ? parsed : fallback
  }

  parseColor(value, fallback) {
    const raw = value && typeof value.toString === 'function' ? value.toString().trim() : ''
    return raw || fallback
  }

  createRandom(seed) {
    let state = seed || 1
    return () => {
      state = (state * 1664525 + 1013904223) % 4294967296
      return state / 4294967296
    }
  }

  paint(ctx, size, properties) {
    const width = size.width
    const height = size.height
    const centerX = (this.parseNumber(properties.get('--ring-x'), 50) / 100) * width
    const centerY = (this.parseNumber(properties.get('--ring-y'), 30) / 100) * height
    const baseRadius = this.parseNumber(properties.get('--ring-radius'), 150)
    const thickness = Math.max(1, this.parseNumber(properties.get('--ring-thickness'), 600))
    const particleCount = Math.max(12, Math.round(this.parseNumber(properties.get('--particle-count'), 80)))
    const particleRows = Math.max(4, Math.round(this.parseNumber(properties.get('--particle-rows'), 25)))
    const particleSize = Math.max(0.5, this.parseNumber(properties.get('--particle-size'), 2))
    const minAlpha = Math.max(0, Math.min(1, this.parseNumber(properties.get('--particle-min-alpha'), 0.1)))
    const maxAlpha = Math.max(minAlpha, Math.min(1, this.parseNumber(properties.get('--particle-max-alpha'), 1)))
    const interactive = Math.max(0, Math.min(1, this.parseNumber(properties.get('--ring-interactive'), 0)))
    const color = this.parseColor(properties.get('--particle-color'), '#0f172a')
    const animationTick = this.parseNumber(properties.get('--animation-tick'), 0)
    const seed = Math.round(this.parseNumber(properties.get('--seed'), 200) + animationTick * 1000)
    const random = this.createRandom(seed)

    ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = color

    const rowGap = thickness / particleRows
    const innerRadius = Math.max(18, baseRadius - thickness * 0.5)
    const outerRadius = baseRadius + thickness * 0.5
    const interactiveSpread = 1 + interactive * 0.08

    for (let row = 0; row < particleRows; row += 1) {
      const rowProgress = particleRows === 1 ? 0.5 : row / (particleRows - 1)
      const easedRow = 0.5 - Math.cos(rowProgress * Math.PI) * 0.5
      const currentRadius = innerRadius + (outerRadius - innerRadius) * easedRow

      for (let i = 0; i < particleCount; i += 1) {
        const progress = i / particleCount
        const jitterAngle = (random() - 0.5) * 0.09
        const orbitOffset = animationTick * Math.PI * 2 * (0.02 + rowProgress * 0.08)
        const angle = progress * Math.PI * 2 + jitterAngle + orbitOffset
        const radialJitter = (random() - 0.5) * rowGap * 0.32 * interactiveSpread
        const x = centerX + Math.cos(angle) * (currentRadius + radialJitter)
        const y = centerY + Math.sin(angle) * (currentRadius + radialJitter)
        const alphaStrength = minAlpha + (maxAlpha - minAlpha) * (0.18 + random() * 0.52)
        const rowFade = 1 - Math.abs(rowProgress - 0.5) * 0.55
        const interactiveBoost = 0.28 + interactive * 0.72
        const dotSize = particleSize * (0.4 + random() * 0.45) * (0.9 + interactive * 0.16)

        ctx.globalAlpha = Math.min(1, alphaStrength * rowFade * interactiveBoost)
        ctx.beginPath()
        ctx.arc(x, y, dotSize, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    ctx.globalAlpha = 1
  }
}

registerPaint('ring-particles', RingParticlesPainter)
