//define functions here
function getIt() {
  $('p').on("click", function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on("load", function() {
    this.className += 'tasty';
  });
}

function pressIt() {
  $('#typing').on("keydown", function(key) {
    if (key.which === 71) {
      alert("You pressed the 'G' key!");
    }
  });
}

function submitIt() {
  $('')
}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
});
