let imageFiles = [
  'animal1.jpg',
  'animal2.jpg',
  'animal3.jpg',
  'animal4.jpg',
  'animal5.jpg',
  'animal6.jpg',
  'animal7.jpg'
];

let imageNames = [
  'Horse',
  'Pig',
  'Rhino',
  'Giraffe',
  'Gorilla',
  'Snake',
  'Dog',
];

// todo use forEach to generate HTML for these images
// append the new HTML to #imageContainer
// stretch goal: for each image, also display the name below
imageFiles.forEach(function(filename, index){
  let animalName = imageNames[index];
  let html = `
    <div>
      <img src="images/${filename}" />
      <h3> ${animalName} </h3>
    </div>
  `;
  $('#imageContainer').append(html);
})
