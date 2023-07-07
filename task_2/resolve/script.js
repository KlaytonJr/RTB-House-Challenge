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
    console.log(offers);
    offers.map((item, index) => {
        const slide = document.createElement("div");
        slide.classList.add("slide");
        // Add image
        const img = document.createElement("img");
        img.src = item.imgURL;
        slide.appendChild(img);
        
        // Add name
        const name = document.createElement("p");
        name.innerHTML = item.name;
        slide.appendChild(name);

        const div = document.createElement("div");
        // Add Price
        const price = document.createElement("p");
        price.innerHTML = `${new Intl.NumberFormat('pl', { style: 'currency', currency: item.currency }).format(item.price)}`;
        price.classList.add("price");
        div.appendChild(price);

        // Add CTA
        const btn = document.createElement("button");
        btn.innerHTML = `Check`;
        btn.classList.add("cta-button");
        div.appendChild(btn);

        slide.appendChild(div);

        slider.appendChild(slide);
    })
}

buildContent();

// Slider
const sliderEl = document.getElementById("slider");
const sliderWidth = sliderEl.offsetWidth;

function autoScroll(time) {
    setInterval(() => {

        const selectedIndex = +(sliderEl.scrollLeft/sliderWidth).toFixed(0);
        const numberOfItems = sliderEl.childElementCount;

        if(numberOfItems === selectedIndex+1) {
            sliderEl.scrollLeft = 0;
            return;
        }

        sliderEl.scrollLeft += 151;
    }, time);
}

autoScroll(2000);