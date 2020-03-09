import {IBase} from "../Base";

export interface IMachine extends IBase {
  host: string;
  port: number;
  user: string;
  password: string;
  online: boolean;
}
