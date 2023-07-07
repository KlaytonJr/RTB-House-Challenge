const banner = document.getElementById("banner");

// Brand Logo
const logo = document.getElementById("brand-logo");

logo.src = "https://rekrutacja.webdeveloper.rtbhouse.net/files/logo_rtb.png"

// Content
const slider = document.getElementById("slider");

async function getOffers() {
    const data = await fetch('https://rekrutacja.webdeveloper.rtbhouse.net/files/banner.json')
        .then(T => T.json())
        .catch((error) => console.error(error));

    return data.offers;
}

async function buildContent() {
    const offers = await getOffers();
    offers.map((item, index) => {
        const slide = document.createElement("div");
        slide.classList.add("slide");
        // Add image
        const img = document.createElement("img");
        img.src = item.imgURL;
        slide.appendChild(img);

        // Add Price
        const text = document.createElement("p");
        text.innerHTML = `${new Intl.NumberFormat('pl', { style: 'currency', currency: item.currency }).format(item.price)}`;
        slide.appendChild(text);

        slider.appendChild(slide);
    })
}

buildContent();