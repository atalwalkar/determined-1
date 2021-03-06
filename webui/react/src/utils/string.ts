export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const truncate = (str: string, maxLen: number): string => {
  if (maxLen < 4) {
    str.slice(0, maxLen);
  }
  if (str.length <= maxLen) {
    return str;
  }
  return str.slice(0, maxLen-3) + '...';
};

export const toHtmlId = (str: string): string => {
  return str
    .replace(/[\s_]/gi, '-')
    .replace(/[^a-z0-9-]/gi, '')
    .toLowerCase();
};
