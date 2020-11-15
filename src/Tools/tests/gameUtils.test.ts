import { applyArmor } from '../gameUtils';

describe('apply armor', () => {
  it('applies armor to dice type and numbers', () => {
    const diceType = 8;
    const numberOfDices = 4;

    let armor = 1;
    let withArmorApplied = applyArmor(armor, numberOfDices, diceType);

    expect(withArmorApplied.diceType).toBe(6);
    expect(withArmorApplied.numberOfDices).toBe(4);

    armor = 2;
    withArmorApplied = applyArmor(armor, numberOfDices, diceType);

    expect(withArmorApplied.diceType).toBe(4);
    expect(withArmorApplied.numberOfDices).toBe(4);

    armor = 4;
    withArmorApplied = applyArmor(armor, numberOfDices, diceType);

    expect(withArmorApplied.diceType).toBe(4);
    expect(withArmorApplied.numberOfDices).toBe(2);

    armor = 6;
    withArmorApplied = applyArmor(armor, numberOfDices, diceType);

    expect(withArmorApplied.diceType).toBe(4);
    expect(withArmorApplied.numberOfDices).toBe(0);

    armor = 8;
    withArmorApplied = applyArmor(armor, numberOfDices, diceType);

    expect(withArmorApplied.diceType).toBe(4);
    expect(withArmorApplied.numberOfDices).toBe(0);
  });

  it('applies armor to dice type and numbers and dicePlus', () => {
    const dicePlus = 4;
    const diceType = 12;
    const numberOfDices = 4;

    let armor = 1;
    let withArmorApplied = applyArmor(armor, numberOfDices, diceType, dicePlus);

    expect(withArmorApplied.dicePlus).toBe(2);
    expect(withArmorApplied.diceType).toBe(12);
    expect(withArmorApplied.numberOfDices).toBe(4);

    armor = 4;
    withArmorApplied = applyArmor(armor, numberOfDices, diceType, dicePlus);

    expect(withArmorApplied.dicePlus).toBe(0);
    expect(withArmorApplied.diceType).toBe(8);
    expect(withArmorApplied.numberOfDices).toBe(4);

    armor = 6;
    withArmorApplied = applyArmor(armor, numberOfDices, diceType, dicePlus);

    expect(withArmorApplied.diceType).toBe(4);
    expect(withArmorApplied.numberOfDices).toBe(4);

    armor = 8;
    withArmorApplied = applyArmor(armor, numberOfDices, diceType, dicePlus);

    expect(withArmorApplied.diceType).toBe(4);
    expect(withArmorApplied.numberOfDices).toBe(2);
  });
});
