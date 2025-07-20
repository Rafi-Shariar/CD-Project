const cKeywords = new Set([
  "auto", "break", "case", "char", "const", "continue", "default",
  "do", "double", "else", "enum", "extern", "float", "for", "goto",
  "if", "int", "long", "register", "return", "short", "signed",
  "sizeof", "static", "struct", "switch", "typedef", "union",
  "unsigned", "void", "volatile", "while"
]);

export default function getCKeywords(input) {
  // Extract all words using regex
  const words = input.match(/\b[a-zA-Z_]+\b/g) || [];

  // Filter those that are in the C keyword list
  const foundKeywords = words.filter(word => cKeywords.has(word));

  // Remove duplicates by converting to Set again, then back to array
  return [...new Set(foundKeywords)];
}
