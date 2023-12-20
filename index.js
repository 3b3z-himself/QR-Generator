import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

const questions = [{'message': 'Enter website link: ', 'name': 'url' }];

inquirer.prompt(questions).then((answers) => {
  const url = answers.url;
  var qr_svg = qr.image(url);
  qr_svg.pipe(fs.createWriteStream('qr_image.png'));
  
});
