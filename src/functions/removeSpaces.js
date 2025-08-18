export default function removeSpaces(input) {
  return input
    .split('\n')                       
    .map(line => line.replace(/\s+/g, '')) 
    .join('\n'); 
}
