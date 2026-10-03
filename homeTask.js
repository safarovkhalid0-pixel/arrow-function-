console.log(`\nTask 30`);
const celsiusToFahrenheit = c => c * 9 / 5 + 32;
console.log(celsiusToFahrenheit(25));


console.log(`\nTask 31`);
const sign = n => {
    if (n > 0) {
        return "+";
    } else if (n < 0) {
        return "-";
    } else {
        return "0";
    }
};
console.log(sign(5));



console.log(`\nTask 32`);
const sign2 = n => {
    if (n > 0) {
        return "+";
    } else if (n < 0) {
        return "-";
    } else {
        return "0";
    }
};
console.log(sign2(-3));



console.log(`\nTask 33`);
const sign3 = n => {
    if (n > 0) {
        return "+";
    } else if (n < 0) {
        return "-";
    } else {
        return "0";
    }
};
console.log(sign3(0));



console.log(`\nTask 34`);
const greetDefault = (name = "Гость") => {
    if (name === undefined) {
        return "Привет, Гость!";
    } else {
        return `Привет, ${name}!`;
    }
};
console.log(greetDefault());




console.log(`\nTask 35`);
const greetDefault2 = (name = "Гость") => {
    if (name === undefined) {
        return "Привет, Гость!";
    } else {
        return `Привет, ${name}!`;
    }
};
console.log(greetDefault2("Али"));




console.log(`\nTask 36`);
const sumTo = n => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};
console.log(sumTo(5));




console.log(`\nTask 37`);
const factorial = n => {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
};
console.log(factorial(5));




console.log(`\nTask 38`);
const countVowels = text => {
    let count = 0;
    for (let letter of text) {
        if ("aeiou".includes(letter.toLowerCase())) {
            count++;
        }
    }
    return count;
};
console.log(countVowels("hello"));




console.log(`\nTask 39`);
const isPalindrome = text => {
    if (text === text.split("").reverse().join("")) {
        return true;
    } else {
        return false;
    }
};
console.log(isPalindrome("level"));




console.log(`\nTask 40`);
const isPalindrome2 = text => {
    if (text === text.split("").reverse().join("")) {
        return true;
    } else {
        return false;
    }
};
console.log(isPalindrome2("hello"));




console.log(`\nTask 41`);
const numbers41 = [1, 2, 3, 4, 5];
numbers41.forEach(num => {
    console.log(num);
});


console.log(`\nTask 42`);
const numbers42 = [1, 2, 3, 4, 5, 6];
numbers42.forEach(num => {
    if (num % 2 === 0) {
        console.log(num);
    }
});




console.log(`\nTask 43`);
const numbers43 = [10, 20, 30];
let sum43 = 0;
numbers43.forEach(num => {
    sum43 += num;
});
console.log(sum43);




console.log(`\nTask 44`);
const numbers44 = [1, 2, 3, 4];
const result44 = numbers44.map(num => {
    return num * num;
});
console.log(result44);




console.log(`\nTask 45`);
const numbers45 = [5, 10, 15];
const result45 = numbers45.map(num => {
    return num * 2;
});
console.log(result45);




console.log(`\nTask 46`);
const numbers46 = [1, 2, 3, 4, 5, 6];
const result46 = numbers46.filter(num => {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
});
console.log(result46);





console.log(`\nTask 47`);
const numbers47 = [5, 12, 8, 20, 3];
const result47 = numbers47.filter(num => {
    if (num > 10) {
        return true;
    } else {
        return false;
    }
});
console.log(result47);




console.log(`\nTask 48`);
const numbers48 = [5, 2, 8, 1, 9];
numbers48.sort((a, b) => {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
});
console.log(numbers48);




console.log(`\nTask 49`);
const numbers49 = [5, 2, 8, 1, 9];
numbers49.sort((a, b) => {
    if (a < b) {
        return 1;
    } else if (a > b) {
        return -1;
    } else {
        return 0;
    }
});
console.log(numbers49);




console.log(`\nTask 50`);
const students50 = [
    { name: "Али", age: 12 },
    { name: "Самир", age: 14 }
];
students50.forEach(student => {
    console.log(student.name);
});




console.log(`\nTask 51`);
const products51 = [
    { name: "Книга", price: 50 },
    { name: "Ноутбук", price: 800 },
    { name: "Ручка", price: 10 }
];
const result51 = products51.filter(product => {
    if (product.price > 100) {
        return true;
    } else {
        return false;
    }
});
console.log(result51);




console.log(`\nTask 52`);
const students52 = [
    { name: "Али", age: 12 },
    { name: "Самир", age: 14 }
];
const result52 = students52.map(student => {
    return student.name;
});
console.log(result52);




console.log(`\nTask 53`);
const products53 = [
    { name: "Книга", price: 50 },
    { name: "Ручка", price: 10 }
];
const result53 = products53.map(product => {
    return product.price;
});
console.log(result53);




console.log(`\nTask 54`);
const products54 = [
    { name: "Книга", price: 50 },
    { name: "Ручка", price: 10 },
    { name: "Ноутбук", price: 800 }
];
products54.sort((a, b) => {
    if (a.price > b.price) {
        return 1;
    } else if (a.price < b.price) {
        return -1;
    } else {
        return 0;
    }
});
console.log(products54);




console.log(`\nTask 55`);
const numbers55 = [5, 12, 8, 20, 3];
let max55 = numbers55[0];
numbers55.forEach(num => {
    if (num > max55) {
        max55 = num;
    }
});
console.log(max55);




console.log(`\nTask 56`);
const ages56 = [12, 15, 18, 20, 14];
const result56 = ages56.filter(age => {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
});
console.log(result56);




console.log(`\nTask 57`);
const students57 = [
    { name: "Али", grade: 5 },
    { name: "Самир", grade: 3 },
    { name: "Фарангис", grade: 5 }
];
const result57 = students57.filter(student => {
    if (student.grade === 5) {
        return true;
    } else {
        return false;
    }
});
console.log(result57);




console.log(`\nTask 58`);
const prices58 = [100, 200, 300];
const result58 = prices58.map(price => {
    return price * 2;
});
console.log(result58);




console.log(`\nTask 59`);
const products59 = [
    { name: "Книга", price: 50 },
    { name: "Ручка", price: 10 },
    { name: "Тетрадь", price: 30 }
];
let sum59 = 0;
products59.forEach(product => {
    sum59 += product.price;
});
console.log(sum59);




console.log(`\nTask 60`);
const products60 = [
    { name: "Книга", price: 50 },
    { name: "Ноутбук", price: 800 },
    { name: "Ручка", price: 10 },
    { name: "Телефон", price: 500 }
];
const result60 = products60
    .filter(product => {
        if (product.price > 100) {
            return true;
        } else {
            return false;
        }
    })
    .map(product => {
        return product.name;
    });
console.log(result60);