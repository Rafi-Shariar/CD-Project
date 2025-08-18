export default function removeExtraSpaces(input) {

  const lines = input.split('\n');


  const cleanedLines = lines.map(line =>
    line.replace(/\s+/g, ' ').trim()
  );

  return cleanedLines.join('\n');
}
