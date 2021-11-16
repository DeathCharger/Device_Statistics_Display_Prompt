const os = require(`os`)
const chalk = require(`chalk`)
let dat = os.cpus()
const log = console.log;

/*
SINGLE LINE CODE [IGNORE]

console.log(`%c Processor: ${dat[0].model} \n Device Name: ${os.hostname()} \n
 User Name: ${os.userInfo().username} \n Home dir: ${os.userInfo().homedir} \n
  OS: ${os.platform()} ${os.arch()} \n Memory:`+Math.floor(os.totalmem() / 1073741824)+` GB \n 
  Uptime: ${os.uptime}`, `color: pink; font-weight: bold; background-color: black`)
  */

function update() {
  var fmem = os.freemem()
  var tmem = os.totalmem()

  var freemem = Math.floor(fmem/1048576)
  var totalmem = Math.floor(tmem/1073741824)


  var percentage = fmem/tmem
  var percentage = Math.floor(percentage*100)
  var percentage = 100-percentage

    console.clear()
    var uptime = os.uptime()
    var uptime = Math.floor(uptime/60)
    console.log(chalk.underline.bold(`DEVICE STATISTICS`))

    console.log(`\n`)
    console.log(chalk.whiteBright(`Device Name: ${os.hostname()}`))
    console.log(chalk.whiteBright(`User Name: `) + chalk.redBright(`${os.userInfo().username}`))
    console.log(chalk.whiteBright(`Device Uptime : `) + chalk.greenBright(`${uptime} minutes`))
    console.log(chalk.whiteBright(`Operating System: `) + chalk.bold.blueBright(`${os.platform().toUpperCase()} ${os.arch()}`))
    log(chalk.whiteBright(`Home Directory: `) + chalk.bold.greenBright(`${os.userInfo().homedir}`))
    log(chalk.whiteBright(`Processor: `) + chalk.yellowBright.bold(`${dat[0].model}`))
    log(chalk.whiteBright.underline.bold(`Memory Usage:`) + chalk.bold.magentaBright(` ${percentage} % [ Free: ${freemem} MB / ${totalmem} GB]`))



}

update()
setInterval(update, 1500);
