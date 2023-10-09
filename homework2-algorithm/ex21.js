//Find the Difference
const findTheDifference = (s, t) => {
  const compare = (a, b) => a.charCodeAt(0) - b.charCodeAt(0);
  s = [...s].sort(compare);
  t = [...t].sort(compare);
  for (let i = 0; i < t.length; i++) {
    if (s[i] != t[i]) return t[i];
  }
};
