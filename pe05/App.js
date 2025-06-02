import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Component } from 'react';
import { LogBox } from 'react-native';

import AddCity from './src/AddCity/AddCity';
import AddCountry from './src/AddCountry/AddCountry';
import Cities from './src/Cities/Cities';
import City from './src/Cities/City';
import Countries from './src/Countries/Countries';
import Country from './src/Countries/Country';
import { colors } from './src/theme';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function CitiesStackScreen({ navigation, route, cities, addCity, addLocation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="Cities"
        children={(props) => (
          <Cities {...props} cities={cities} addCity={addCity} addLocation={addLocation} />
        )}
      />
      <Stack.Screen
        name="City"
        children={(props) => (
          <City {...props} cities={cities} addCity={addCity} addLocation={addLocation} />
        )}
      />
    </Stack.Navigator>
  );
}

function CountriesStackScreen({ navigation, route, countries, addCountry, addLocation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="Countries"
        children={(props) => (
          <Countries {...props} countries={countries} addCountry={addCountry} addLocation={addLocation} />
        )}
      />
      <Stack.Screen
        name="Country"
        children={(props) => (
          <Country {...props} countries={countries} addCountry={addCountry} addLocation={addLocation} />
        )}
      />
    </Stack.Navigator>
  );
}

export default class App extends Component {
  state = {
    cities: [],
    countries: []
  };

  addCity = (city) => {
    this.setState((prevState) => ({
      cities: [...prevState.cities, { ...city, locations: [] }],
    }));
  };

  addCountry = (country) => {
    this.setState((prevState) => ({
      countries: [...prevState.countries, { ...country, locations: [] }],
    }));
  };

  addLocation = (location, city) => {
    const index = this.state.cities.findIndex((item) => item.id === city.id);
    const updatedCity = { ...this.state.cities[index], locations: [...this.state.cities[index].locations, location] };

    const cities = [
      ...this.state.cities.slice(0, index),
      updatedCity,
      ...this.state.cities.slice(index + 1),
    ];

    this.setState({ cities });
  };

  addLocation2 = (location, country) => {
    const index = this.state.countries.findIndex((item) => item.id === country.id);
    const updatedCountry = { ...this.state.countries[index], locations: [...this.state.countries[index].locations, location] };

    const countries = [
      ...this.state.countries.slice(0, index),
      updatedCountry,
      ...this.state.countries.slice(index + 1),
    ];

      this.setState({ countries });
  };

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="CitiesNav"
            children={(props) => (
              <CitiesStackScreen
                {...props}
                cities={this.state.cities}
                addCity={this.addCity}
                addLocation={this.addLocation}
              />
            )}
          />
          <Tab.Screen
            name="AddCity"
            children={(props) => (
              <AddCity
                {...props}
                cities={this.state.cities}
                addCity={this.addCity}
                addLocation={this.addLocation}
              />
            )}
          />
          <Tab.Screen
            name="CountriesNav"
            children={(props) => (
              <CountriesStackScreen
                {...props}
                countries={this.state.countries}
                addCountry={this.addCountry}
                addLocation={this.addLocation2}
              />
            )}
          />
          <Tab.Screen
            name="AddCountry"
            children={(props) => (
              <AddCountry
                {...props}
                countries={this.state.countries}
                addCountry={this.addCountry}
                addLocation={this.addLocation2}
              />
            )}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}