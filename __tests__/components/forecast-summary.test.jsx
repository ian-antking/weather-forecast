import React from 'react';
import Enzyme from 'enzyme';
import ForecastSummary from '../../src/components/forecast-summary';

let forecast;
let wrapper;

beforeEach(() => {
  forecast = {
    date: 1539983533577,
    temperature: {
      max: 'mockTemp',
    },
    description: 'mockDescripton',
    icon: 'mockIcon',
  };
  wrapper = Enzyme.shallow((
    <ForecastSummary
      key={forecast.date}
      date={forecast.date}
      description={forecast.description}
      icon={forecast.icon}
      temperature={forecast.temperature.max}
    />
  ));
});

it('renders the date', () => {
  const date = wrapper.find('.forecast-summary__date').text();
  expect(date).toEqual('Fri 19th Oct');
});

it('renders the temperature', () => {
  const temperature = wrapper.find('.forecast-summary__temperature').text();
  expect(temperature).toEqual('mockTemp' + '℃');
});

it('renders the description', () => {
  const describe = wrapper.find('.forecast-summary__description').text();
  expect(describe).toEqual('mockDescripton');
});

it('renders the icon', () => {
  const icon = wrapper.find('WeatherIcon');
  expect(icon.props().iconId).toEqual('mockIcon');
});
