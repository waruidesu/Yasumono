import {Markup} from "telegraf";

export const AnimeSearchNameSceneButtons = () => {
    return Markup.inlineKeyboard([
        Markup.button.callback("Hark back", "AnimeSearchNameSceneBack")
    ])
}
