import axiosReq from '@/services/axios-service';
import { BaseFindManyResults, BaseFindOneResult } from '@/types/axios-type';
import type { MusicModel } from '@/types/models-type';

type PopulateOptions = ('audio' | 'category' | 'image' | 'album' | 'artist')[];

export async function getAll(populateOptions: PopulateOptions = ['image']) {
  const populate = populateOptions.join(',');

  const res = await axiosReq.get<BaseFindManyResults<MusicModel>>(
    `musics?populate=${populate}`
  );
  return res.data;
}

export async function getSome(
  count: number,
  populateOptions: PopulateOptions = ['image']
) {
  const populate = populateOptions.join(',');

  const res = await axiosReq.get<BaseFindManyResults<MusicModel>>(
    `musics?pagination[limit]=${count}&populate=${populate}`
  );
  return res.data;
}

export async function getById(
  id: number | string,
  populateOptions: PopulateOptions = ['image', 'audio']
) {
  const populate = populateOptions.join(',');

  const res = await axiosReq.get<BaseFindOneResult<MusicModel>>(
    `musics/${id}?populate=${populate}`
  );
  return res.data;
}
