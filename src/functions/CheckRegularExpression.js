// functions/CheckRegexMatch.js
export default function CheckRegexMatch(pattern, inputStr) {
    // Ensure both are strings
    if (typeof pattern !== "string" || typeof inputStr !== "string") {
        return false;
    }

    try {
        // Convert pattern string to actual RegExp object
        const regex = new RegExp(`^${pattern}$`);  // ^...$ ensures full match
        return regex.test(inputStr);
    } catch (e) {
        // If invalid regex pattern is passed
        console.error("Invalid regex:", e);
        return false;
    }
}
