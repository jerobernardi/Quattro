const config = require("dotenv").config();

module.exports = {
    PORT: process.env.PORT || 3000,
    MAIL_HOST: process.env.MAIL_HOST || '',
    MAIL_PORT: process.env.MAIL_PORT || 0,
    MAIL_USER: process.env.MAIL_USER || '',
    MAIL_PASS: process.env.MAIL_PASS || ''
}