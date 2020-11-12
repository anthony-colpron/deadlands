export type DicesRoll = { results: number[]; sum: number; highest: number };

export type SkillCheckRoll = {
  result: number;
  raises: number;
  note: string;
  success: boolean;
  botch: boolean;
  diceRolls: number[];
};

function rollOneDice(diceType: number, dicePlus = 0, allowAces = true): number {
  const result = Math.ceil(Math.random() * diceType);

  if (result === diceType && allowAces) {
    return result + dicePlus + rollOneDice(diceType, dicePlus);
  }
  return result + dicePlus;
}

function rollDices(numberOfDices: number, diceType: number, dicePlus = 0, allowAces = true): DicesRoll {
  const results = [];
  let highest = 0;

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

function rollSkillCheck(level: number, diceType: number, target = 5, dicePlus = 0, totalPlus = 0): SkillCheckRoll {
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

const getTnForWounds = (wounds: number): number => {
  if (wounds >= 5) return 13;
  if (wounds === 4) return 11;
  if (wounds === 3) return 9;
  if (wounds === 2) return 7;
  if (wounds === 1) return 5;

  return 3;
};

export { rollSkillCheck, getTnForWounds, rollDices };
