import {Markup} from "telegraf";

export const animePickButtons = () => {
    return Markup.inlineKeyboard([
        Markup.button.callback("Find anime by name", "findAnimeByNameButtons"),
        Markup.button.callback("Find anime by picture", "findAnimeByPictureButtons")
    ])
}