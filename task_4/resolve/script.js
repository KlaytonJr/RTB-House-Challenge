const banner = document.getElementById("banner");

// Content
const sliderEl = document.getElementById("slider");
const countryNameEl = document.getElementById("country-name");
const cityNameEl = document.getElementById("city-name");
const priceEl = document.getElementById("price-value");

async function getOffers() {
    const data = await fetch('https://rekrutacja.webdeveloper.rtbhouse.net/files/banner_vip.json')
        .then(T => T.json())
        .catch((error) => console.error(error));

    return data.offers;
}

let offers;

async function buildContent() {
    offers = await getOffers();
    console.log(offers);
    autoScroll(4000);
    offers.map((item, index) => {
        const slide = document.createElement("div");
        slide.classList.add("slide");
        // Add image
        const img = document.createElement("img");
        img.src = item.imgURL;
        slide.appendChild(img);

        sliderEl.appendChild(slide);
    });
}

buildContent();

// Slider
const brandEl = document.getElementById("brand");
const ctaEl = document.getElementById("cta");
const ctaLineEl = document.getElementById("cta-line");
const dotsContEl = document.querySelector(".dots-container");

const sliderWidth = sliderEl.offsetWidth;

function autoScroll(time) {
    countryNameEl.innerHTML = offers[0].country;
    cityNameEl.innerHTML = offers[0].city;
    priceEl.innerHTML = `${offers[0].price} ${offers[0].currency}`;

    setTimeout(() => {
        setInterval(() => {
            const selectedIndex = +(sliderEl.scrollLeft/sliderWidth).toFixed(0);
            const numberOfItems = offers.length;

            // At least hidden items
            if(numberOfItems === selectedIndex+1) {
                brandEl.style.opacity = 0;
                ctaEl.style.opacity = 0;
                ctaLineEl.style.opacity = 0;
                dotsContEl.style.opacity = 0;
                return;
            }

            countryNameEl.innerHTML = offers[selectedIndex+1].country;
            cityNameEl.innerHTML = offers[selectedIndex+1].city;
            priceEl.innerHTML = `${offers[selectedIndex+1].price} ${offers[selectedIndex+1].currency}`;

            sliderEl.scrollLeft += 300;

            // Active slide
            const list = Array.from(document.getElementsByClassName('dot'));

            list.forEach(el => el.classList.remove('active'));
            list[selectedIndex+1].classList.add('active');
        }, time);
    }, 3000);
}

