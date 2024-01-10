// 두 개의 세자리수를 곱해서 나온 결과가 palindrome일때
// 가장 큰 palindrome  수와 어떤 수를 곱해서 나온 결과인가?

function isPalindrome(string) {
    let reverseStr = string.split('').reverse().join('');
    return string === reverseStr;
}

function findLargestPalindrome() {
    let largestPalindrome = 0;
    let factors = [];

    for (let i = 100; i < 1000; i++) {
        for (let j = 100; j < 1000; j++) {
            let product = i * j;
            if (isPalindrome(String(product)) && product > largestPalindrome) {
                largestPalindrome = product;
                factors = [i, j];
            }
        }
    }

    return {largestPalindrome, factors};
}

const {largestPalindrome, factors} = findLargestPalindrome();

console.log(`세자리수의 곱중 가장 큰 palindrome 수는 ${largestPalindrome}이며 이는 ${factors[0]} * ${factors[1]}입니다.`);
