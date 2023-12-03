

export interface SearchResultObject {
    keyword: string;
    pagesCount: number;
    films: Film[];
    searchFilmsCountResult: number;
  }
  
  export interface Film {
    filmId: number;
    nameRu: string;
    nameEn: string;
    type: string;
    year: string;
    description?: string;
    filmLength?: string;
    countries: Country[];
    genres: Genre[];
    rating: string;
    ratingVoteCount: number;
    posterUrl: string;
    posterUrlPreview: string;
  }
  
  export interface OneFilm {
    filmId: number;
    nameRu: string;
    nameEn: string;
    webUrl: string;
    posterUrl: string;
    posterUrlPreview: string;
    year: number;
    filmLength: string;
    slogan: string;
    description: string;
    type: string;
    ratingMpaa: string;
    ratingAgeLimits: number;
    premiereRu: string;
    distributors: string;
    premiereWorld: string;
    premiereDigital?: any;
    premiereWorldCountry: string;
    premiereDvd: string;
    premiereBluRay: string;
    distributorRelease: string;
    countries: Country[];
    genres: Genre[];
    facts: string[];
    seasons: any[];
  }
  

  export interface oneGenre {
    genre: string;
    id: number;
  }
 
  
  export interface filmsByGenreResponse {
    total: number;
    totalPages: number;
    items: filmByGenre[];
  }
  
  export interface filmByGenre {
    kinopoiskId: number;
    imdbId?: string;
    nameRu: string;
    nameEn?: any;
    nameOriginal?: string;
    countries: Country[];
    genres: Genre[];
    ratingKinopoisk: number;
    ratingImdb?: number;
    year: number;
    type: string;
    posterUrl: string;
    posterUrlPreview: string;
  }
  
  export interface Genre {
    genre: string;
  }
  
  export interface Country {
    country: string;
  }

  export interface Image {
    imageUrl: string;
    previewUrl: string;
  }

  export interface VideoResponse {
    items: Array<{
      name: string;
      site: string;
      url: string;
    }>
  }