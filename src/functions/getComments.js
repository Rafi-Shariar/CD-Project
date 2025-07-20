export function getComments(code) {
    const lines = code.split('\n');
    const results = [];

    let inMultiLine = false;
    let multiLineBuffer = '';
    let startLine = 0;

    lines.forEach((line, index) => {
        const lineNum = index + 1;

        if (inMultiLine) {
            multiLineBuffer += line + '\n';
            if (line.includes('*/')) {
                inMultiLine = false;
                results.push({
                    line: startLine,
                    type: 'Multi-line',
                    comment: multiLineBuffer.trim(),
                });
                multiLineBuffer = '';
            }
        } else if (line.trim().startsWith('//')) {
            // Single-line comment
            results.push({
                line: lineNum,
                type: 'Single-line',
                comment: line.trim(),
            });
        } else if (line.includes('//')) {
            // Inline single-line comment
            const commentIndex = line.indexOf('//');
            results.push({
                line: lineNum,
                type: 'Single-line',
                comment: line.slice(commentIndex).trim(),
            });
        } else if (line.includes('/*')) {
            // Start of multi-line comment
            inMultiLine = true;
            startLine = lineNum;
            multiLineBuffer = line + '\n';

            if (line.includes('*/')) {
                // Handles one-liner /* ... */ in same line
                inMultiLine = false;
                results.push({
                    line: startLine,
                    type: 'Multi-line',
                    comment: multiLineBuffer.trim(),
                });
                multiLineBuffer = '';
            }
        }
    });

    return results;
}
