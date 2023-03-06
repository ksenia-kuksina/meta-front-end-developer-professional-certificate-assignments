function addTwoNums(a,b) {
    let c = a + b;
    console.log(c);
}
addTwoNums(2,2);
addTwoNums(4,4);






function letterFinder(word, match) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] === match) {
            console.log('Found the', match, 'at', i);
        } else {
            console.log('---No match found at', i);
        }
    }
}

letterFinder("test", "t");


let clothes = [];
clothes.push("jeans");
clothes.push("t-shirt");
clothes.push("sneakers");
clothes.push("jacket");
clothes.push("hat");
clothes.pop();
clothes.push("dress");
console.log(clothes[2]);

let favCar = {};
favCar.color = "red";
favCar.convertible = true;
console.log(favCar);





