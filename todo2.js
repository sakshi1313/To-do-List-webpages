// creating a delete button

const mylist = document.querySelectorAll("li");

for (let i = 0; i < mylist.length; i++) {
  var div = document.createElement("button");
 
  div.className = "close";
  div.innerHTML="Delete";
  mylist[i].appendChild(div);

}

// deleting stuffs after clicking delete button

var close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
  var div = this.parentElement;
  div.style.display = "none";
  }
}

// clicking on the item to mark it completed
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
  ev.target.classList.toggle('checked');
  }
}, false);


// appending new items in the list after clicking add button
const add = document.querySelector(".add");
add.addEventListener("click",function(e)
{
  var li = document.createElement("li");
  var inputValue = document.getElementById("item").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
  alert("You must write something!");
  } 
  else 
  {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("item").value = "";
  var del = document.createElement("button");
  del.innerHTML="Delete";
  del.className = "close";
 
  li.appendChild(del);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
  }
})

function deleteAllitems(){
  var el = document.getElementsByTagName("ul");
    el[0].innerHTML = "";
}

