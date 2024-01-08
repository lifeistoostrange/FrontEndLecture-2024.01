// 두 개의 세자리수를 곱해서 나온 결과가 palindrome일때
// 가장 큰 palindrome  수와 어떤 수를 곱해서 나온 결과인가?

function isPailindrome(string) {
    let reverseStr = string.split('').reverse().join('');
    return string == reverseStr;
}

function findBiggestPalindrome() {   
    for (let i = 100; i < 1000; i++) {
        for (let j = 100; j < 1000; j++) { 
            let str = `${i * j}`;
            let palindrome = isPailindrome(str)
            console.log(palindrome)
            if (str == palindrome && biggestPalindrome < palindrome) {
                var biggestPalindrome = palindrome;
            }
        }
    } 
    
    return biggestPalindrome;
    
}

console.log(`세 자리수 까지의 곱 중 가장 큰 palindrome 수는 ${findBiggestPalindrome()}`);

// C:\Workspace\WebProject\03.JavaScript\ch07.globalobjects\04.connectingstrings.js
// 에서 파일명만 출력하시오