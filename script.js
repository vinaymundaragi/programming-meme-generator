//reference elements
const memeTitle = document.querySelector(".title");
const memeImage = document.querySelector(".container img");
const memeAuthor = document.querySelector(".author");

const apiUrl = "https://meme-api.com/gimme/programmingmemes";

async function generateMeme(apiUrl) {
  const response = await fetch(apiUrl);
  const data = await response.json();
  memeTitle.innerHTML = `Meme Title: ${data.title}`;
  memeImage.setAttribute("src", data.url);
  memeAuthor.innerHTML = `Meme by: ${data.author}`;
}
