/*************************************************************************
 * Execution        : 1. default node       cmd> nodemon model.js
 * 
 * Purpose          : Sending mail to that person who want to forget password
 *                    
 *                     
 *                    
 * 
 * @file            : sendMail.js
 * @author          : Gurudev Murkar
 * @version         : 1.0
 * @since           : 07-09-2019
 * 
 **************************************************************************/
var nodemailer=require('nodemailer')
// require('dotenv').config()
module.exports={
sendMail(userEmail,newToken,callback)
{
    console.log("i m inside send mail")
var transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        // user:'murkargurudev@gmail.com',
        // pass:'gurudev123'
        user:'murkargurudev@gmail.com',
        pass:'gurudev123'
    }
});

var mailOption={
    from:'murkargurudev@gmail.com',
    to:userEmail,
    subject:'sending mail using node js',
    text:'Reset password',
    // following href is url of the state(url:)
    // html:'<p>this is link to reset</p><a href="http://localhost:4000/#/resetPassword'+newToken+'">Reset PassWord</a>'
    html:'<p>this is link to reset</p><a href="http://18.217.137.107:4000/resetPassword'+newToken+'">Reset PassWord</a>'
    }
transporter.sendMail(mailOption,function(err,info){
    if(err)
    {
        callback(err)
    }
    else{
       
        callback(null,"mail sent");
    }
})
}
}