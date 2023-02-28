import {Action, InjectBot, On, Start, Update} from "nestjs-telegraf";
import {Context, Telegraf} from "telegraf";
import {startButtons} from "./buttons/start.buttons";
import {sayHi} from "./constants/start.constants";

@Update()
export class StartUpdate {
    constructor(@InjectBot() private readonly bot: Telegraf<Context>) {}

    @Start()
    async startBot(ctx: Context) {
        console.log("Bot started")
        await ctx.reply(sayHi, startButtons())
    }

    @On("text")
    async nText(ctx: Context) {
        await ctx.reply("Write something else")
    }
}