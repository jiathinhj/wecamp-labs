//Make The String Great
const makeGood = (s) => {
  const badIndex = () => {
    for (let i = 0; i < s.length - 1; i++) {
      if (Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1)) == 32) return i;
    }
    return -1;
  };
  let i = badIndex();
  while (i > -1) {
    s = s.substring(0, i) + s.substring(i + 2);
    i = badIndex();
  }
  return s;
};
