import axiosReq from '@/services/axios-service';
import { ArtistModel } from '@/types/models-type';

export async function searchByText(text: string) {
  const res = await axiosReq.get<ArtistModel[]>(`artists?name_like=${text}`);
  return res.data;
}
