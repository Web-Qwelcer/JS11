//////////////////////////////////////////////////////////// Завдання 1 ////////////////////////////////////////////////////////////

// let car = (manufacturer, model, yearIssue, averageSpeed) => {
//     return {
//         'manufacturer' : manufacturer,
//         'model' : model,
//         'yearIssue' : yearIssue,
//         'averageSpeed' : averageSpeed,
//         'print' : function() {
//             console.log('Manufacturer: ' + manufacturer + '\n' + 'Model: ' + model + '\n' + 'Year of issue: ' + yearIssue + '\n' + 'Average speed : ' + averageSpeed)
//         },
//         'time' : function(v, s, t) {
//             t = s / v
//             console.log('\n')
//             console.log('I will cover ' + s + ' km in ' + t + ' h.')
//         }
//     }
// }

// let v = 400,
//     tesla = car('Tesla', 'Roadster', '2017', v)

// tesla.print()

// let s = +prompt('Enter the distance -> '),
//     t = 0

// tesla.time(v, s, t)

//////////////////////////////////////////////////////////// Завдання 2 ////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////// Завдання 3 ////////////////////////////////////////////////////////////

let time = (hours, minutes, seconds) => {
    return {
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds,
        'timeOutput' : function() {
            console.log(`${hours}:${minutes}:${seconds}`)
        },
        'changingHours' : function() {
            hours = +prompt('Enter hours -> ')
        },
        'changingMinutes' : function() {
            minutes = +prompt('Enter minutes -> ')
        },
        'changingSeconds' : function() {
            seconds = +prompt('Enter seconds -> ')
        }
    }
}

let hours = +prompt('Enter hours -> '),
    minutes = +prompt('Enter minutes -> '),
    seconds = +prompt('Enter seconds -> ')

let clock = time(hours, minutes, seconds)

clock.timeOutput()

let menu = 0

do {
    menu = +prompt('1 - Changing hours\n2 - Changing minutes\n3 - Changing seconds\n0 - Exit')

    switch (menu) {
        case 1:
            clock.changingHours()
            clock.timeOutput()
            break
        case 2:
            clock.changingMinutes()
            clock.timeOutput()
            break
        case 3:
            clock.changingSeconds()
            clock.timeOutput()
            break
        default:
            console.log('Exit!!!')
    }
} while (menu != 0)
