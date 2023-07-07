const banner = document.getElementById("banner");

// Brand Logo
const logo = document.getElementById("brand-logo");

logo.src = "https://rekrutacja.webdeveloper.rtbhouse.net/files/logo_rtb.png"

// Content
const content = document.getElementById("content");
const itemsContent = Array.from(content.getElementsByClassName("content-item"));

async function getOffers() {
    const data = await fetch('https://rekrutacja.webdeveloper.rtbhouse.net/files/banner.json')
        .then(T => T.json())
        .catch((error) => console.error(error));

    return data.offers;
}

async function buildContent() {
    const offers = await getOffers();
    console.log(offers);
    console.log(itemsContent);
    itemsContent.map((item, index) => {
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

// GSAP
const item1 = document.querySelector(".item1");
const item2 = document.querySelector(".item2");
const item3 = document.querySelector(".item3");
const item4 = document.querySelector(".item4");

itemsContent.map(item => {
    item.addEventListener("mouseover", () => {
        gsap.to(item, {
            border: "1px solid red",
            duration: .2
        })
    })
    item.addEventListener("mouseout", () => {
        gsap.to(item, {
            border: "1px solid #DCDCDC",
            duration: .2
        })
    })
});

const tl = gsap.timeline({ repeat: -1 });
tl.fromTo(item1, 2, {
    border: "1px solid #DCDCDC"
}, {
    border: "1px solid red"
})
.to(item1, .5, {
    border: "1px solid #DCDCDC"
})
.fromTo(item2, 2, {
    border: "1px solid #DCDCDC"
}, {
    border: "1px solid red"
})
.to(item2, .5, {
    border: "1px solid #DCDCDC"
})
.fromTo(item3, 2, {
    border: "1px solid #DCDCDC"
}, {
    border: "1px solid red"
})
.to(item3, .5, {
    border: "1px solid #DCDCDC"
})
.fromTo(item4, 2, {
    border: "1px solid #DCDCDC"
}, {
    border: "1px solid red"
})
.to(item4, .5, {
    border: "1px solid #DCDCDC"
});

banner.addEventListener("mouseover", () => {
    tl.pause();
})

banner.addEventListener("mouseout", () => {
    tl.resume();
})