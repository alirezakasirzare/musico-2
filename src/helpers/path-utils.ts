import { IMAGE_BASE_URL } from '@/config/setting-config';

export const optionalImagePath = (path: string | undefined) => {
  if (!path) {
    return '/base-image.png';
  }

  return IMAGE_BASE_URL + path;
};
