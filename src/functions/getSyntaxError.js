export default function getSyntaxEroor(code) {
  const lines = code.split('\n');
  const errors = [];

  let stack = [];
  const bracePairs = { '(': ')', '{': '}', '[': ']' };

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    // Check for missing semicolons (except for lines ending with { or } or empty)
    if (
      trimmed &&
      !trimmed.endsWith(';') &&
      !trimmed.endsWith('{') &&
      !trimmed.endsWith('}') &&
      !trimmed.startsWith('#') && // Preprocessor directives
      !trimmed.startsWith('//')
    ) {
      errors.push(`Line ${index + 1}: Possible missing semicolon.`);
    }

    // Check for balanced brackets
    for (let char of line) {
      if (bracePairs[char]) {
        stack.push({ char, line: index + 1 });
      } else if (Object.values(bracePairs).includes(char)) {
        if (
          stack.length === 0 ||
          bracePairs[stack[stack.length - 1].char] !== char
        ) {
          errors.push(`Line ${index + 1}: Unmatched '${char}'`);
        } else {
          stack.pop();
        }
      }
    }

    // Check for unclosed quotes
    const quoteMatches = line.match(/["']/g);
    if (quoteMatches && quoteMatches.length % 2 !== 0) {
      errors.push(`Line ${index + 1}: Unclosed string or char literal.`);
    }
  });

  // Leftover unclosed brackets
  if (stack.length > 0) {
    stack.forEach(({ char, line }) => {
      errors.push(`Line ${line}: Unmatched '${char}'`);
    });
  }

  return errors.length > 0 ? errors : ["✅ No syntax errors found."];
}
