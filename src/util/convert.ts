import { camelCase, snakeCase } from 'lodash-es';

export const keysToCamel = (obj: any): any => {
  if (!obj) return;

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

export const keysToSnake = (obj: any): any => {
  if (!obj) return;
  if (Array.isArray(obj)) {
    return obj.map((v: any) => keysToSnake(v));
  } else if (obj !== null && obj.constructor === Object) {
    return Object.keys(obj).reduce((result: any, key: string) => {
      result[snakeCase(key)] = keysToSnake(obj[key]);
      return result;
    }, {});
  }
  return obj;
};
