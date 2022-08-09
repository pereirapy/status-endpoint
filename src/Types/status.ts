export interface IStatusAPI {
  success: boolean;
  message: string;
  time: number;
  hostname?: string;
}
export interface IStatus extends IStatusAPI {
  apiName: string;
  errorCode?: number;
}
