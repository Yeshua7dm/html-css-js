function yu_gi_oh(number) {
  const Numbers = [];

  for (let i = 1; i <= number; i++) {
    let word = i;
    if (i % 2 === 0) {
      word = "yu";
      if (i % 3 === 0) {
        word += "-gi";
      }
      if (i % 5 === 0) {
        word += "-oh";
      }
    }
    if (i % 3 === 0 && i % 2 !== 0) {
      word = "gi";
      if (i % 5 === 0) {
        word += "-oh";
      }
    }
    if (i % 5 === 0 && i % 3 !== 0 && i % 2 !== 0) {
      word = "oh";
    }
    Numbers.push(word);
  }
  console.log(Numbers);
  return Numbers;
}

yu_gi_oh(100);
yu_gi_oh(39);
