import { ApiBaseData, BaseFindManyResults, MediaInterface } from './axios-type';

export interface ArtistModel extends ApiBaseData {
  name: string;
  image: MediaInterface | null;
  albums: BaseFindManyResults<AlbumModel> | null;
  musics: BaseFindManyResults<MusicModel> | null;
}

export interface CategoryModel extends ApiBaseData {
  name: string;
  image: MediaInterface | null;
}

export interface MusicModel extends ApiBaseData {
  name: string;
  image: MediaInterface | null;
  audio: MediaInterface | null;
}

export interface AlbumModel extends ApiBaseData {
  name: string;
  image: MediaInterface | null;
}

export interface TopSliderModel extends ApiBaseData {
  text: string;
  image: MediaInterface | null;
  path: string;
}
