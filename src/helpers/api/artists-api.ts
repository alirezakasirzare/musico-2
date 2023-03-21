import axiosReq from '@/services/axios-service';
import ArtistModel from '@/types/artist-type';

export async function getSome(count: number) {
  const res = await axiosReq.get<ArtistModel[]>(`/artists?_limit=${count}`);
  return res.data;
}
