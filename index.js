const { Telegraf, Telegram } = require('telegraf')
require('dotenv').config();

const bot = new Telegraf(process.env.API_KEY) //сюда помещается токен, который дал botFather
bot.start((ctx) => ctx.reply(`Привет, ${ctx.message.from.first_name}! Я буду присылать тебе расписание пар для К20-1м, введи команду /timetable и ты получишь расписание на сегодня`)) //ответ бота на команду /start
bot.help((ctx) => ctx.reply(`Если у тебя возникли вопросы по работе бота пиши @vladbannik`)) //ответ бота на команду /help
bot.command('timetable', (ctx) => {
    let date = new Date();
    let resultTimeTable = ''
    switch (date.getDay()) {
        case 1:///понедельник 
            resultTimeTable = 'https://drive.google.com/file/d/1xm0gy8WVQU8CL3IV7BcfL_QvFMjskge6/view?usp=sharing'
            break;
        case 2://вторник
            resultTimeTable = 'https://drive.google.com/file/d/1BiCeh87x2CqaVESFUHcOCbapXeVNfw5P/view?usp=sharing'
            break;
        case 3://среда
            resultTimeTable = 'https://drive.google.com/file/d/1syEqOW2KP7HpkLLtKFZhu7n8Edb1pZcl/view?usp=sharing'
            break;
        case 4://четверг
            resultTimeTable = 'https://drive.google.com/file/d/1sq9sZcbuXEv0m3Xls1vRxaNWNtZnQcP_/view?usp=sharing'
            break;
        default:
            resultTimeTable = 'https://drive.google.com/file/d/1PwEyjCEBVNLeguKnXoMukxoBjTvyng1O/view?usp=sharing'
    }
    ctx.replyWithPhoto(resultTimeTable)
})

bot.launch() // запуск бота