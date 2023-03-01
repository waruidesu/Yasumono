import { Module } from '@nestjs/common';
import { AnimeSearchNameModule } from './anime_name_search/anime-search-name.module';
import { AnimeUpdate } from './anime.update';
import { AnimeSearchNameScene } from './scenes/anime.scene';

@Module({
  imports: [AnimeSearchNameModule],
  providers: [AnimeUpdate, AnimeSearchNameScene],
})
export class AnimeModule {}
