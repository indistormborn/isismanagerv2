import {IBase} from "../Base";

export interface IRole extends IBase{
  name: string;
  actions: string[];
  active: boolean
}
