import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import * as LocalSession from 'telegraf-session-local';
import * as dotenv from "dotenv"
import { StartModule } from './start/start.module';
import { AnimeModule } from './anime/anime.module';
import { MangaModule } from './manga/manga.module';
dotenv.config()

const session = new LocalSession({database: 'session_data.js'})
@Module({
  imports: [
      TelegrafModule.forRoot({
          middlewares: [session.middleware()],
          token: process.env.TOKEN
      }),
      StartModule,
      AnimeModule,
      MangaModule
  ],
})
export class AppModule {}
