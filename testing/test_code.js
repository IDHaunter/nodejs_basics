
  const utils = require('../core/utils');
  const fs = require('fs');

  console.log(`${utils.now()} - test_code.js ***********`);

  //let result = fs.readFileSync('some.txt','utf-8');
  //fs.writeFileSync('some.txt', result + '\nHello world');
  //console.log(result);

  fs.readFile('./text-files/some.txt','utf-8',(err,data)=>{
    if (err) {
      console.log('error - ',err);

      //fs.mkdirSync('text-files');
      fs.mkdir('text-files', () => {
        fs.writeFile('./text-files/some.txt','Hello world', (err,data)=>{
          console.log('Directory and new file are created');} );
      })

    } else {
      fs.writeFile('./text-files/some.txt', data + '\n------', (err,data)=>{
        console.log('text-files/some.txt appended with ------ !');
    })
    }

  })

  //unlink - to delete files
  //rmdir - to delete dirs
  /*
  fs.unlink('./text-files/some.txt', (err) => {
    if (err) {throw err}
    else {
      console.log('file ./text-files/some.txt removed');
      fs.rmdir('./text-files', () => {
        console.log('dir ./text-files removed');
      });
    }

  } );
*/
  const inputString1 = '"123""567""asdv"".""adsf5-@"';
  const inputString2 = '"123"';
  const processedstring = utils.likeJSON(inputString1);
  
  console.log(processedstring);
  console.log(utils.likeJSON(inputString2));
  