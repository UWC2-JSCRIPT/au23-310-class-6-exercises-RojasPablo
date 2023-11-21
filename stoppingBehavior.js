// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage
const $moreInfo = $('#more-info'); // isolates more info id
// creates cuntion on id click to prevent default and insert new alert
$moreInfo.click(function(event){
  event.preventDefault();
  alert("Here's some info!")
})

// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"
const $barkButton = $('#dog'); // isolates dog id which contains dog class that prompts Bark message
$barkButton.click(function(event){
  event.preventDefault();
  alert("Bow Wow!");
})