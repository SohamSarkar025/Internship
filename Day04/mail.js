
const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'sohamsarkarofficial000@gmail.com',
        pass:'rhoa ovpf shel kkbm'
    }
})

const recipients = [
    'rupamadhikari117@gmail.com'
]
async function sendBulkEmails(){
    for(const recv of recipients){
        const mailOption={
            from:'sohamsarkarofficial000@gmail.com',
            to:recv,
            subject:"Greeting From SOHAM",
            text: `Hi ${recv},

            Thank you for contacting me through my portfolio. I’ve received your message and will get back to you as soon as possible.

            If you have shared a project idea, feedback, or any inquiry, I truly appreciate your time and interest.

            You can also connect with me on LinkedIn or GitHub (links on my portfolio).

            Have a great day!

            Best regards,  
            Soham Sarkar  
            (Full-Stack Web Developer)`
        }
        try{
            const info=await transporter.sendMail(mailOption);
            console.log("Mail Sent to Everyone!")
        }catch(err){
            console.log(err)
        }
    }
}
sendBulkEmails()