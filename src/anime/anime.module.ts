import { Module } from '@nestjs/common';
import { AnimeSearchNameModule } from './anime_name_search/anime-search-name.module';
import { AnimeUpdate } from './anime.update';
import { AnimeSearchNameScene } from './scenes/anime.scene';
import { AnimeQuoteModule } from './anime_quote/anime-quote.module';

@Module({
  imports: [AnimeSearchNameModule, AnimeQuoteModule],
  providers: [AnimeUpdate, AnimeSearchNameScene],
})
export class AnimeModule {}
