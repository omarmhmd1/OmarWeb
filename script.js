function toggleMenu() {
    var links = document.getElementById("links");
    if (links.style.display === "block") {
      links.style.display = "none";
    } else {
      links.style.display = "block";
    }
  }


  function changeTextDirection() {
    var textContainer = document.getElementById('text');
    
    textContainer.style.direction = 'rtl';  
}


