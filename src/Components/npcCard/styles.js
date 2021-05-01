export const getStyleForWound = (wound) => {
  let textColor;
  let backgroundColor;

  switch (wound) {
    case 1:
      backgroundColor = 'white';
      break;
    case 2:
      backgroundColor = 'green';
      break;
    case 3:
      backgroundColor = 'yellow';
      break;
    case 4:
      backgroundColor = 'red';
      break;
    case 5:
      backgroundColor = 'black';
      textColor = 'white';
      break;
    default:
  }

  if (wound > 5) {
    backgroundColor = 'black';
    textColor = 'white';
  }
  return { color: textColor, backgroundColor };
};
