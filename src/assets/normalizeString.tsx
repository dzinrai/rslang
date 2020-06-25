function normalizeString(str: string) {
  let newStr = str;
  newStr = newStr.replace('<b>', '');
  newStr = newStr.replace('<i>', '');
  newStr = newStr.replace('</b>', '');
  newStr = newStr.replace('</i>', '');
  return newStr;
}

export default normalizeString;
