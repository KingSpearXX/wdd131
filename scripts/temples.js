const yearSpan = document.getElementById("currentYear");
yearSpan.textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

function toggleMenu() {
    const menu = document.querySelector('nav ul');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Hong Kong China Temple",
        location: "Kowloon City, Hong Kong",
        dedicated: "1996, May, 26",
        area: 253015,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-28125-main.jpg"
    },
    {
        templeName: "Fukuoka Japan Temple",
        location: "Fukuoka, Japan Temple",
        dedicated: "2000, June, 11",
        area: 10700,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/fukuoka-japan-temple/fukuoka-japan-temple-14618-main.jpg"
    },
    {
        templeName: "Manila Philippines",
        location: "Manila, Philippines",
        dedicated: "1984, September, 25",
        area: 26683,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/_temp/029-Manila-Philippines-Temple.jpg"
    }
  ];

  document.onload = showAll();

    function showAll() {
        createTempleCard(document.getElementById("temple-grid"), temples);  
    }
    function filterOld() {
        const filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0].trim(), 10) < 2000);
        createTempleCard(document.getElementById("temple-grid"), filteredTemples);
    }
    function filterNew() {
        const filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0].trim(), 10) >= 2000);
        createTempleCard(document.getElementById("temple-grid"), filteredTemples);
    }
    function filterSmall() {
        const filteredTemples = temples.filter(temple => temple.area < 10000);
        createTempleCard(document.getElementById("temple-grid"), filteredTemples);
    }
    function filterLarge() {
        const filteredTemples = temples.filter(temple => temple.area >= 90000);
        createTempleCard(document.getElementById("temple-grid"), filteredTemples);
    }

    function filterByCountry(country) {
        const filteredTemples = temples.filter(temple => temple.location.includes(country));
        createTempleCard(document.getElementById("temple-grid"), filteredTemples);
    }

  function createTempleCard(div, temples) {
    const templeGrid = div;
    if (!templeGrid) {
        console.error("No div found with id 'temple-grid'");
        return;
    }
    templeGrid.innerHTML = "";
    for(const temple of temples) {
        const card = document.createElement("div");
        card.classList.add("temple-card");
        card.appendChild(document.createElement("h2")).textContent = temple.templeName;
        card.appendChild(document.createElement("p")).textContent = temple.location;
        card.appendChild(document.createElement("p")).textContent = "Dedicated: " + temple.dedicated;
        card.appendChild(document.createElement("p")).textContent = "Area: " + temple.area + " sq ft";
        const figures = document.createElement("figure");
        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = "lazy";
        img.classList.add("temple-image");
        figures.appendChild(img);
        card.appendChild(figures);
        div.appendChild(card);
    }
  }