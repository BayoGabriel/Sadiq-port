import type { ReactNode } from "react";

export interface IText {
  text: string;
  extra?: ReactNode;
  style?: string;
}

export interface IHeader extends IText {
  text: string;
  type: Text_Type;
}

export type Text_Type = "title" | "subhead" | "cardhead";

export interface ITag extends IText {
  style: string;
}

export interface IFullText {
  tag?: ITag;
  header?: IHeader;
  containerStyle?: string;
  para?: IPara;
  btn?: IBtn;
}

export interface IPara {
  text: string;
  style?: string;
}

export interface IBtn {
  text: string;
  style: string;
  color?: string;
  show_icon?: boolean;
  onClick?: () => void;
}

export interface IDoubleBtn {
  btn1: IBtn;
  btn2: IBtn;
  style?: string;
}
