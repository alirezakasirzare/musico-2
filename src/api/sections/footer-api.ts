import axiosReq from '@/services/axios-service';
import { BaseFindOneResult } from '@/types/axios-type';
import type { FooterModel } from '@/types/models-type';

export async function getAll() {
  const res = await axiosReq.get<BaseFindOneResult<FooterModel>>(
    `http://localhost:1337/api/footer?populate=musics,albums,artists`
  );

  return res.data;
}
