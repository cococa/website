export class ArticleSubType {
  name: string;
  img: string;

  constructor(name: string, img: string) {
    this.name = name;
    this.img = img;
  }
  toString() {
    return JSON.stringify(this);
  }
}

export enum ArticleMainType {
  //'cs,pc,ds'
  CS,
  PC,
  DS,
}

export class Article {
  title: string;
  desc: string;
  img: string;
  path: string;
  createTime: number;
  mainType: ArticleMainType[];
  subType: ArticleSubType[];

  constructor(
    title: string,
    desc: string,
    img: string,
    path: string,
    createTime: number,
    mainType: ArticleMainType[],
    subType: ArticleSubType[]
  ) {
    this.title = title;
    this.desc = desc;
    this.img = img;
    this.path = path;
    this.createTime = createTime;
    this.mainType = mainType;
    this.subType = subType;
  }
}

const js = new ArticleSubType("js", "");
const rust = new ArticleSubType("rust", "");

export const articleTypeList: ArticleSubType[] = [js, rust];

export const articleList: Article[] = [
  {
    title: "Vue 源码解析01",
    desc: "Vue 源码解析01",
    img: "",
    path: "/md/js/vue_sourcecode01.md",
    createTime: 0,
    mainType: [ArticleMainType.CS, ArticleMainType.PC],
    subType: [js, rust],
  },
  {
    title: "Vue 源码解析02",
    desc: "Vue 源码解析02",
    img: "",
    path: "/md/js/vue_sourcecode01.md",
    createTime: 0,
    mainType: [ArticleMainType.CS, ArticleMainType.PC],
    subType: [js, rust],
  },
  {
    title: "Vue 源码解析02",
    desc: "Vue 源码解析02",
    img: "",
    path: "/md/js/vue_sourcecode01.md",
    createTime: 0,
    mainType: [ArticleMainType.CS, ArticleMainType.PC],
    subType: [js, rust],
  },
];
