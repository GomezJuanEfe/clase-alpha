function strToArr(str) {
  return str.split('\n').map(item => {
    const [number, name, score, code] = item.split('#').map(entry => entry.trim());
    return {
      number,
      name,
      score,
      code
    };
  });
}

export default strToArr;