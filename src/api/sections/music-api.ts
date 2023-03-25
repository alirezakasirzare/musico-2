import axiosReq from '@/services/axios-service';
import { BaseFindManyResults } from '@/types/axios-type';
import type { MusicModel } from '@/types/models-type';

export async function getAll() {
  const res = await axiosReq.get<BaseFindManyResults<MusicModel>>(
    'http://localhost:1337/api/musics'
  );
  return res.data;
}

export async function getById(id: number | string) {
  const res = await axiosReq.get<MusicModel>(`/music/${id}`);
  return res.data;
}
