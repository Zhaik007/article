document.addEventListener("copy", function (event) {
    event.preventDefault();
    navigator.clipboard.writeText(
      "Подборка экологических мультфильмов Толеубекова Жасулана 🔗 - https://zhaik007.github.io/article/"
    );
  });
  
/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       // Add show-menu class to nav menu
       nav.classList.toggle('show-menu')

       // Add show-icon to show and hide the menu icon
       toggle.classList.toggle('show-icon')
   })
}
showMenu('nav-toggle','nav-menu')

const swiper = new Swiper(".slider-wrapper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
  
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
  
  
  const organs = new Swiper(".org-wrapper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    grabCursor: true,
    spaceBetween: 40,
  
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints: {
      300: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
    },
  });
  
  
  const cards = document.querySelectorAll(".news");
  
  cards.forEach((card) => {
    card.addEventListener("mouseover", play_song);
    card.addEventListener("mouseleave", stop_song);
  });
  
  const fadeDuration = 3000;
  
  function play_song(event) {
    const card = event.currentTarget;
    const audio = card.querySelector("#audio");
    
    if (!audio.paused) {
      // If the audio is already playing, don't interrupt it
      return;
    }
    
    fadeIn(audio, fadeDuration);
    
    audio.addEventListener('ended', () => {
      if (card.matches(':hover')) {
          fadeIn(audio, fadeDuration);
      }
    });
  }
  
  function stop_song(event) {
    const card = event.currentTarget;
    const audio = card.querySelector("#audio");
    fadeOut(audio, fadeDuration);
  }
  
  function fadeIn(audio, duration) {
    let volume = 0;
    audio.volume = volume;
    audio.play();
    
    const step = 1 / (duration / 100);
  
    const fadeAudioIn = setInterval(() => {
      if (volume < 1) {
        volume += step;
        if (volume > 1) volume = 1;
        audio.volume = volume;
      } else {
        clearInterval(fadeAudioIn);
      }
    }, 100);
  }
  
  function fadeOut(audio, duration) {
    let volume = 1;
    const step = 1 / (duration / 100);
  
    const fadeAudioOut = setInterval(() => {
      if (volume > 0) {
        volume -= step;
        if (volume < 0) volume = 0;
        audio.volume = volume;
      } else {
        clearInterval(fadeAudioOut);
        audio.pause();
        audio.currentTime = 0; // Reset to the beginning
      }
    }, 100);
  }
  