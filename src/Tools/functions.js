function shuffleDeck(arr) {
  const a = arr.slice();

  let j;
  let x;
  let i;
  for (i = a.length; i; i -= 1) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }

  return a;
}

function quickSortActions(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  if (arr.length < 1) {
    return [];
  }

  const left = [];
  const right = [];
  const pivot = arr[0];

  // iteration starts at index 1 (after the pivot)
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i].card.order < pivot.card.order) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [].concat(quickSortActions(left), pivot, quickSortActions(right));
}

function rollOneDice(diceType, dicePlus = 0, allowAces = true) {
  const result = Math.ceil(Math.random() * diceType);

  if (result === diceType && allowAces) {
    return result + dicePlus + rollOneDice(diceType, dicePlus);
  }
  return result + dicePlus;
}

function rollDices(numberOfDices, diceType, dicePlus = 0, allowAces = true) {
  const results = [];
  let highest;

  for (let i = 0; i < numberOfDices; i += 1) {
    const roll = rollOneDice(diceType, dicePlus, allowAces);

    if (roll > highest || i === 0) {
      highest = roll;
    }

    results[i] = roll;
  }

  const sum = results.reduce((acc, value) => acc + value, 0);

  return { results, sum, highest };
}

function rollSkillCheck(level, diceType, target = 5, dicePlus = 0, totalPlus = 0) {
  let note = '';
  let raises = 0;
  let botch = false;
  let success;

  const { results, highest } = rollDices(level, diceType, dicePlus);

  const result = highest + totalPlus;

  if (result >= target) {
    const raiseCheck = Math.floor((result - target) / 5);

    if (raiseCheck >= 1) {
      note = `${raiseCheck} raises!`;
      raises = raiseCheck;
    } else {
      note = 'success';
    }

    success = true;
  } else {
    note = 'failure';
    success = false;
  }

  let countOnes = 0;

  for (let i = 0; i < results.length; i += 1) {
    if (results[i] === 1) {
      countOnes += 1;
    }
  }

  if (countOnes > results.length / 2) {
    if (result >= target) {
      note = 'failure (botch)';
    } else {
      note = 'BOTCH!';
      botch = true;
    }
    success = false;
  }

  // console.log({ result, raises, note, success, botch, diceRolls: results });

  return { result, raises, note, success, botch, diceRolls: results };
}

const getTnForWounds = (wounds) => {
  if (wounds >= 5) return 13;
  if (wounds === 4) return 11;
  if (wounds === 3) return 9;
  if (wounds === 2) return 7;
  if (wounds === 1) return 5;

  return 3;
};

export { shuffleDeck, quickSortActions, rollSkillCheck, getTnForWounds, rollDices };
