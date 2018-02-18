const promptFilePath = require('inquirer-file-path');

const cwd = process.cwd();
const projectPath = `${cwd}/src`;

const generators = [
  require('./generators/component-generator')(projectPath),
];

module.exports = plop => {
  plop.setPrompt('filePath', promptFilePath);
  generators.map(g => plop.setGenerator(g.name, g.generator));
};
