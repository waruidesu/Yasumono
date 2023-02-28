import {Markup} from "telegraf";

export const startButtons = () => {
    return Markup.inlineKeyboard([
        Markup.button.callback("Anime","animeButton"),
    ],{
        columns: 1
    })
}