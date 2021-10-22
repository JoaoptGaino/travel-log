import { Formatter } from './Formatter';

function execute() {
  const formatter = new Formatter();

  formatter.formatCountries();
  formatter.formatStates();
  formatter.formatCities();
}

execute();
