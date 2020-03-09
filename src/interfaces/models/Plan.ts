import {IBase} from "../Base";

export interface IPlan extends IBase {
  name: string;
  users: number;
  projects: number;
  clients: number;
  boxes: number;
  allowedModules: string[]
}
