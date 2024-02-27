function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// section__text__p2 
document.addEventListener('DOMContentLoaded', function () {
  const professions = ['Frontend Developer', 'Backend Developer', 'Graphic Designer'];
  let index = 0;
  const textElement = document.querySelector('.section__text__p2');

  setInterval(() => {
    textElement.textContent = professions[index];
    index = (index + 1) % professions.length;
  }, 2000); // Change every 2 seconds
});

// new Modal
function openModal(imgSrcArray) {
  var modal = document.getElementById("myModal");
  var modalContentContainer = document.querySelector(".modal-content-container");
  modalContentContainer.innerHTML = ""; // Clear previous content

  imgSrcArray.forEach(function(imgSrc) {
    var imgElement = document.createElement("img");
    imgElement.src = imgSrc;
    imgElement.classList.add("modal-content");
    modalContentContainer.appendChild(imgElement);
  });

  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}