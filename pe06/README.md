# PE06 - Ci**ties with Countries and Currency using Tab and Stack-based Navigation**

**REFERENCE:**

**Dabit, N. (2019). React
Native in Action. Manning Publications. (ISBN 9781617294051)**

# Input

The tools used for this app are React, Expo, and VS Code/GitHub Codespace for optional Cloud IDE.

The inputs are City and Country objects that contains name and currency. User can add a city name and its country as a City object, and a country name and its currency as a Country object. User can add new currencies into the Country object.

# Process

The Cities and Countries array save each City and Country added by user as state respectively. Both Cities and Countries component will display the cities and countries added as a list. addCity and addCountry components are used to provide the text input for user to enter in the information. They can be selected using the navigation event as tabs and stack screens (CitiesNav, AddCity, CountriesNav, AddCountry). Clicking the city in CitiesNav and clicking the country in the CountriesNav allow the used to add a new location for this city and country, respectively.

# Output

The output of this app is a list of cities with its name and country shown on the screen, or a list of countries with its name and currency shown on the screen. The AddCity and AddCountries input screens will be displayed to add new cities and countries. The updated cities and countries will be reflected based on used input. CitiesNav and CountriesNav wil show all of the added location and currencies, respectively for each city and country.
