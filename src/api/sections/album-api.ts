import axiosReq from '@/services/axios-service';
import { BaseFindManyResults, BaseFindOneResult } from '@/types/axios-type';
import type { AlbumModel, ArtistModel } from '@/types/models-type';

type PopulateOptions = ('artist' | 'musics' | 'image')[];

export async function getAll(populateOptions: PopulateOptions = ['image']) {
  const populate = populateOptions.join(',');

  const res = await axiosReq.get<BaseFindManyResults<AlbumModel>>(
    `albums?populate=${populate}`
  );

  return res.data;
}

export async function getSome(
  count: number,
  populateOptions: PopulateOptions = ['image']
) {
  const populate = populateOptions.join(',');

  const res = await axiosReq.get<BaseFindManyResults<AlbumModel>>(
    `albums?pagination[limit]=${count}&populate=${populate}`
  );
  return res.data;
}

export async function getById(
  id: number | string,
  populateOptions: PopulateOptions = ['image']
) {
  const populate = populateOptions.join(',');

  const res = await axiosReq.get<BaseFindOneResult<AlbumModel>>(
    `albums/${id}?populate=${populate}`
  );
  return res.data;
}
