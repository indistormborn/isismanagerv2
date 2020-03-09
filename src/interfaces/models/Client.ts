import {IMachine} from "./Machine";
import {IPlan} from "./Plan";
import {IHistory} from "./History";
import {IBase} from "../Base";

export interface IClient extends IBase{
  name: string;
  boxes: number;
  clients: number;
  current_version: string;
  active: boolean;
  last_authentication: Date;
  machine: IMachine | string;
  plan: IPlan | string;
  history: IHistory[] | string[];
}
