# LoRaBang
## Run de applicatie
### Requirements
* Node
* NPM

### Console commands om de applicatie te builden en runnen
`npm install`
`npm run dev`

## Gebruik de API
### Alle opgeslagen locaties in de database
/locations GET

### Voorbeeld van een POST request om een nieuwe locatie op te slaan
/locations/create POST {
	"deviceName": "Piet",
	"latitude": "50.9002",
	"longitude": "5.776"
}

### Alle opgeslagen apparaten in de database
/devices POST

### Voorbeeld van een POST request om een nieuw apparaat op te slaan
/devices/create POST {
	"name": "Thijs",
	"team": "RU"
}

## Debugging
node versie v14.17.6
npm versie 6.14.15

"dependencies": {
    "body-parser": "^1.19.2",
    "dotenv": "^16.0.0",
    "ejs": "^3.1.6",
    "express": "^4.17.3",
    "joi": "^17.6.0",
    "joigoose": "^8.0.2",
    "moment": "^2.29.1",
    "mongodb": "^4.4.1",
    "mongoose": "^6.2.9"
  }