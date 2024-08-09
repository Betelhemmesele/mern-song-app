export interface GenreStatistics {
    _id: string;
    count: number;
  }
  
  export interface ArtistStatistics {
    _id: string;
    count: number;
  }
  
  export interface AlbumStatistics {
    _id: string;
    count: number;
  }
  
  export interface Statistics {
    totalSongs: number;
    totalArtists: number;
    totalAlbums: number;
    totalGenres: number;
    songsByGenre: GenreStatistics[];
    songsByArtist: ArtistStatistics[];
    songsByAlbum: AlbumStatistics[];
  }
