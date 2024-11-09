function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

// Handle opening and closing of modals
function setupModalHandlers(modalId, btnId, closeClass) {
  const modal = document.getElementById(modalId);
  const btn = document.getElementById(btnId);
  const closes = document.getElementsByClassName(closeClass);

  // When the user clicks on the button, open the modal
  if (btn) {
    btn.onclick = function() {
      modal.style.display = "block";
    }
  }

  // When the user clicks on any <span> (x), close the modal
  Array.from(closes).forEach(close => {
    close.onclick = function() {
      modal.style.display = "none";
    };
  });

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

// Setup modal handlers for all modals
setupModalHandlers("myModal", "myBtn", "close");
setupModalHandlers("myModal2", "myBtn2", "close2");
setupModalHandlers("myModal3", "myBtn3", "close3");
