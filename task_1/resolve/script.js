// Brand Logo
const logo = document.getElementById("brand-logo");

logo.src = "https://rekrutacja.webdeveloper.rtbhouse.net/files/logo_rtb.png"

// Content
const content = document.getElementById("content");

async function getOffers() {
    const data = await fetch('https://rekrutacja.webdeveloper.rtbhouse.net/files/banner.json')
        .then(T => T.json())
        .catch((error) => console.error(error));

    return data.offers;
}

async function buildContent() {
    const offers = await getOffers();
    console.log(offers);
}

buildContent();