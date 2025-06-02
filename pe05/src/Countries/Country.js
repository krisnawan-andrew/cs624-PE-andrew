import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacountry, View } from 'react-native';
import { colors } from '../theme';

class Country extends React.Component {
  state = {
    name: '',
    currency: '',
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  addLocation = () => {
    const { addLocation, country } = this.props.route.params;
    const { name, currency } = this.state;

    if (name === '' || currency === '') return;

    const location = { name, currency };

    addLocation(location, country);

    this.setState({ name: '', currency: '' });
  };

  render() {
    const { cities, country } = this.props.route.params;

    // Derive the updated version of the country from the global cities array
    const updatedCountry = cities.find((item) => item.id === country.id) || country;

    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={[!updatedCountry.locations.length && { flex: 1 }]}>
          <View
            style={[
              styles.locationsContainer,
              !updatedCountry.locations.length && { flex: 1, justifyContent: 'center' },
            ]}
          >
          </View>
        </ScrollView>
        <TextInput
          onChangeText={(val) => this.onChangeText('name', val)}
          placeholder="Location name"
          value={this.state.name}
          style={styles.input}
          placeholderTextColor="white"
        />
        <TextInput
          onChangeText={(val) => this.onChangeText('currency', val)}
          placeholder="Location currency"
          value={this.state.currency}
          style={[styles.input, styles.input2]}
          placeholderTextColor="white"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacountry onPress={this.addLocation}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Add Location</Text>
            </View>
          </TouchableOpacountry>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  locationsContainer: {
    paddingBottom: 104,
  },
  input: {
    height: 50,
    backgroundColor: colors.primary,
    color: 'white',
    paddingHorizontal: 8,
    position: 'absolute',
    width: '100%',
    bottom: 104,
    left: 0,
  },
  input2: {
    bottom: 52,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  },
  button: {
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  locationContainer: {
    padding: 10,
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
  },
  locationName: {
    fontSize: 20,
  },
  locationInfo: {
    color: 'rgba(0, 0, 0, .5)',
  },
});

export default Country;