const chalk = require('chalk');

module.exports = (req, res, next) => {
    console.log(`${chalk.blue(req.method)} ${chalk.yellow(req.url)}`);
    next();
}
