import { Action, Ctx, Update } from 'nestjs-telegraf';
import { Context } from '../../context.interface';
import { Anime_Search_Name_Scene } from '../constants/anime.constants';

@Update()
export class AnimeSearchNameUpdate {
  @Action('findAnimeByNameButtons')
  async findAnimeByName(@Ctx() ctx: Context) {
    await ctx.scene.enter(Anime_Search_Name_Scene);
  }
}
