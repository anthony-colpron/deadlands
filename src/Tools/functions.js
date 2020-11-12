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

export { shuffleDeck, quickSortActions };
