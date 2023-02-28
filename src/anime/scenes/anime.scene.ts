import {Action, Command, Ctx, InjectBot, Message, On, Scene, SceneEnter} from "nestjs-telegraf";
import {Anime_Scene, selectedAnimeText} from "../constants/anime.constants";
import {animePickFnButtons} from "../buttons/anime.buttons";
import {Context} from "../../context.interface";


@Scene(Anime_Scene)
export class AnimeSearchNameScene {

    @SceneEnter()
    onSceneEnter(@Ctx() ctx: Context) {
        console.log("the user has entered the scene(anime)")
        ctx.reply(selectedAnimeText, animePickFnButtons())
    }
}