import {Markup} from "telegraf";

export const startButtons = () => {
    return Markup.inlineKeyboard([
        Markup.button.callback("Anime","animeButton"),
        Markup.button.callback("Manga", "mangaButton")
    ],{
        columns: 2
    })
}