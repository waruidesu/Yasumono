import {
  Action,
  Command,
  Ctx,
  InjectBot,
  Message,
  On,
  Scene,
  SceneEnter,
} from 'nestjs-telegraf';
import {
  Anime_Scene,
  Anime_Search_Name_Scene,
  enterTheNameOfTheAnime,
} from '../../constants/anime.constants';
import { Context } from '../../../context.interface';
import { Telegraf } from 'telegraf';
import { AnimeSearchNameService } from './anime-search-name.service';
import { AnimeSearchNameSceneButtons } from './buttons/anime-search-name.buttons';

@Scene(Anime_Search_Name_Scene)
export class AnimeSearchNameScene {
  constructor(
    @InjectBot() private readonly bot: Telegraf<Context>,
    private readonly animeService: AnimeSearchNameService,
  ) {}
  @SceneEnter()
  onSceneEnter() {
    console.log('the user has entered the scene(anime search name)');
    return enterTheNameOfTheAnime;
  }

  @On('text')
  async animeNameQ(@Message('text') msg: string, @Ctx() ctx: Context) {
    const res = await this.animeService.animeNameSearch(msg);
    await ctx.reply(res, AnimeSearchNameSceneButtons());
  }

  @Action('AnimeSearchNameSceneBack')
  onSceneLeave(@Ctx() ctx: Context) {
    ctx.scene.enter(Anime_Scene);
    ctx.scene.leave();
    console.log('User leave from scene');
  }
}
