const yearSpan = document.getElementById("currentYear");
yearSpan.textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent =
  "Last Modified: " + document.lastModified;

function toggleMenu() {
  const menu = document.querySelector("nav ul");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

const images = [
  {
    name: "Strawberry Taho",
    flavor: "Sweet and creamy",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/64905b55d2da1763d70b05d0/bc1ae48d-09a7-4c83-b350-b6afeae16728/strawberry+taho.jpg",
  },
  {
    name: "Arnibal Taho",
    flavor: "Sweet and caramelized",
    imageUrl:
      "https://img.delicious.com.au/CqRHYuji/del/2024/02/taho-206778-1.jpg",
  },
  {
    name: "Ube Taho",
    flavor: "Sweet and purple",
    imageUrl: "https://i.ytimg.com/vi/OoPdxRZ9myg/maxresdefault.jpg",
  },
  {
    name: "Mango Taho",
    flavor: "Sweet and fruity",
    imageUrl: "https://i.ytimg.com/vi/nMiud55W_H0/maxresdefault.jpg",
  },
  {
    name: "Nata Taho",
    flavor: "Sweet and chewy",
    imageUrl:
      "https://i.pinimg.com/736x/95/54/b6/9554b6716be168a1070cda26c7481356--bar.jpg",
  },
  {
    name: "Ice Cream Taho",
    flavor: "Extra cold and creamy",
    imageUrl:
      "https://th.bing.com/th/id/OIP.4MDLpW_uBigCazpxoyymdgAAAA?rs=1&pid=ImgDetMain",
  },
];

createImageCard(document.getElementById("image-grid"), images);

function createImageCard(div, temples) {
  const imageGrid = div;
  if (!imageGrid) {
    console.error("No div found with id 'image-grid'");
    return;
  }
  imageGrid.innerHTML = "";
  for (const image of images) {
    const card = document.createElement("div");
    card.classList.add("image-card");
    card.appendChild(document.createElement("h2")).textContent = image.name;
    card.appendChild(document.createElement("p")).textContent = image.flavor;
    const figures = document.createElement("figure");
    const img = document.createElement("img");
    img.src = image.imageUrl;
    img.alt = image.templeName;
    img.loading = "lazy";
    img.classList.add("temple-image");
    figures.appendChild(img);
    card.appendChild(figures);
    div.appendChild(card);
  }
}
