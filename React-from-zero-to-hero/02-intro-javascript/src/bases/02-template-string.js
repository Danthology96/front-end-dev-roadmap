
// constants and variables
const name = 'Daniel';
const lastName = 'Novillo';

const fullname = name + ' ' + lastName;

console.log(fullname);

const fullnameTemplateString = `
${name} 
${lastName}
`;

console.log(fullnameTemplateString);


function getSalute(name) {
    return 'Hello ' + name;
}

console.log(`This is a text: ${getSalute(fullnameTemplateString)}`);


