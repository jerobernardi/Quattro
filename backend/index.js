const express = require('express')
const nodemailer = require('nodemailer')
const app = express()
let port = 3000

app.post('/', async (req, res) => {
    const transporter = nodemailer.createTransport({
        host: "mail.quattrovidrios.com.ar",
        port: 587,
        secure: false,
        auth: {
          user: "ventas@quattrovidrios.com.ar",
          pass: "Gonza@2022"
        }
    })
    console.log(JSON.parse())
    // const { name, email, message } = req.body 
    // let info = await transporter.sendMail({
    //     from: `"${name}" <${email.trim()}>`, // sender address
    //     to: "administracion@quattrovidrios.com.ar", // list of receivers
    //     subject: "Consulta", // Subject line
    //     text: message, // plain text body
    // });
    res.send()
})

app.listen(port, () => {
    console.log('listening on port:', port)
})