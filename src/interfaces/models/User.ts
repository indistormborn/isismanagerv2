import { IRole } from "./Role";
import {IBase} from "../Base";

export interface IUser extends IBase{
  username: string;
  password: string;
  token: string;
  name: string;
  email: string;
  role: IRole | string
}
