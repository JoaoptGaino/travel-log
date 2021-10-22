import { City, Country, State } from 'country-state-city';
import fs from 'fs';
import { CityInterface, CountryInterface, StateInterface } from './types';

export class Formatter {
  formatCountries() {
    const countries = Country.getAllCountries();
    const formattedCountry: CountryInterface[] = countries.map((country) => ({
      name: country.name,
      phoneCode: country.phonecode,
      isoCode: country.isoCode,
    }));

    fs.writeFile(
      'formattedCountry.json',
      JSON.stringify(formattedCountry),
      (err) => (err ? console.error(err) : console.log('Written')),
    );
  }
  formatStates() {
    const states = State.getAllStates();
    const formattedState: StateInterface[] = states.map((state) => ({
      name: state.name,
      countryCode: state.countryCode,
      isoCode: state.isoCode,
    }));
    fs.writeFile('formattedState.json', JSON.stringify(formattedState), (err) =>
      err ? console.error(err) : console.log('Written'),
    );
  }
  formatCities() {
    const cities = City.getAllCities();

    const formattedCity: CityInterface[] = cities.map((city) => ({
      name: city.name,
      stateCode: city.stateCode,
      latitude: city.latitude,
      longitude: city.longitude,
    }));
    fs.writeFile('formattedCity.json', JSON.stringify(formattedCity), (err) =>
      err ? console.error(err) : console.log('Written'),
    );
  }
}
