export interface CountryInterface {
  id?: string;
  name: string;
  phoneCode: string;
  isoCode: string;
}

export interface StateInterface {
  id?: string;
  name: string;
  isoCode: string;
  countryCode: string;
}

export interface CityInterface {
  id?: string;
  name: string;
  stateCode: string;
  longitude: string;
  latitude: string;
}
