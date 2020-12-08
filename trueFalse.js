// falsy...........values
// false
// 0
// "";
// undefined
// null
// NaN
// truthy .....values
// "0" " " [] {}


let name= 'false';
if (name || name==0) {
    console.log('condition is true');
} else {
    console.log('condition is false');
}