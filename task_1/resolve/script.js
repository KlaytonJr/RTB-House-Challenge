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
    const itemsContent = await content.getElementsByClassName("content-item");
    console.log(itemsContent);
    Array.from(itemsContent).map((item, index) => {
        const currentOffer = offers[index];
        // Add image
        const div = document.createElement("div");
        const img = document.createElement("img");
        img.src = currentOffer.imgURL;
        div.appendChild(img);
        item.appendChild(img);

        // Add Price
        const text = document.createElement("p");
        text.innerHTML = `${new Intl.NumberFormat('pl', { style: 'currency', currency: currentOffer.currency }).format(currentOffer.price)}`;
        item.appendChild(text);
    })
}

buildContent();