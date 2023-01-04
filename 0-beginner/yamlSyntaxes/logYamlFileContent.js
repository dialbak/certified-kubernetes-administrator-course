const fs = require('fs');
const yaml = require('js-yaml');

// Read the YAML file
const yamlFile = fs.readFileSync('syntaxes.yaml');

// Parse the YAML file
const data = yaml.load(yamlFile);

// Log the data to the console
console.log(data);
