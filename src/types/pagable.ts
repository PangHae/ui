export interface PageableRequest {
  page: number; // 현재 페이지
  size: number; // 페이지 데이터 개수
}

export interface PageableResponse {
  total: number;
  page: number;
  size: number;
}
