import axiosReq from '@/services/axios-service';
import { BaseFindManyResults } from '@/types/axios-type';
import type { ArtistModel } from '@/types/models-type';

export async function getSome(count: number) {
  const res = await axiosReq.get<ArtistModel[]>(`/artists?_limit=${count}`);
  return res.data;
}

export async function getAll(getAlbums: false) {
  const populate = getAlbums ? 'image,' : 'image,albums';

  const res = await axiosReq.get<BaseFindManyResults<ArtistModel>>(
    `http://localhost:1337/api/artists/?${populate}`
  );

  return res.data;
}

export async function getById(id: number | string) {
  const res = await axiosReq.get<ArtistModel>(`/artists/${id}`);
  return res.data;
}
