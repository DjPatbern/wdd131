document.addEventListener("DOMContentLoaded", function () {
  const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
    },

    {
      templeName: "Belém Brazil Temple",
      location: "Belém–PA, Brazil",
      dedicated: "2022, November, 20",
      area: 28675,
      imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/belem-brazil-temple/belem-brazil-temple-31310-main.jpg",
    },

    {
      templeName: "Accra Ghana Temple",
      location: "Accra, Ghana",
      dedicated: "2004, January , 11",
      area: 17500,
      imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg",
    },

    {
      templeName: "Antofagasta Chile Temple",
      location: "Antofagasta, Chile",
      dedicated: "2020, November , 27",
      area: 23000,
      imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/antofagasta-chile-temple/antofagasta-chile-temple-48608-main.jpg",
    },
  ];

  const templeGallery = document.getElementById("temple-gallery");

  function createTempleCard(temple) {
    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = `${temple.templeName} Temple`;
    img.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.innerHTML = `
        <h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Size:</strong> ${temple.area} sq ft</p>
      `;

    figure.appendChild(img);
    figure.appendChild(caption);
    return figure;
  }

  function renderTemples(filteredTemples) {
    templeGallery.innerHTML = "";
    filteredTemples.forEach((temple) => {
      templeGallery.appendChild(createTempleCard(temple));
    });
  }

  renderTemples(temples);

  document.getElementById("menu").addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      event.preventDefault();
      const filter = event.target.textContent;

      let filteredTemples = temples;

      switch (filter) {
        case "Old":
          filteredTemples = temples.filter((temple) => {
            const year = parseInt(temple.dedicated.split(",")[0]);
            return year < 1900;
          });
          break;
        case "New":
          filteredTemples = temples.filter((temple) => {
            const year = parseInt(temple.dedicated.split(",")[0]);
            return year > 2000;
          });
          break;
        case "Large":
          filteredTemples = temples.filter((temple) => temple.area > 90000);
          break;
        case "Small":
          filteredTemples = temples.filter((temple) => temple.area < 10000);
          break;
        case "Home":
        default:
          filteredTemples = temples;
      }

      renderTemples(filteredTemples);
    }
  });

  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("last-modified").textContent = document.lastModified;
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    hamburger.addEventListener('click', function() {
        menu.classList.toggle('visible');
        hamburger.textContent = menu.classList.contains('visible') ? 'X' : '☰';
    });

    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;
});
