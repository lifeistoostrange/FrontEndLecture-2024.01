var testyear = 2025;

function whatIsSpecial(year) {
    let remainder = year % 100;
    
    let goodandbad = (year + 1) % remainder ? 'bad' : 'good';
   /*  goodandbad = 'bad';
    if (year % remainder == 0) {
        goodandbad = 'good';
    } */
    return goodandbad; 
}
console.log(`${testyear}년은 ${whatIsSpecial(testyear)}`);