let map = L.map('map').setView([41.9028, 12.4964], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let citta = ["Busca", "Verzuolo", "Costigliole_Saluzzo", "Manta", "Saluzzo", "Cuneo", "Villafalletto",
    "Centallo", "Tarantasca", "Dronero", "Caraglio", "Villar_San_Costanzo",
    "Savigliano", "Mondovì", "Villanova_Mondovì", "Moretta",
    "Costigliole_d'Asti", "Dogliani", "Carrù", "Fossano", "Trinità", "Sampeyre", "Entracque"];

let comuni = citta.sort(() => 0.5 - Math.random()).slice(0, 15);

for (const comune of comuni) {
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${comune}`)
        .then(response => response.json())
        .then(locationData => {
            let lat = locationData[0].lat;
            let lon = locationData[0].lon;

            let marker = L.marker([lat, lon]).addTo(map)
                .bindPopup(`<b>${comune}</b><br><a href="https://it.wikipedia.org/wiki/${comune}" target="_blank">Wikipedia</a>`);

            marker.on('click', () => {
                marker.openPopup();
            });
        });
}
/*
comuni.forEach(comune => {
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${comune}`)
        .then(response => response.json())
        .then(locationData => {
            if (locationData.length > 0) {
                let lat = locationData[0].lat;
                let lon = locationData[0].lon;

                let marker = L.marker([lat, lon]).addTo(map)
                    .bindPopup(`<b>${comune}</b><br><a href="https://it.wikipedia.org/wiki/${comune}" target="_blank">Wikipedia</a>`);

                marker.on('click', () => {
                    marker.openPopup();
                });
            }
        });
})*/

/*fetch('https://axqvoqvbfjpaamphztgd.functions.supabase.co/comuni?format=json&onlyname=true')
    .then(response => response.json())
    .then(data => {
        let comuni = data.sort(() => 0.5 - Math.random()).slice(0, 15);

        for (const comune of comuni) {
            
        }

        comuni.forEach(comune => {
            fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${comune}`)
                .then(response => response.json())
                .then(locationData => {
                    if (locationData.length > 0) {
                        let lat = locationData[0].lat;
                        let lon = locationData[0].lon;

                        let marker = L.marker([lat, lon]).addTo(map)
                            .bindPopup(`<b>${comune}</b><br><a href="https://it.wikipedia.org/wiki/${comune}" target="_blank">Wikipedia</a>`);

                        marker.on('click', () => {
                            marker.openPopup();
                        });
                    }
                });
        });
    });
*/