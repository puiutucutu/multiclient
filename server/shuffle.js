function shuffle(array) {
  let counter = array.length;
  while (counter > 0) {
    // while there are elements in the array
    let index = Math.floor(Math.random() * counter); // pick a random index
    counter--; // decrease counter by 1

    // swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

export { shuffle };
