import { Module } from '@nestjs/common';
import { AnimeQuoteUpdate } from './anime-quote.update';
@Module({
  providers: [AnimeQuoteUpdate],
})
export class AnimeQuoteModule {}
