import axiosReq from '@/services/axios-service';
import { BaseFindManyResults, BaseFindOneResult } from '@/types/axios-type';
import type { ArtistModel } from '@/types/models-type';

type PopulateOptions = ('albums' | 'musics' | 'image')[];

export async function getSome(count: number) {
  const res = await axiosReq.get<ArtistModel[]>(`/artists?_limit=${count}`);
  return res.data;
}

export async function getAll(populateOptions: PopulateOptions = ['image']) {
  const populate = populateOptions.join(',');

  const res = await axiosReq.get<BaseFindManyResults<ArtistModel>>(
    `http://localhost:1337/api/artists/?${populate}`
  );

  return res.data;
}

export async function getById(
  id: number | string,
  populateOptions: PopulateOptions = ['image']
) {
  const populate = populateOptions.join(',');

  const res = await axiosReq.get<BaseFindOneResult<ArtistModel>>(
    `http://localhost:1337/api/artists/${id}?populate=${populate}`
  );
  return res.data;
}
