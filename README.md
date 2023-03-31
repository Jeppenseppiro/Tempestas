## About Tempestas

A simple interactive weather **[web application](https://tempestas.vercel.app/)** that references the Visual Crossing Weather API

## Weather API key/token

Sign up an account on [Visual Crossing](https://www.visualcrossing.com/) to get your API key/token

After acquiring the Weather API key/token, go to the **visualCrossingApi.js** file located on **/resources/js/Shared/** and put your API key/token here:
```
const axiosGet = await axios.get(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
      location +
      "/" +
      datetime +
      "?unitGroup=metric&key=[API_KEY]&contentType=json&iconSet=icons2"
);
```

## Installation

Clone the repository to your preferred directory and **Change Directory** to the location of the cloned repository
```
cd [folder name]
```

Run the following commands
```
npm install && composer update --no-scripts
php artisan key:generate
```

## Starting the App

Open 2 terminals and run these commands separately each terminal

Terminal 1
```
php artisan serve
```

Terminal 2
```
npm run dev
```

## Thanks To

- **[Laravel](https://laravel.com/)**
- **[Vue 3](https://vuejs.org/)**
- **[Inertia](https://inertiajs.com/)**
- **[Vite](https://vitejs.dev/)**
- **[Visual Crossing](https://www.visualcrossing.com/)**
- **[Leaflet](https://leafletjs.com/)**
- **[Vercel](https://vercel.com/)**
