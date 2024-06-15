import { Status } from '../enums';

export interface RegisterInterface {
  status: Status;
  message: string;
  content: object;
}
