import axiosReq from '@/services/axios-service';
import type { TopSliderModel } from '@/types/models-type';

export async function getAll() {
  const res = await axiosReq.get<TopSliderModel[]>('/top-slider');
  return res.data;
}
