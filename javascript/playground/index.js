const horse = {
    name: 'Topher 🐴',
    size: 'large',
    skills: ['jousting', 'racing'],
    age: 7
}

function horseAge(str, age) {
  const ageStr = age > 5 ? 'old' : 'young';
  console.log(str);
  return `${str[0]}${ageStr} at ${age} years`;
}

const bio2 = horseAge`This horse is ${horse.age}`;
console.log(bio2);

let orders = [1, 2, 3, 4, 5];
console.log(orders.reduce((acc, cur) => acc + cur));

const random = () => {
  return Promise.resolve(Math.random());
}

const sumRandomAsyncNums = () => {
  let first;
  let second;
  let third;
  
  return random().then(v => {
      first = v;
      return random();
  })
  .then(v => {
    second = v2;
    return random();
  })
  .then(v => {
    third = v3;
    return random();
  });
}

console.log(sumRandomAsyncNums());

const sumRandomAsyncNums1 = async() => {
  let first = await random();
  let second = await random();
  let third = await random();
  
  console.log(`Result ${first} ${second} ${third}`);
}

sumRandomAsyncNums1();