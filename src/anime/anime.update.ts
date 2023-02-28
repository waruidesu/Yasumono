import {Action, Ctx, Update} from "nestjs-telegraf";
import {Context} from "../context.interface";
import {Anime_Scene, selectedAnimeText} from "./constants/anime.constants";
import {animePickFnButtons} from "./buttons/anime.buttons";

@Update()
export class AnimeUpdate {
    @Action("animeButton" || "AnimeSearchNameSceneBack")
    async sayAnime(@Ctx() ctx: Context) {
        await ctx.scene.enter(Anime_Scene)
    }
}