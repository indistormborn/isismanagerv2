import {IClient} from "./Client";
import {IBase} from "../Base";

export interface IAuthLog extends IBase {
  date: Date;
  data: object;
  client: IClient | string;
}
