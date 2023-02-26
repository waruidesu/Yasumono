import {Action, InjectBot, Update} from "nestjs-telegraf";
import {Context, Telegraf} from "telegraf";

@Update()
export class MangaUpdate {
    constructor(@InjectBot() private readonly bot: Telegraf<Context>) {}

    @Action("mangaButton")
    async sayManga(ctx: Context){
        await ctx.reply("you chose manga 0_0")
    }
}