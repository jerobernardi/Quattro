const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
const app = express()
let port = 3000

app.use(cors())
app.use(express.json())
app.post('/', async (req, res) => {
    const testEmail = nodemailer.createTestAccount()
    const transporter = nodemailer.createTransport({
        host: "mail.quattrovidrios.com.ar",
        port: 465,
        secure: (await testEmail).pop3.secure,
        auth: {
          user: "ventas@quattrovidrios.com.ar",
          pass: "Gonza@2022"
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

app.listen(port, () => {
    console.log('listening on port:', port)
})