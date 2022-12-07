let timeEl = document.getElementById("time")
let time1El = document.getElementById("time1")
let plus1 = 0
let plus1t = 0


// +1 click
function one() {
    plus1 += 1
    timeEl.textContent = plus1
}

function one1() {
    plus1t += 1
    time1El.textContent = plus1t
}

// +2 click
function two() {
    plus1 += 2
    timeEl.textContent = plus1
}

function two2() {
    plus1t += 2
    time1El.textContent = plus1t
}

// +3 click
function three() {
    plus1 += 3
    timeEl.textContent = plus1
}

function three3() {
    plus1t += 3
    time1El.textContent = plus1t
}
