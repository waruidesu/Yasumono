import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import * as LocalSession from 'telegraf-session-local';
import * as dotenv from "dotenv"
import { StartModule } from './start/start.module';
import { AnimeSearchNameModule } from './anime/anime_name_search/anime-search-name.module';
import { AnimeModule } from './anime/anime.module';
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
  ],
})
export class AppModule {}
