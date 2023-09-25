const { Telegraf } = require('telegraf');
const bot = new Telegraf(BOT_TOKEN);
bot.start((ctx) => ctx.reply('Привет'))
bot.help((ctx) => ctx.reply('Я копирую любое отправленное сообщение'))
bot.on('message', (ctx) => {
    ctx.telegram.sendCopy(ctx.chat.id, ctx.message)
})
bot.launch().then(res => {
    console.log('Run');
}).catch(err => {
    console.log(err);
})
