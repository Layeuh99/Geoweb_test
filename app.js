// Initialisation de la carte
var map = L.map('map').setView([14.7, -17.4], 7); // Coordonnées Sénégal

// Fonds de carte
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map);

var cartoDark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '© Carto'
});

var satellite = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap HOT'
});

// Exemple de couches WMS fictives (à remplacer par ton GeoServer)
var departement = L.tileLayer.wms("http://localhost:8080/geoserver/UAM/wms", {
    layers: 'Departement',
    format: 'image/png',
    transparent: true
});

var hydro = L.tileLayer.wms("http://localhost:8080/geoserver/UAM/wms", {
    layers: 'Hydrographie',
    format: 'image/png',
    transparent: true
});

// Contrôle des couches
var baseMaps = {
    "OpenStreetMap": osm,
    "Carto Dark": cartoDark,
    "Satellite": satellite
};

var overlayMaps = {
    "Département": departement,
    "Hydrographie": hydro
};

L.control.layers(baseMaps, overlayMaps).addTo(map);