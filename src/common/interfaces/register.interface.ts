import { Status } from '../enums';

export interface ResponseInterface {
  status: Status;
  message: string;
  content: object;
}
