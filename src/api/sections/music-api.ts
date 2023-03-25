import axiosReq from '@/services/axios-service';
import { BaseFindManyResults, BaseFindOneResult } from '@/types/axios-type';
import type { MusicModel } from '@/types/models-type';

type PopulateOptions = ('audio' | 'category' | 'image' | 'album' | 'artist')[];

export async function getAll(
  populateOptions: PopulateOptions = ['image', 'audio']
) {
  const populate = populateOptions.join(',');

  const res = await axiosReq.get<BaseFindManyResults<MusicModel>>(
    `http://localhost:1337/api/musics?populate=${populate}`
  );
  return res.data;
}

export async function getById(
  id: number | string,
  populateOptions: PopulateOptions = ['image', 'audio']
) {
  const populate = populateOptions.join(',');

  const res = await axiosReq.get<BaseFindOneResult<MusicModel>>(
    `http://localhost:1337/api/musics/${id}?populate=${populate}`
  );
  return res.data;
}
