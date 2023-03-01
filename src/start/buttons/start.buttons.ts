import { Markup } from 'telegraf';

export const startButtons = () => {
  return Markup.inlineKeyboard(
    [Markup.button.callback('Continue', 'animeButton')],
    {
      columns: 1,
    },
  );
};
