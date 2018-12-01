let map = L.map('map').setView([29.648, -82.347], 15.00);
L.tileLayer('https://api.mapbox.com/styles/v1/rachelporter/cjp1fu2wy159n2snpqa0wbibc/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmFjaGVscG9ydGVyIiwiYSI6ImNqcDE4N3lwMTNjdmQzd21vYWU3NXl6ODUifQ.0bnjYoit0oF0A5Dtj1xc-Q',{
    attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20
}).addTo(map);

let marker1 = L.marker([29.6478257, -82.3479288]).addTo(map);
let marker2 = L.marker([29.6465073,-82.3502003]).addTo(map);
let marker3 = L.marker([29.6506154,-82.3450041]).addTo(map);
let marker4 = L.marker([29.6499357,-82.3507675]).addTo(map);

marker1.bindPopup("<b>Weimer Hall</b><br>Weimer Hall has study benches outside along with lounge chairs and study space on all three floors.").openPopup();
marker2.bindPopup("<b>Plaza of the Americas</b><br>The Plaza of the Americas in front of Library West makes for a perfect outdoor study spot on a warm day.")
marker3.bindPopup("<b>Ben Hill Griffin Stadium</b><br>UF allows access to the stadium seating and there is shade where you can sit in the stands and study.")
marker4.bindPopup("<b>Norman Hall Courtyard</b><br>The Norman Hall courtyard offers picnic benches with shade from trees.")
