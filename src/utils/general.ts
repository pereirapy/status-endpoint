import { IStatus } from '../Types/status';
import axios from 'axios';

export const getTime = (time: number) => {
  const milliSeconds = new Date(time);
  const hour = milliSeconds.getHours();
  const min = milliSeconds.getMinutes();
  const sec = milliSeconds.getSeconds();
  const completeHour = hour < 10 ? `0${hour}` : hour;
  const completeMin = min < 10 ? `0${min}` : min;
  const completeSec = sec < 10 ? `0${sec}` : sec;
  return `${completeHour}:${completeMin}:${completeSec}`;
};

type httpsCodes = { [cod: number]: string };

const errorsHttp: httpsCodes = {
  0: 'Error by CORS policy',
  302: 'Found',
  303: 'See other',
  304: 'Not Modified',
  307: 'Temporary Redirect',
  308: 'Resume incomplete',
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  405: 'Method Not Allowed',
  408: 'Request Timeout',
  409: 'Conflict',
  410: 'Gone',
  411: 'Length Required',
  412: 'Precondition Failed',
  413: 'Payload Too Large',
  416: 'Requested Range Not Satisfiable',
  429: 'Too Many Request',
  499: 'Client Closed Request',
  500: 'Internal Server Error',
  502: 'Bag Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout',
};


export const getStatusOneEndPoint = async (apiName: string): Promise<IStatus> => {
  try {
    const { data } = await axios(`https://api.factoryfour.com/${apiName}/health/status`);
    return { apiName, ...data };
  } catch (error: any) {

    return {
      apiName,
      time: 0,
      success: false,
      errorCode: error.response.status,
      message: error.response.status in errorsHttp ? errorsHttp[error.response.status] : error?.message || 'Error Unknown',
    };
  }
};

export const apiNames = [
  'accounts',
  'assets',
  'customers',
  'datapoints',
  'devices',
  'documents',
  'forms',
  'invites',
  'media',
  'messages',
  'namespaces',
  'orders',
  'patients',
  'relationships',
  'rules',
  'templates',
  'users',
  'workflows',
];
