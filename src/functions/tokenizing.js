export default function tokenizing(code) {
  const keywords = new Set([
    "auto", "break", "case", "char", "const", "continue", "default", "do",
    "double", "else", "enum", "extern", "float", "for", "goto", "if", "int",
    "long", "register", "return", "short", "signed", "sizeof", "static",
    "struct", "switch", "typedef", "union", "unsigned", "void", "volatile", "while"
  ]);

  const operators = new Set([
    "+", "-", "*", "/", "%", "=", "==", "!=", ">", "<", ">=", "<=", "&&", "||", "!", "++", "--", "&", "|", "^", "~", "<<", ">>"
  ]);

  const punctuators = new Set([";", ",", "(", ")", "{", "}", "[", "]"]);

  const tokenList = [];

  // Remove comments and tokenize
  code = code.replace(/\/\/.*|\/\*[\s\S]*?\*\//g, '');
  const regex = /\b[_a-zA-Z][_a-zA-Z0-9]*\b|[0-9]+(?:\.[0-9]+)?|==|!=|>=|<=|&&|\|\||\+\+|--|<<|>>|[=+\-*/%&|^~<>!;:,()\[\]{}]/g;

  let match;
  while ((match = regex.exec(code)) !== null) {
    const token = match[0];

    if (keywords.has(token)) {
      tokenList.push({ type: 'Keyword', value: token });
    } else if (operators.has(token)) {
      tokenList.push({ type: 'Operator', value: token });
    } else if (punctuators.has(token)) {
      tokenList.push({ type: 'Punctuator', value: token });
    } else if (!isNaN(Number(token))) {
      tokenList.push({ type: 'Constant', value: token });
    } else {
      tokenList.push({ type: 'Identifier', value: token });
    }
  }

  return tokenList;
}
