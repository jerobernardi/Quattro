const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
const config = require('./config.js') 

const app = express()
let port = config.PORT

app.use(cors())
app.use(express.json())
app.post('/', async (req, res) => {
    const testEmail = nodemailer.createTestAccount()
    const transporter = nodemailer.createTransport({
        host: config.MAIL_HOST,
        port: config.MAIL_PORT,
        secure: (await testEmail).pop3.secure,
        auth: {
          user: config.MAIL_USER,
          pass: config.MAIL_PASS
        },
    })
    const { name, email, message } = req.body

    try {
        let info = await transporter.sendMail({
        from: `"${name}" <${email}>`, // sender address
        to: "ventas@quattrovidrios.com.ar", // list of receivers
        subject: "Consulta", // Subject line
        text: message, // plain text body
        });
    
        res.status(info.accepted ? 200 : 400).send(info.response)
    } catch (e) {
        res.status(400).send(e.message)
    }
})

if (!config.MAIL_HOST || !config.MAIL_PORT || !config.MAIL_USER || !config.MAIL_PASS) {
    console.error("Configurations are missing")
    return
}

app.listen(port, () => {
    console.log('listening on port:', port)
})