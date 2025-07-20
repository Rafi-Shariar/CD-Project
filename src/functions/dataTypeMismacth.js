export default function dataTypeMismatch(code) {
  const lines = code.split('\n');
  const variableMap = {};
  const errors = [];

  const declarationRegex = /\b(int|float|double|char)\s+([^;]+);/;
  const operationRegex = /(\w+)\s*=\s*([\w\s+\-*/%]+);/;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Variable Declaration
    const declMatch = line.match(declarationRegex);
    if (declMatch) {
      const type = declMatch[1];
      const vars = declMatch[2].split(',');
      for (let v of vars) {
        const [name] = v.trim().split('=');
        variableMap[name.trim()] = type;
      }
    }

    // Operation Line
    const opMatch = line.match(operationRegex);
    if (opMatch) {
      const leftVar = opMatch[1].trim();
      const rightExpr = opMatch[2];

      const rightVars = rightExpr
        .split(/[\s+\-*/%]+/)
        .map(token => token.trim())
        .filter(token => /^[a-zA-Z_]\w*$/.test(token));

      const types = new Set();

      for (let v of rightVars) {
        if (variableMap[v]) {
          types.add(variableMap[v]);
        }
      }

      if (types.size > 1) {
        errors.push(`❌ Data type mismatch in operation on line ${i + 1}: ${line}`);
      }
    }
  }

  return errors.length > 0 ? errors : ["✅ No data type mismatch found."];
}
