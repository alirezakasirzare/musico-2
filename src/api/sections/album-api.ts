import axiosReq from '@/services/axios-service';
import { BaseFindManyResults } from '@/types/axios-type';
import type { AlbumModel, ArtistModel } from '@/types/models-type';

type PopulateOptions = ('artist' | 'musics' | 'image')[];

export async function getAll(populateOptions: PopulateOptions = ['image']) {
  const populate = populateOptions.join(',');

  const res = await axiosReq.get<BaseFindManyResults<AlbumModel>>(
    `http://localhost:1337/api/albums?populate=${populate}`
  );

  return res.data;
}

export async function getOne(id: number | string) {
  const res = await axiosReq.get<AlbumModel>(`/album/${id}`);
  return res.data;
}
