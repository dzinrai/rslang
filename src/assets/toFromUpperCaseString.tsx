function toFromUpperCaseString(str: string) {
  if (!str || str.length === 0) return '';
  return `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`;
}

export default toFromUpperCaseString;
