const nums = Array.from(document.getElementsByClassName('num'))
const zero = document.getElementById('zero')
const AC = document.getElementById('AC');
const plmin = document.getElementById('plmin');
const procent = document.getElementById('procent');
const parting = document.getElementById('parting');
const multiple = document.getElementById('mul');
const minus = document.getElementById('min');
const plus = document.getElementById('plus')
const equal = document.getElementById('equal');
const point = document.getElementById('point');
const disres = document.getElementById('result')
const minuslog = document.getElementById('minuslog')

let logarr = [plus,minus,multiple,parting,equal];

let partingans = false;
let mulans = false
let plans = false;
let minans = false
let partingres = 0;
let mulres = 0;
let plres = 0;
let minres = 0;

nums.push(zero);
nums.map(el => {
    el.addEventListener('click', () => {
        if(disres.innerText === '0'){
            disres.innerText = +disres.innerText + +el.innerText;
            AC.innerText = 'C'
            if(partingans){
                disres.innerText = el.innerText;
                partingans = false
            } else if(plans){
                disres.innerText = el.innerText;
                plans = false;
            } else if(minans){
                disres.innerText = el.innerText;
                minans = false;
            } else if(mulans){
                disres.innerText = el.innerText;
                mulans = false;
            }
        } else{
            disres.innerText = disres.innerText + el.innerText;
            AC.innerText = 'C'
            if(partingans){
                disres.innerText = el.innerText;
                partingans = false
            } else if(plans){
                disres.innerText = el.innerText;
                plans = false;
            } else if(minans){
                disres.innerText = el.innerText;
                minans = false;
            } else if(mulans){
                disres.innerText = el.innerText;
                mulans = false;
            }
        }
    })
})

point.addEventListener('click', () => {
    disres.innerText = disres.innerText + '.'
    AC.innerText = 'C'
})

AC.addEventListener('click', () => {
    disres.innerText = '0';
    AC.innerText = 'AC';
    logarr.map(el => {
        el.style.backgroundColor = 'orange';
        el.style.color = 'white'
    })
    partingans = false;
    mulans = false
    plans = false;
    minans = false
    partingres = 0;
    mulres = 0;
    plres = 0;
    minres = 0;
})

plmin.addEventListener('click', () => {
    if(disres.innerText === '0'){
        disres.innerText = '-0'
    } else{
        disres.innerText *= -1
    }
})

parting.addEventListener('click', () => {
    parting.style.backgroundColor = 'white'
    parting.style.color = 'orange'
    partingans = true;
    partingres = +disres.innerText
    plres = 0;
    mulres = 0;
    minres = 0;
    logarr.map(el => {
        if(el !== parting){
            el.style.backgroundColor = 'orange';
            el.style.color = 'white'
        }
    })
})

plus.addEventListener('click', () => {
    plus.style.backgroundColor = 'white'
    plus.style.color = 'orange'
    plans = true;
    plres = +disres.innerText;
    partingres = 0;
    mulres = 0
    minres = 0
    logarr.map(el => {
        if(el !== plus){
            el.style.backgroundColor = 'orange';
            el.style.color = 'white'
        }
    })
})

minus.addEventListener('click', () => {
    minus.style.backgroundColor = 'white'
    minus.style.color = 'orange'
    minans = true;
    minres = +disres.innerText;
    partingres = 0;
    mulres = 0
    plres = 0
    logarr.map(el => {
        if(el !== minus){
            el.style.backgroundColor = 'orange';
            el.style.color = 'white'
        }
    })
})

multiple.addEventListener('click', () => {
    multiple.style.backgroundColor = 'white'
    multiple.style.color = 'orange'
    mulans = true;
    mulres = +disres.innerText;
    partingres = 0;
    minres = 0
    plres = 0
    logarr.map(el => {
        if(el !== multiple){
            el.style.backgroundColor = 'orange';
            el.style.color = 'white'
        }
    })
})



procent.addEventListener('click', () => {
    if(minres){
        let ans = minres * Number(disres.innerText) / 100
        disres.innerText = minres - ans
    } else if(plres){
            let ans = plres * Number(disres.innerText) / 100
            disres.innerText = plres + ans
    } else{
        disres.innerText = +disres.innerText / 100
    }
    logarr.map(el => {
        el.style.backgroundColor = 'orange';
        el.style.color = 'white'
    })
    partingans = false;
    mulans = false
    plans = false;
    minans = false
    partingres = 0;
    mulres = 0;
    plres = 0;
    minres = 0;
})

equal.addEventListener('click', () => {
    if(partingres){
        disres.innerText = partingres / +disres.innerText
    } else if(plres){
        disres.innerText = plres + +disres.innerText
    } else if(minres){
        disres.innerText = minres - +disres.innerText
    } else if(mulres){
        disres.innerText = mulres * +disres.innerText
    }
    logarr.map(el => {
        el.style.backgroundColor = 'orange';
        el.style.color = 'white'
    })
})