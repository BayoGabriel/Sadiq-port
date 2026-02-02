export interface IText {
  text: string;
}

export interface IHeader {
  text: IText;
  type: Text_Type;
}

export type Text_Type = "title" | "subhead";

export interface ITag extends IText {
  style: string;
}

export interface IFullText {
  tag?: ITag;
  header?: IHeader;
  containerStyle?: string;
}

export interface IPara {
  text: string;
  style: string;
}
