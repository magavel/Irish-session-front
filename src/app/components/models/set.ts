import {ITune} from "./tune";

export interface ISet {
  id:number,
  attributes: IAttributes
}

export interface IAttributes {
  title: string,
  description : string,
  tunes: ITune[]
}
