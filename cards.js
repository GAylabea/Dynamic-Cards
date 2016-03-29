      // Create variables for all of our html elements
var createButton = document.getElementById("create");
var deleteButton = document.getElementsByClassName("delete"); 
var input = document.getElementById("input");
var container = document.getElementById("container");
// This variable needs to be ClassName, not ID and will return an array (since it's several cards)
var card = document.getElementsByClassName("card");     

// We have created an anonymous function - we could name it after a variable to be defined later; both are the same
createButton.addEventListener("click", createCard ); 

// we are creating the function outside of the listener
// we might want to add a checkInput function later
  // <div class ="cardContainer">Container for cards</div>
  //   <section><p class="text"></p>
  //   </section>
  //   <input type ="button">
// we also want to make sure that we use the 
function createCard () {
  var output = '<div class="card"><section><p class="text">' + input.value + '</p> </section><input type="button" class="delete" value="delete"></div>'
  container.innerHTML += output;
  deleteButtonEventListener();
}

// We are removing the grandchild - it's like Back to the Future! - it erases the parent AND the grandchild (itself! the Delete button!)
function removeCard(event) {
  var thisCard = event.target.parentElement;
  container.removeChild(thisCard)
}

function deleteButtonEventListener() {
  for (var i=0; i<deleteButton.length; i++) {
    var remove = document.getElementsByClassName ("delete")
    for(var j=0; j<remove.length; j++) {
      remove[j].addEventListener("click", removeCard)
      }
    }
  }
