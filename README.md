# Surf Forecast - Fortaleza

This is a React application that provides a surf forecast for Fortaleza, Brazil. It shows hourly marine weather data from 5am to 6pm, including wave direction, wind direction, swell height, swell period, and water temperature. The app also provides a daily summary and advises if it’s worth surfing today based on swell conditions and the local surf season.

## Features

- Fetches marine weather data using an external API.
- Displays hourly forecast cards with key parameters for surfing.
- Calculates and shows a daily summary with average swell height, period, wave and wind directions, and water temperature.
- Indicates if Fortaleza is currently in the surf season (October to April).
- Provides a simple "Is it worth surfing today?" advice based on swell period and season.
- Responsive and modern UI built with React and Tailwind CSS.

## How it works

- The app fetches weather data for Fortaleza coordinates.
- Uses utility functions to calculate averages and assess surf conditions.
- Shows user-friendly info with cardinal directions and explanations.
- Highlights if the swell period is good (>= 10 seconds) for surfing.
- Displays seasonal info to inform users if they are in or out of the surf season.

## Tech stack

- React
- Tailwind CSS
- Custom utilities for surf season and weather calculations

