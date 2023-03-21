import axiosReq from '@/services/axios-service';
import { ITopCarousel } from '@/types/slider-types';

export async function getAll() {
  const res = await axiosReq.get<ITopCarousel>('/top-slider');
  return res.data;
}
