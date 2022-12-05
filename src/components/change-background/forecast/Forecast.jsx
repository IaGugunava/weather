import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import './forecast.scss';
import SVG from '../../svg/SVG';

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({data}) => {

    const dayInWeek = new Date().getDay();
    const forecastWeather = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInWeek));
    console.log(forecastWeather);

  return (
    <>
      <label className="title">Daily Forecast</label>
      <Accordion allowZeroExpanded className='forecast'>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <SVG id={item.weather[0].id}/>
                  <label className='day'>{forecastWeather[idx]}</label>
                  <label className='description'>{item.weather[0].description}</label>
                  <label className='min-max'>{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <div className='daily-details-grid'>
                    <div className='daily-details-grid-item'>
                        <label>Pressure</label>
                        <label>{item.main.pressure}</label>
                    </div>
                    <div className='daily-details-grid-item'>
                        <label>Humidity</label>
                        <label>{item.main.humidity}%</label>
                    </div>
                    <div className='daily-details-grid-item'>
                        <label>Wind Speed</label>
                        <label>{item.wind.speed} m/s</label>
                    </div>
                    <div className='daily-details-grid-item'>
                        <label>Feels Like</label>
                        <label>{item.main.feels_like}°C</label>
                    </div>
                </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

export default Forecast;