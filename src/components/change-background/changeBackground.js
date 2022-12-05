import '../../palette.scss';

const changeBackground = (id) => {
    if(id >= 200 && id <= 232) {
        // thunderstorm
        document.body.style.backgroundColor = '#1361fd';
    } else if(id >= 300 && id <= 321) {
        // drizzle
        document.body.style.backgroundColor = '#526fa8';
    } else if(id >= 500 && id <= 531) {
        // rain
        document.body.style.backgroundColor = '#0e8eef';
    } else if(id >= 600 && id <= 620) {
        // snow
        document.body.style.backgroundColor = '#aa80ed';
    } else if(id >= 701 && id <= 781) {
        // misty
        document.body.style.backgroundColor = '#232324';
    } else if(id == 800) {
        // sunny
        document.body.style.backgroundColor = '#ed7c32';
    } else {
        //cloudy
        document.body.style.backgroundColor = '#616166';
    }
}

export default changeBackground;