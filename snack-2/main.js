const originalArray = ['pippo' , 'PLUTO', 'Paperino'];
const newArray = [];

for (let i = 0; i < originalArray.length; i++) {
    const string = originalArray[i];
    const formattedString = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    newArray.push(formattedString);
    
}

console.log(newArray);
