const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  auth: {
    user: 'dudarvitalik1@gmail.com',
    pass: 'albxssomtytrmvlq',
  },
});

let message = {
  from: '"LR JS2022" <dudarvitalik1@gmail.com>',
  to: 'webkpi21@gmail.com',
  subject: 'ЛР4-6 ТР-12 Дудар Віталій',
  text: 'Дудар Віталій Олегович\nТР-12\nЛР4-6 JS2022\n Оцінка: 12/12',
};

transporter.sendMail(message, function (err, info) {
  if (err) {
    console.log(err);
  } else {
    console.log(info);
  }
});

// dudarvitalik1@ukr.net
// webkpi21@gmail.com
