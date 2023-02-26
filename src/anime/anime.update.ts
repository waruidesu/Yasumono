import {Action, Ctx, InjectBot, Message, On, Update} from "nestjs-telegraf";
import { Context } from "../context.interface";
import {Telegraf} from "telegraf";
import {selectedAnimeText, startFindAnimeScene} from "./constants/anime.constants";
import {animePickButtons} from "./buttons/anime.buttons";
import {AnimeService} from "./anime.service";

@Update()
export class AnimeUpdate{
    constructor(@InjectBot() private readonly bot: Telegraf<Context>, private readonly animeService: AnimeService) {}

    //start
    @Action("animeButton")
    async sayAnime(@Ctx() ctx: Context){
        await ctx.reply(selectedAnimeText, animePickButtons())
    }
    //search by name
    @Action("findAnimeByNameButtons")
    async findAnimeByName(@Ctx() ctx: Context) {
        await ctx.reply(startFindAnimeScene)
    }

    @On("text")
    async animeNameQ(@Message("text") msg: Context, @Ctx() ctx: Context) {
        const res = await this.animeService.animeNameSearch(msg)
        await ctx.reply(res)
    }

    //image search
    @Action("findAnimeByPictureButtons")
    async findAnimeByPicture() {
        return this.animeService.animePictureSearch()
    }
}