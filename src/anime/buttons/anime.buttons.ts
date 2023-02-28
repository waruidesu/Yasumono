import {Markup} from "telegraf";

export const animePickFnButtons = () => {
    return Markup.inlineKeyboard([
        Markup.button.callback("Find anime by name", "findAnimeByNameButtons"),
    ])
}
