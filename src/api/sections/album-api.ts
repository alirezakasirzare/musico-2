import axiosReq from '@/services/axios-service';
import type { AlbumModel } from '@/types/models-type';

export async function getAll() {
  const res = await axiosReq.get<AlbumModel[]>('/album');
  return res.data;
}
