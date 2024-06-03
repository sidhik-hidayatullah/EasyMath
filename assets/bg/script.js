document.addEventListener("DOMContentLoaded", function() {
  var heroCarousel = new bootstrap.Carousel(
    document.querySelector("#heroCarousel"),
    {
      interval: 3000, // 3 detik
      ride: "carousel",
    }
  );

  var bookCarousel = new bootstrap.Carousel(
    document.querySelector("#bookCarousel"),
    {
      interval: 5000, // 5 detik
      ride: "carousel",
    }
  );
});

document.addEventListener("DOMContentLoaded", function() {
  var filterButtons = document.querySelectorAll(".filter-button");
  var filterCards = document.querySelectorAll(".filter");

  filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      var filterValue = button.getAttribute("data-filter");

      filterCards.forEach(function(card) {
        if (filterValue === "all" || card.classList.contains(filterValue)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });

      filterButtons.forEach(function(btn) {
        btn.classList.remove("active");
      });
      button.classList.add("active");
    });
  });

  // Initialize by simulating a click on the "All" button
  document.querySelector('.filter-button[data-filter="all"]').click();
});

document.addEventListener("DOMContentLoaded", function() {
  // Initialize by simulating a click on the "All" button
  document.querySelector('.filter-button[data-filter="all"]').click();

  const filterButtons = document.querySelectorAll(".filter-button");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function() {
      const filterValue = button.dataset.filter;
      const videos = document.querySelectorAll(".card-video");

      videos.forEach((video) => {
        const category = video.dataset.category;
        if (filterValue === "all" || category === filterValue) {
          video.parentElement.style.display = "block"; // Menampilkan kolom
        } else {
          video.parentElement.style.display = "none"; // Menyembunyikan kolom
        }
      });
    });
  });
});
