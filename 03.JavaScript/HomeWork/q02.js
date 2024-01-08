function isDivisible(year) {
    let num = year % 100;
    if ((year + 1) % num == 0) {
        return 'good';
    }
    return 'bad';
}

for (let year = 2023; year<2040; year++) {
    console.log(`${year}: ${isDivisible(year)}`);
}