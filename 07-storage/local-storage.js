// Run this in a browser console or include it in a web page.

const settings = {
  theme: "dark",
  language: "en"
};

localStorage.setItem("webprimsSettings", JSON.stringify(settings));

const savedSettings = JSON.parse(localStorage.getItem("webprimsSettings"));
console.log("Saved settings:", savedSettings);

// Practice: build a small notes app that saves notes in localStorage.
