function basicTeenager(age) {
  if (age === '13-19') {
    return `You are a teenager!`
  }
}

function teenager(age) {
  if (age === '13-19') {
    `You are a teenager!`
  } else {
    `You are not a teenager!`
  }
}

function ageChecker(age) {
  if(age === '13-19') {
    console.log('You are a teenager!');
  } else {
    console.log('You are a kid');
  }
}

function ternaryTeenager(age) {
  console.log('You' + (age === '15' ? 'are a teenager!' : 'are a kid'));
}

function switchAge(age) {

}
