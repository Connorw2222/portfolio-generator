const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [name1, github] = profileDataArgs;
console.log(name1,github);

const pageHTML = generatePage(name1, github)
// const printProfileData = profileDataArr => {
//     //This
//     for (let i = 0; i < profileDataArr.length; i++) {
//         console.log(profileDataArr[i]); 
//     }
//     console.log('================');
//     //is the same as this: 
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };
// printProfileData(profileDataArgs)

fs.writeFile('index.html', pageHTML, err=>{
    if (err) throw err;

    console.log("Portfolio complete! Check out index.html to see the output!")
});
