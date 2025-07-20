export default function removeExtraSpaces(input) {
  // Split by lines
  const lines = input.split('\n');

  // Clean each line separately
  const cleanedLines = lines.map(line =>
    line.replace(/\s+/g, ' ').trim()
  );

  // Join lines back
  return cleanedLines.join('\n');
}
