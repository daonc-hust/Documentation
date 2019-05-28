
// while

let index = 0;
const array = [1, 2, 3, 4, 5, 6];

while (index < array.length) {
    console.log(array[index]);
    index++;
}

//for 

const array = [1, 2, 3, 4, 5, 6];
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}

//forEach

const array = [1, 2, 3, 4, 5, 6];

array.forEach(function (current_value, index, array) {
    console.log(`At index ${index} in array ${array} the value is ${current_value}`);
});
// => undefined

//map