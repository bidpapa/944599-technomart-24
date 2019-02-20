if (window.location.toString().indexOf('index.html') > 0) {

  document.getElementById("company-contacts-ref").onclick = function() {showContacts()};
  function showContacts() {
    document.getElementById("modal-contact").style.display="block";
  }

  document.getElementById("company-contacts-map-ref").onclick = function() {showMap()};
  function showMap() {
    document.getElementById("modal-map").style.display="block";
  }

  document.getElementById("reset-contact").onclick = function() {resetContacts()};
  function resetContacts() {
    document.getElementById("modal-contact").style.display="none";
  }

  document.getElementById("reset-map").onclick = function() {resetMap()};
  function resetMap() {
    document.getElementById("modal-map").style.display="none";
  }

}

else

  var items = document.querySelectorAll(".buy");

  for(var i = 0; i < items.length; ++i)
  {
    items[i].onclick = function() {itemAdded()};
  }

  function itemAdded() {
    document.getElementById("modal-basket").style.display="block";
  }

  document.getElementById("reset-basket").onclick = function() {resetBasket()};
  function resetBasket() {
    document.getElementById("modal-basket").style.display="none";
  }
