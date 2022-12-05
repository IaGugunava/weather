import {AiFillCloud} from 'react-icons/ai';
import {IoMdThunderstorm} from 'react-icons/io';
import {BsCloudDrizzleFill, BsFillCloudRainFill, BsCloudSnow, BsFillSunFill} from 'react-icons/bs';
import {RiMistFill} from 'react-icons/ri'

const SVG = ({id}) => {
    if(id >= 200 && id <= 232) {
        // thunderstorm
        return <IoMdThunderstorm/>
    } else if(id >= 300 && id <= 321) {
        // drizzle
        return <BsCloudDrizzleFill/>
    } else if(id >= 500 && id <= 531) {
        // rain
        return <BsFillCloudRainFill/>
    } else if(id >= 600 && id <= 620) {
        // snow
        return <BsCloudSnow/>
    } else if(id >= 701 && id <= 781) {
        // misty
        return <RiMistFill/>
    } else if(id == 800) {
        // sunny
        return <BsFillSunFill/>
    } else {
        //cloudy
        return <AiFillCloud/>
    }
}

export default SVG;