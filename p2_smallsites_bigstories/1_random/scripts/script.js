const latMax = 90;
const lngMax = 180;

const latRange = latMax - -latMax;
const lngRange = lngMax - -lngMax;

const worldSets = {
    1: { color: "assets/world_color/fullworld_01.png", mask: "assets/world_0-1/bitmask-01.png" },
    2: { color: "assets/world_color/fullworld_02.png", mask: "assets/world_0-1/bitmask-02.png" },
    3: { color: "assets/world_color/fullworld_03.png", mask: "assets/world_0-1/bitmask-03.png" }
};

const keys = Object.keys(worldSets);
const i = randomInt(0, keys.length);
const randomKey = keys[i];
const world = worldSets[randomKey];

const coordsElement = document.getElementById("coords");

let whiteMask = null;

function getCoords() {
    if (!whiteMask) return null;

    let proposeLat;
    let proposeLng;
    let remappedLat;
    let remappedLng;

    //loop proposed the lats while they farlse agaisnt white mask 

    //okay after some testing out, i think the flooring during remapping sort of fucks precision. but it's okay
    do {
        proposeLat = randomFloat(-latMax, latRange);
        proposeLng = randomFloat(-lngMax, lngRange);

        remappedLat = remapCoords(proposeLat, -latMax, latRange, whiteMask.height);
        remappedLng = remapCoords(proposeLng, -lngMax, lngRange, whiteMask.width);
    } while (!isWhiteAt(whiteMask, remappedLng, remappedLat));

    return {
        lat: proposeLat,
        lng: proposeLng,
        imageX: remappedLng,
        imageY: remappedLat,
    };
}

async function initSite() {
    setBackgroundImage("map", world["color"], "100% 100%", "center");
    whiteMask = await loadWhiteMask(world["mask"]);

    const coords = getCoords();
    if (!coords) return;

    if (coordsElement) {
        coordsElement.textContent = `${coords.lat.toFixed(8)}, ${coords.lng.toFixed(8)}`;
    }
}

initSite();
//we ahve to get a open source map api thing 
//map tiler free let's see if it's any good. 



const btnGo = document.getElementById("btnGo");
const btnChoose = document.getElementById("btnChoose");
let currentCoords = null;


btnChoose.addEventListener('click', (e) => {
    newCoords = getCoords();
    coordsElement.textContent = `${newCoords.lat.toFixed(6)}, ${newCoords.lng.toFixed(6)}`;
})


maptilersdk.config.apiKey = "KSvoCDrZE8bqhgY2sSqy";
btnGo.addEventListener("click", () => {
    newCoords = getCoords();

    coordsElement.textContent = `${newCoords.lat.toFixed(6)}, ${newCoords.lng.toFixed(6)}`;
    loadMapTiler(newCoords.lat, newCoords.lng);

});
    

