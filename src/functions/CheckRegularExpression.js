
export default function CheckRegexMatch(pattern, inputStr) {
    if (typeof pattern !== "string" || typeof inputStr !== "string") {
        return false;
    }

    try {
      
        const regex = new RegExp(`^${pattern}$`);  
        return regex.test(inputStr);
    } catch (e) {
    
        console.error("Invalid regex:", e);
        return false;
    }
}
