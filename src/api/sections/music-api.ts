import axiosReq from '@/services/axios-service';
import type { CategoryModel } from '@/types/models-type';

export async function getAll() {
  const res = await axiosReq.get<CategoryModel[]>('/music');
  return res.data;
}

export async function getById(id: number | string) {
  const res = await axiosReq.get<CategoryModel>(`/music/${id}`);
  return res.data;
}
