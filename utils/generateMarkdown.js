// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === 'None') return '';
  return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === 'None') return '';
  // You might need to adjust the link depending on the license
  return `https://opensource.org/licenses/${license}`;
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'None') return '';
  return `## License\nThis project is licensed under the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
