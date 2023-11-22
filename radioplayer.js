// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

const responsePromise = fetch("https://api.sr.se/api/v2/channels/?format=json");

const dataPromise = responsePromise.then((response) => {
  return response.json();
});

dataPromise.then((data) => {
  console.log(data);

  const radioElement = document.getElementById("radio-box");

  // Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

  data.channels.forEach((channel) => {
    const radioChannel = document.createElement("div");
    radioChannel.innerHTML = `<div class = "channel-div"><img src=${channel.image}><div class = "name-audio"><h1>${channel.name}</h1><audio src=${channel.liveaudio.url} type=audio/mpeg controls></div></div>`;
    radioChannel.style.backgroundColor = `#${channel.color}`;

    radioElement.appendChild(radioChannel);
  });
});

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>

//--------- MY FIRST DRAFT CODE ---------//

//     radioChannel.innerHTML = `<div class="channel-name">${channel.name}</div>`;

//     radioElement.appendChild(radioChannel);
//     radioChannel.classList.add("channel");

//     radioChannel.style.backgroundColor = `#${channel.color}`;

//     const image = document.createElement("img");
//     image.src = channel.image;
//     image.alt = channel.name;
//     radioChannel.appendChild(image);

//     const audio = document.createElement("audio");
//     audio.controls = true;
//     const source = document.createElement("source");

//     source.src = channel.liveaudio.url;
//     source.type = "audio/mpeg";

//     audio.appendChild(source);
//     radioChannel.appendChild(audio);
//   });
