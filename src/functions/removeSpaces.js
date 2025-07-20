export default function removeSpaces(input) {
  return input
    .split('\n')                        // split into lines
    .map(line => line.replace(/\s+/g, '')) // remove all whitespace from each line
    .join('\n');                        // join lines back
}
