// Valid Parenthese
const brackets = [
  ["(", ")"],
  ["[", "]"],
  ["{", "}"],
];
const open = brackets.reduce((t, [o, c]) => ({ ...t, [o]: c }), {});
const close = brackets.reduce((t, [o, c]) => ({ ...t, [c]: o }), {});

var isValid = function (s) {
  const stack = [];
  for (const c of [...s]) {
    if (c in open) stack.push(c);
    if (c in close && stack.pop() !== close[c]) return false;
  }
  return !stack.length;
};
