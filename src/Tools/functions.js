function shuffleDeck(arr) {

    let a = arr.slice();

    let j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }

    return a;
}

function quickSortActions(arr) {
    if (!Array.isArray(arr)) { return null }

    if (arr.length < 1) {
        return [];
    }

    let left = [];
    let right = [];
    let pivot = arr[0];

    //iteration starts at index 1 (after the pivot)
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].card.order < pivot.card.order) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [].concat(quickSortActions(left), pivot, quickSortActions(right));
}

function rollSkillCheck(level, diceType, target, dicePlus = 0, totalPlus = 0) {

    let results = [];
    let highest;
    let note = '';
    let raises = 0;
    let botch = false;
    let success;

    for (let i = 0; i < level; i++) {

        let roll = rollOneDice(diceType);

        if (roll > highest || i === 0) { highest = roll }

        results[i] = roll;


    }

    function rollOneDice() {

        let result = Math.ceil(Math.random() * diceType)

        if (result === diceType) {
            return result + dicePlus + rollOneDice(diceType)
        } else {
            return result + dicePlus
        }

    }

    let result = highest + totalPlus

    if (result >= target) { 

        let raiseCheck = Math.floor((result - target) / 5);
        
        if (raiseCheck >= 1) {
            note = raiseCheck + ' raises!'
            raises = raiseCheck
        } else {
            note = 'success'
        }

        success = true;

    } else {
        note = 'failure'
        success = false;
    }

    let countOnes = 0

    for (let i = 0; i < results.length; i ++) {
        if (results[i] === 1) {countOnes++}
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

    console.log({ result: result, raises: raises, note: note, success: success, botch: botch, diceRolls: results })


    return { result: result, raises: raises, note: note, success: success, botch: botch, diceRolls: results }
}




export { shuffleDeck, quickSortActions, rollSkillCheck }