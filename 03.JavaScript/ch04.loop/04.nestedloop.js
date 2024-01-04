// 중첩 반복문
// 1. 별 다섯개를 다섯줄 그리기

for (let i = 0; i < 5; i++) {
    let star = '';
    for (let j = 0; j < 5; j++) {
        star += '*';
    }
    console.log(star);
}

// 2. 다이아몬드 그리기 (1사분면)

for (let i = 0; i < 5; i++) {
    let star = '';
    for (j = 0; j < i + 1; j++) {
        star += '*';
    }
    console.log(star);
}


// 4사분면
for (let i = 5; i >= 0; i--) {
    let star = '';
    for (j = 0; j < i + 1; j++) {
        star += '*';
    }
    console.log(star);
}

//  2사분면

for (let i = 0; i < 5; i++) {
    let star = '';
    for (let j = 0; j < 4 - i; j++) {
        star += ' ';
    }
    for (let k = 0; k < i + 1; k++) {
        star += '*';
    }
    console.log(star);


}
for (let i = 0; i < 5; i++) {
    let star = '';
    for (let j = 0; j < i; j++) {
        star += ' ';
    }
    for (let k = 0; k < 5 - i; k++) {
        star += '*';
    }
    console.log(star);
}

for (let i = 0; i < 7; i++) {
    let line = '';
    for (let k = 0; k < 7 - i; k++) {
        line += ' ';
    }
    for (let k = 0; k < 2 * i + 1; k++) {
        line += '*';
    }
    console.log(line);
}
for (let i = 7 - 1; i >= 0; i--) {
    let line = '';
    for (let k = 0; k < 7 - i; k++) {
        line += ' ';
    }
    for (k = 0; k < 2 * i + 1; k++) {
        line += '*';
    }
    console.log(line);
}