export interface Response<T = unknown> {
  message: string;
  data: T | null;
}
