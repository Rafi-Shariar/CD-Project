export default function removeComments(code) {
  const lines = code.split('\n');
  let inMultiLineComment = false;
  let result = [];

  for (let line of lines) {
    let cleanLine = '';
    let i = 0;

    while (i < line.length) {
      if (!inMultiLineComment && line[i] === '/' && line[i + 1] === '/') {
        // Single-line comment start
        break; // ignore rest of the line
      } else if (!inMultiLineComment && line[i] === '/' && line[i + 1] === '*') {
        // Multi-line comment start
        inMultiLineComment = true;
        i += 2;
      } else if (inMultiLineComment && line[i] === '*' && line[i + 1] === '/') {
        // Multi-line comment end
        inMultiLineComment = false;
        i += 2;
      } else if (!inMultiLineComment) {
        cleanLine += line[i];
        i++;
      } else {
        i++;
      }
    }

    if (cleanLine.trim() !== '' || !inMultiLineComment) {
      result.push(cleanLine);
    }
  }

  return result.join('\n');
}
