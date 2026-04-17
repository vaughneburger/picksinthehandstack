//this is going to be for 
function randomFloat(min, range) {
    return Math.random() * range + min;
}

function randomInt(min, range) {
    return Math.floor(Math.random() * range) + min;
}

function setBackgroundImage(id, url, size, position) {
    const element = document.getElementById(id);
    if (!element) return null;


    element.style.backgroundImage = `url("${url}")`;
    element.style.backgroundSize = size;
    element.style.backgroundPosition = position;

    return element;
}

// i am going to explain what is happening here. 
async function loadWhiteMask(imageUrl, whiteThreshold=200) {
    const img = new Image();
    img.src = imageUrl;

    //wait for sys to decode img
    await img.decode();

    //needs canvas elemenet to calc 
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    //yeah
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    //imean yeah
    const { data, width, height } = ctx.getImageData(0, 0, img.width, img.height);

    //loops thorugh the image by rows(cause its looping thorugh y) and tests each pixel val if > whiteThreshold, which is 200 so some wiggle room. 
    const whiteMask = [];

    for (let y = 0; y < height; y++) {
        const row = [];

        for (let x=0; x < width; x++) {
            const i = (y * width + x) * 4;

            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            const a = data[i + 3];

            const isWhite = 
                a > 0 &&
                r >= whiteThreshold &&
                g >= whiteThreshold &&
                b >= whiteThreshold;

            row.push(isWhite);
        }

        whiteMask.push(row);

    }

    return {
        width, height, whiteMask
    };
}

function isWhiteAt(maskData, x, y) {
    if (
        //boolest test test if proposed coord is within bounds of whitemask but both x and y vals have to sit on a white cell, since we already culled black cells in earlier function
        x < 0 || y < 0 || 
        x >= maskData.width || y >= maskData.height
    ) {
        return false;
    }

    return maskData.whiteMask[y][x];
}

// pretty sure i did this correctly... i mean rangeI is always gonna be from 0 --> so
function remapCoords(x, minX, rangeX, rangeI) {
    return Math.floor(((x - minX) / rangeX) * rangeI);
}

function loadMapTiler(lat, lon) {
    const mapElement = document.getElementById("map");
    mapElement.style.backgroundImage = "none";

    maptilersdk.config.apiKey = "KSvoCDrZE8bqhgY2sSqy";

    const map = new maptilersdk.Map({
        container: "map",
        style: maptilersdk.MapStyle.SATELLITE,
        center: [lon, lat],
        zoom: 12
    });

    return map;
}




