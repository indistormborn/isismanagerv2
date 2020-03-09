import {IMachine} from "./Machine";
import {IPlan} from "./Plan";
import {IBase} from "../Base";

export interface IHistory extends IBase{
  name: string;
  boxes: number;
  clients: number;
  version: string;
  active: boolean;
  status: string;
  machine: IMachine | string;
  plan: IPlan | string;
  start: Date;
  end: Date;
}
