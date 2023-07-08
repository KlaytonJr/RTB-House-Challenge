const banner = document.getElementById("banner");

// Content
const sliderEl = document.getElementById("slider");

async function getOffers() {
    const data = await fetch('https://rekrutacja.webdeveloper.rtbhouse.net/files/banner_vip.json')
        .then(T => T.json())
        .catch((error) => console.error(error));

    return data.offers;
}

let offers;

async function buildContent() {
    offers = await getOffers();
    offers.map((item, index) => {
        const slide = document.createElement("div");
        slide.classList.add("slide");
        // Add image
        const img = document.createElement("img");
        img.src = item.imgURL;
        slide.appendChild(img);
        
        // Add name
        // const name = document.createElement("p");
        // name.innerHTML = item.name;
        // slide.appendChild(name);

        // const div = document.createElement("div");
        // // Add Price
        // const price = document.createElement("p");
        // price.innerHTML = `${new Intl.NumberFormat('pl', { style: 'currency', currency: item.currency }).format(item.price)}`;
        // price.classList.add("price");
        // div.appendChild(price);

        // // Add CTA
        // const btn = document.createElement("button");
        // btn.innerHTML = `Check`;
        // btn.classList.add("cta-button");
        // div.appendChild(btn);

        // slide.appendChild(div);

        sliderEl.appendChild(slide);
    })
}

buildContent();

// Slider
const brandEl = document.getElementById("brand");
const ctaEl = document.getElementById("cta");
const ctaLineEl = document.getElementById("cta-line");

const sliderWidth = sliderEl.offsetWidth;

function autoScroll(time) {
    setTimeout(() => {
        setInterval(() => {
            const selectedIndex = +(sliderEl.scrollLeft/sliderWidth).toFixed(0);
            const numberOfItems = offers.length;

            // At least hidden items
            if(numberOfItems === selectedIndex+1) {
                brandEl.style.opacity = 0;
                ctaEl.style.opacity = 0;
                ctaLineEl.style.opacity = 0;
                return;
            }

            sliderEl.scrollLeft += 300;
        }, time);
    }, 3000);
}

autoScroll(4000);

