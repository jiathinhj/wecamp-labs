//Crawler Log Folder
const minOperations = (logs) => {
  let steps = logs.map((e) => {
    if (e == "./") return 0;
    if (e == "../") return -1;
    return 1;
  });
  return steps.reduce((t, e) => (t + e >= 0 ? t + e : t), 0);
};
