// functions/CheckContainsSubstring.js
export default function CheckSubstring(substring, mainstr) {
    // Ensure both are strings
    if (typeof substring !== "string" || typeof mainstr !== "string") {
        return false;
    }

    return mainstr.includes(substring);
}
