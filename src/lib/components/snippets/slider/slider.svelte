<svelte:head>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_forward"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
  />
  <style>
    .card-wrapper {
      max-width: 1100px;
      margin: 0 60px 35px;
      padding: 20px 10px;
      overflow: hidden;
    }

    .card-list .card-item {
      list-style: none;
    }
    .card-list .card-item .card-link {
      user-select: none;
      display: block;
      background: white;
      padding: 18px;
      border-radius: 12px;
      text-decoration: none;
      border: 2px solid transparent;
      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.05);
    }

    .card-list .card-item .card-link:active {
      cursor: grabbing;
    }

    .card-list .card-item .card-link:hover {
      border-color: #5372f0;
      transition: 0.2s ease;
    }

    .card-list .card-link .card-image {
      width: 100%;
      aspect-ratio: 16/9;
      object-fit: cover;
      border-radius: 10px;
    }

    .card-list .card-link .badge {
      color: #5372f0;
      padding: 8px 16px;
      font-size: 0.95rem;
      font-weight: 500;
      margin: 16px 0 18px;
      background: #dde4ff;
      width: fit-content;
      border-radius: 50px;
    }

    .card-list .card-link .card-title {
      font-size: 1.19rem;
      color: black;
      font-weight: 600;
    }

    .card-list .card-link .card-button {
      height: 35px;
      width: 35px;
      border-radius: 50%;
      margin: 30px 0 5px;
      border: 2px solid #5372f0;
      color: #5372f0;
      cursor: pointer;
      transform: rotate(-45deg);
      transition: 0.4s ease;
    }
    .card-list .card-link:hover .card-button {
      color: white;
      background: #5372f0;
    }
    .card-wrapper .swiper-pagination-bullet {
      width: 13px;
      height: 13px;
      opacity: 0.5;
      background: #5372f0;
    }

    .card-wrapper .swiper-pagination-bullet-active {
      opacity: 1;
    }

    .card-wrapper .swiper-slide-button {
      color: #5372f0;
      margin-top: -35px;
    }

    @media screen and (max-width: 768px) {
      .card-wrapper {
        margin: 0 10px 25px;
      }
      .card-wrapper .swiper-slide-button {
        display: none;
      }
    }
    @media screen and (min-width: 1366px) {
      .swiper-pagination .swiper-slide-button {
        display: none;
      }
    }
  </style>
</svelte:head>

<div class="container swiper">
  <div class="card-wrapper">
    <ul class="card-list swiper-wrapper">
      <li class="card-item swiper-slide">
        <a href="#" class="card-link">
          <img
            src="/assets/promo-3.webp"
            alt="Banner promocional"
            class="card-image"
          />
          <p class="badge">Desenvolvedor</p>
          <h2 class="card-title">Lorem ipsum dolor sit amet consectetur</h2>
          <button class="card-button material-symbols-rounded">
            arrow_forward
          </button>
        </a>
      </li>
      <li class="card-item swiper-slide">
        <a href="#" class="card-link">
          <img
            src="/assets/promo-3.webp"
            alt="Banner promocional"
            class="card-image"
          />
          <p class="badge">Desenvolvedor</p>
          <h2 class="card-title">Lorem ipsum dolor sit amet consectetur</h2>
          <button class="card-button material-symbols-rounded">
            arrow_forward
          </button>
        </a>
      </li>
      <li class="card-item swiper-slide">
        <a href="#" class="card-link">
          <img
            src="/assets/promo-3.webp"
            alt="Banner promocional"
            class="card-image"
          />
          <p class="badge">Desenvolvedor</p>
          <h2 class="card-title">Lorem ipsum dolor sit amet consectetur</h2>
          <button class="card-button material-symbols-rounded">
            arrow_forward
          </button>
        </a>
      </li>
      <li class="card-item swiper-slide">
        <a href="#" class="card-link">
          <img
            src="/assets/promo-3.webp"
            alt="Banner promocional"
            class="card-image"
          />
          <p class="badge">Desenvolvedor</p>
          <h2 class="card-title">Lorem ipsum dolor sit amet consectetur</h2>
          <button class="card-button material-symbols-rounded">
            arrow_forward
          </button>
        </a>
      </li>
    </ul>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
  <script
    src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
  ></script>
  <script>
    new Swiper(".card-wrapper", {
      loop: true,
      spaceBetween: 30,

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
        0: {
          slidesPerView: 1,
          enabled: true,
        },
        768: {
          slidesPerView: 2,
          enabled: true,
        },
        1024: {
          slidesPerView: 3,
          enabled: false,
        },
      },
    });
  </script>
</div>
