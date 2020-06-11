import getPosts from "json.js";
const songoltUrl = "https://api.jsonbin.io/b/5eccfde0bbaf1f2589477322/latest";
const element = document.getElementById("card");
getPosts(songoltUrl, element, (contents) => {
  contents.forEach((content) => {
    document.getElementById("card").innerHTML += content.Create();
  });
});