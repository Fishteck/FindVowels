const findVowels = str => {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let key of str.toLowerCase()) {
      if (vowels.includes(key)) {
        count++;
      }
    }
    return count;
  };
  console.log(findVowels('hello'));