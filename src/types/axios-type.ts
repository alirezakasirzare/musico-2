interface ApiResult<T> {
  id: number;
  attributes: T;
}

export interface BaseFindOneResult<T> {
  data: ApiResult<T>;
}

export interface BaseFindManyResults<T> {
  data: ApiResult<T>[];
}

export interface ApiBaseData {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface MediaInterface {
  data: ApiResult<{
    name: string;
    mime: string;
    url: string;
  }> | null;
}
