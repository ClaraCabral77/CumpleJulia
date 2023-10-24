
//funcion del contador cumpleaños//

(function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "11/26/",
      birthday = dayMonth + yyyy;
  
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
  
    const countDown = new Date(birthday).getTime(),
      x = setInterval(function () {
        const now = new Date().getTime(),
          distance = countDown - now;
  
        (document.getElementById("days").innerText = Math.floor(distance / day)),
          (document.getElementById("hours").innerText = Math.floor(
            (distance % day) / hour
          )),
          (document.getElementById("minutes").innerText = Math.floor(
            (distance % hour) / minute
          )),
          (document.getElementById("seconds").innerText = Math.floor(
            (distance % minute) / second
          ));
  
        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "Es mi cumpleaños!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 0);
  })();
  
  //funcion menu desplegable//
  
  var menuToggle = document.querySelector('[data-js="menu-toggle"]');
  
  // Remove this setInterval to trigger the open/close manually through the UI
  var interval = setInterval(function () {
    menuToggle.click();
  }, 800000);
  
  // Clear the interval on any click
  document.body.addEventListener("click", function () {
    clearInterval(interval);
  });
  
  menuToggle.addEventListener("click", function () {
    document.body.classList.toggle("panel-open");
    menuToggle.classList.toggle("open");
  });
  
  var closePanel = document.querySelector('[data-js="hidden-panel-close"]');
  
  closePanel.addEventListener("click", function () {
    document.body.classList.remove("panel-open");
    menuToggle.classList.remove("open");
  });
  
  
  var closePanelQuien = document.querySelector('[title="Home"]');
  
  closePanelQuien.addEventListener("click", function () {
    document.body.classList.remove("panel-open");
    menuToggle.classList.remove("open");
  });
  
  var closePanelProductos = document.querySelector('[title="About"]');
  
  closePanelProductos.addEventListener("click", function () {
    document.body.classList.remove("panel-open");
    menuToggle.classList.remove("open");
  });
  
  
  var closePanelContacto = document.querySelector('[title="Contacto"]');
  
  closePanelContacto.addEventListener("click", function () {
    document.body.classList.remove("panel-open");
    menuToggle.classList.remove("open");
  });
  
  
  
  //carrusel fotos//


  $("input").on("change", function () {
    $("body").toggleClass("blue");
  });
  
  
  
  
  // Mapa //

  function mostrarMapa() {
    var mapa = document.getElementById("mapa");
    mapa.style.display = "block";
  }
  
  