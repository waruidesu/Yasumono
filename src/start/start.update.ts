import {Action, InjectBot, Start, Update} from "nestjs-telegraf";
import {Context, Telegraf} from "telegraf";
import {startButtons} from "./buttons/start.buttons";
import {sayHi} from "./constants/start.constants";

@Update()
export class StartUpdate {
    constructor(@InjectBot() private readonly bot: Telegraf<Context>) {}

    @Start()
    async startBot(ctx: Context) {
        await ctx.reply(sayHi, startButtons())
    }
}