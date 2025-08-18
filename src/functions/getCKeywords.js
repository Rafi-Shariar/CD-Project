const cKeywords = new Set([
  "auto", "break", "case", "char", "const", "continue", "default",
  "do", "double", "else", "enum", "extern", "float", "for", "goto",
  "if", "int", "long", "register", "return", "short", "signed",
  "sizeof", "static", "struct", "switch", "typedef", "union",
  "unsigned", "void", "volatile", "while"
]);

export default function getCKeywords(input) {
  
  const words = input.match(/\b[a-zA-Z_]+\b/g) || [];


  const foundKeywords = words.filter(word => cKeywords.has(word));

  
  return [...new Set(foundKeywords)];
}
