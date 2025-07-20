const cKeywords = new Set([
  "auto", "break", "case", "char", "const", "continue", "default", "do",
  "double", "else", "enum", "extern", "float", "for", "goto", "if", "int",
  "long", "register", "return", "short", "signed", "sizeof", "static", "struct",
  "switch", "typedef", "union", "unsigned", "void", "volatile", "while"
]);

export default function getIdentifiers(input) {
  // Match words that start with a letter or underscore and can contain digits, underscores, letters
  const tokens = input.match(/\b[_a-zA-Z][_a-zA-Z0-9]*\b/g) || [];

  // Filter: exclude C keywords
  const identifiers = tokens.filter(token => !cKeywords.has(token));

  // Remove duplicates
  return [...new Set(identifiers)];
}
