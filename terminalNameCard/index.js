
const boxen = require('boxen');
const terminalLink = require('terminal-link');
const chalk = require('chalk');
const terminalImage = require('terminal-image');

const data = {
	name: 'Muhammad Afrizal',
	nick: 'WIKIMEDICX',
	email: 'wikimedicx@gmail.com',
	twitter: '@afriiizal',
	instagram: 'afrriiizall',
	website: 'http://wikimedicx.000webhostapp.com/'
}

async function main() {
const photo = await terminalImage.file('img/profile.jpg', { width: '50%'});

const nameCard = `
${photo}
${chalk.bold(data.nick)}

[*] FullName  : ${data.name}
[*] Mail      : ${data.email}
[*] website   : ${terminalLink(data.website)}
[*] Twitter   : ${data.twitter}
[*] Instagram : ${data.instagram}
`;

console.log(boxen(nameCard, {
	padding: 1,
	borderStyle: 'bold'
}));


}

main()

