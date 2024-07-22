// destination.js
const destinations = {
  indonesia: {
    title: "Indonesia",
    backgroundImage: "IndonesiaDark.png",
    defaultImage: "Waterdom.png",
    places: [
      {
        name: "Waterdom",
        description:
          "Bali offers breathtaking scenery with pristine beaches, crystal-clear waters, and lush greenery, perfect for nature lovers.",
        image: "WaterdomL.png",
        contImg: "Waterdom.png",
      },
      {
        name: "Tegalang",
        description:
          "This place comprises a series of cascading rice fields. A UNESCO World Heritage site, especially popular during sunrise and sunset.",
        image: "TegalangL.png",
        contImg: "Tegalang.png",
      },
      {
        name: "Uluwatu Temple",
        description:
          "Visit for its stunning cliff-top views over the Indian Ocean and to witness the mesmerizing Kecak fire dance at sunset.",
        image: "Uluwatu.png",
        contImg: "UluwatuB.png",
      },
    ],
  },
  bali: {
    title: "Bali",
    backgroundImage: "IndonesiaDark.png",
    defaultImage: "KelingkingB.png",
    places: [
      {
        name: "Kelingking",
        description:
          "Discover the breathtaking beauty of Kelingking Beach in Bali. Plan your visit to this stunning destination today!",
        image: "Kelingking.png",
        contImg: "KelingkingB.png",
      },
      {
        name: "Tanah Lot Temple",
        description:
          "Experience the breathtaking beauty of Tanah Lot Temple, Bali's iconic sea temple perched on a dramatic offshore rock formation. Visit at sunset for a truly magical view that will leave you in awe.",
        image: "TanahLotTemple.png",
        contImg: "TanahLotTempleB.png",
      },
      {
        name: "Ulun Danu Bratan Temple",
        description:
          "Discover the serene beauty of Ulun Danu Bratan Temple, a stunning water temple in Bali. Immerse yourself in its rich history and breathtaking scenery.",
        image: "UlunDanuBratanTemple.png",
        contImg: "UlunDanuBratanTempleB.png",
      },
    ],
  },
  kerala: {
    title: "Kerala",
    backgroundImage: "IndonesiaDark.png",
    defaultImage: "AllepeyB.png",
    places: [
      {
        name: "Allepey Backwaters",
        description:
          "Discover the serene beauty of Alleppey's backwaters. Embark on a tranquil houseboat journey and experience nature like never before.",
        image: "Allepey.png",
        contImg: "AllepeyB.png",
      },
      {
        name: "Varkala Beach",
        description:
          "Experience the serene beauty of Varkala Beach with its stunning cliffs and golden sands. Plan your visit now to enjoy breathtaking sunsets and peaceful surroundings.",
        image: "Varkala.png",
        contImg: "VarkalaB.png",
      },
      {
        name: "Tea",
        description:
          "Experience the serene beauty of Kerala's tea gardens, where lush greenery and misty landscapes await. Discover tranquility and breathtaking views in the heart of India's tea country.",
        image: "Tea.png",
        contImg: "TeaB.png",
      },
    ],
  },
  Thailand: {
    title: "Thailand",
    backgroundImage: "IndonesiaDark.png",
    defaultImage: "WatPhraB.png",
    places: [
      {
        name: "Wat Phra Chetuphon",
        description:
          "One of the oldest and largest temples in Bangkok features the famous Reclining Buddha, which is the largest in Thailand measuring more than 150 feet in length.",
        image: "WatPhra.png",
        contImg: "WatPhraB.png",
      },
      {
        name: "The Grand Palace",
        description:
          "Experience the majestic beauty of The Grand Palace in Thailand, a symbol of royal heritage and architectural grandeur. Plan your visit today to explore its stunning temples and rich history.",
        image: "GrandPalace.png",
        contImg: "GrandPalaceB.png",
      },
      {
        name: "Jim Thompson House",
        description:
          "This former home of an American named Jim Thompson, who started the Thai silk industry after World War II, houses a magnificent collection of Asian art and many unique displays.",
        image: "JimThompson.png",
        contImg: "JimThompsonB.png",
      },
    ],
  },
};

function loadDestination() {
  const urlParams = new URLSearchParams(window.location.search);
  const destinationKey = urlParams.get("destination");
  const destination = destinations[destinationKey];

  if (destination) {
    document.getElementById("destination-title").innerText = destination.title;
    document.getElementById("destination-name").innerText = destination.title;
    document.getElementById("background-image").src =
      destination.backgroundImage;
    document.getElementById("Default_img").src = destination.defaultImage;

    const placesList = document.getElementById("places-list");
    destination.places.forEach((place) => {
      const placeDiv = document.createElement("div");
      placeDiv.classList.add("place");
      placeDiv.innerHTML = `
                <div class="Cont" onclick="displayImg('${place.contImg}')">
                    <img src="${place.image}" alt="${place.name}">
                    <p style="color: #50575F;"><strong>${place.name}<br></strong>${place.description}</p>
                </div>
            `;
      placesList.appendChild(placeDiv);
    });
  }
}

function displayImg(imgSrc) {
  document.getElementById("Default_img").src = imgSrc;
}

window.onload = loadDestination;
