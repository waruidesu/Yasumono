import { Markup } from 'telegraf';

export const AnimeSearchNameSceneButtons = () => {
  return Markup.inlineKeyboard([
    Markup.button.callback('Back', 'AnimeSearchNameSceneBack'),
  ]);
};
