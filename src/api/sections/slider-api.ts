import axiosReq from '@/services/axios-service';
import { BaseFindOneResult } from '@/types/axios-type';
import type { SliderModel } from '@/types/models-type';

export async function get() {
  const res = await axiosReq.get<BaseFindOneResult<SliderModel>>(
    'slider?populate=musics.slider_image'
  );

  return res.data;
}
