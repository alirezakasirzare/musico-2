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
  musics: BaseFindManyResults<MusicModel> | null;
}

export interface MusicModel extends ApiBaseData {
  name: string;
  image: MediaInterface | null;
  slider_image: MediaInterface | null;
  audio: MediaInterface | null;
}

export interface AlbumModel extends ApiBaseData {
  name: string;
  image: MediaInterface | null;
  musics: BaseFindManyResults<MusicModel> | null;
}

export interface FooterModel extends ApiBaseData {
  musics: BaseFindManyResults<MusicModel> | null;
  albums: BaseFindManyResults<AlbumModel> | null;
  artists: BaseFindManyResults<ArtistModel> | null;
}

export interface SliderModel extends ApiBaseData {
  musics: BaseFindManyResults<MusicModel> | null;
}
