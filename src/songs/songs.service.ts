import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  // local database currently
  private readonly songs: any[] = [];

  create(song: string) {
    this.songs.push(song);
    return this.songs;
  }

  findAll() {
    return this.songs;
  }

  findOne() {
    return this.songs[0];
  }
}
