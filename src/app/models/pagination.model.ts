export interface IPagination<T> {
  items: T[];
  page: number;
  per_page: number;
  total: number;
}

export const getPaginationMock = <T>(items: T[]): IPagination<T> => ({
  items,
  page: 1,
  per_page: 100,
  total: 0
});
