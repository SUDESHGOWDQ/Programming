let a = ["Apple","Ball",1,2,3,4]
let chr = []
let num = []

for(let i = 0; i < a.length; i++){
    if (typeof a[i]==="string") {
        chr.push(a[i])
    } else {
        num.push(a[i])
    }
}

console.log("Character",chr);
console.log("Number",num);