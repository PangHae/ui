import { camelCase } from 'lodash-es';

export const keysToCamel = (obj: any): any => {
  if (Array.isArray(obj)) {
    return obj.map((v: any) => keysToCamel(v));
  } else if (obj !== null && obj.constructor === Object) {
    return Object.keys(obj).reduce((result: any, key: string) => {
      result[camelCase(key)] = keysToCamel(obj[key]);
      return result;
    }, {});
  }
  return obj;
};
