// A/B image & video comparison slider script for Articulate Storyline 360
// Author: PJ Palomaki
// Liscence: MIT
// Version: 1.0

// Define slider variable and layer accessability text value
var mySliderVar = 'Slider';         // Change this to the variable that the slider effects
var elementAccText = 'video';   // Change this to the accessibility text value of the layer being cropped (image, video, etc)

// Get Storyline player
storyline = GetPlayer();

// Get Slider element
mySliderValue = storyline.GetVar(mySliderVar);

// Get Storyline crop layer element
var cropElementString = "[data-acc-text='" + elementAccText + "']";
var cropElement = document.querySelector(cropElementString);
var cropElementChild = cropElement.children[0];

// Get element original size
var originalSize;
if (elementAccText.slice(-1) == 'y') {
  // Get height
  originalSize = parseFloat(cropElement.style.height);
} else {
  // Get width
  originalSize = parseFloat(cropElement.style.width);
}

// Set size style
cropElementChild.style.overflow = "hidden";
if (elementAccText.slice(-1) == 'y') {
  // Set height
  cropElementChild.style.height = originalSize * mySliderValue + 'px';
} else {
  // Set width
  cropElementChild.style.width = originalSize * mySliderValue + 'px';
}