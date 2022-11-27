

// function to calculate turning radius
document.getElementById('btn').onclick = function (wheelbase, wheelAngle) {

    wheelAngle = document.getElementById('wheelAngle').value
    wheelbase = document.getElementById('wheelbase').value
    leanAngle = document.getElementById('leanAngle').value




    // subtract 90 degrees from average of fork degrees

    if (leanAngle === '60') {
        x = (120 - wheelAngle);
    } else if (leanAngle === '45') {
        x = (135 - wheelAngle)
    } else {
        x = 90 - wheelAngle
    }

    // get x in radians 
    let radians = (x * (Math.PI / 180));

    // convert from radians to degrees 
    let degrees = (Math.sin(radians));

    // divide wheelbase by sine value(degrees) multiple by 2
    let halfRadius = (wheelbase / degrees) * 2;

    // divide by 12 to turn into feet
    let turningRadius = (halfRadius / 12).toFixed(2) + (' Feet')

    document.getElementById('returnedRadius').innerHTML = turningRadius

}

// making data remain through refresh

let wheelAngle = document.getElementById('wheelAngle')
let wheelbase = document.getElementById('wheelbase')

wheelAngle.value = localStorage.getItem('wheelAngleInput')
wheelbase.value = localStorage.getItem('WheelbaseInput')

wheelAngle.addEventListener('keyup', event => {
    localStorage.setItem('wheelAngleInput', event.target.value)
})

wheelbase.addEventListener('keyup', event => {
    localStorage.setItem('WheelbaseInput', event.target.value)
})














