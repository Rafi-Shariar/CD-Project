import removeSpaces from "./removeSpaces";

export default function getStringLength(code) {
  code = removeSpaces(code);
  return code.length;
}
