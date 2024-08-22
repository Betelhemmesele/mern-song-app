export interface Song {
    _id: string;
    title: string;
    artist: string;
    album: string;
    genre: string;
    file: File | null;
    file_url: string;
  }
  