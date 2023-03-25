import axiosReq from '@/services/axios-service';
import { BaseFindManyResults } from '@/types/axios-type';
import type { CategoryModel } from '@/types/models-type';

type PopulateOptions = ('musics' | 'image')[];

export async function getAll(populateOptions: PopulateOptions = ['image']) {
  const populate = populateOptions.join(',');

  const res = await axiosReq.get<BaseFindManyResults<CategoryModel>>(
    `http://localhost:1337/api/categories?populate=${populate}`
  );
  return res.data;
}
