import axiosReq from '@/services/axios-service';
import type { ArtistModel } from '@/types/models-type';

export async function getSome(count: number) {
  const res = await axiosReq.get<ArtistModel[]>(`/artists?_limit=${count}`);
  return res.data;
}

export async function getAll() {
  const res = await axiosReq.get<ArtistModel[]>('/artists');
  return res.data;
}

export async function getById(id: number | string) {
  const res = await axiosReq.get<ArtistModel[]>(`/artists/${id}`);
  return res.data;
}
