<script>
  import ItineraryCarousel from "./ItineraryCarousel.svelte";
</script>

<div
  class="relative w-full flex items-center flex-col text-white"
  style="background-image: url('img/IMG_1802.webp'); background-size: cover; background-position: center;"
>
  <div class="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0"></div>
  <div class="relative z-10 w-full flex flex-col items-center">
    <div class="mt-20 mb-2">
      <p
        class="text-center text-white font-raleway text-xs sm:text-sm tracking-[0.4em] uppercase mb-4 font-light"
        style="text-shadow: 0 1px 4px rgba(0,0,0,0.9);"
      >
        Programa del evento
      </p>
      <h1
        class="font-greatVibes text-center text-white text-6xl sm:text-7xl motion-duration-1500 motion-preset-slide-right"
        style="text-shadow: 0 3px 20px rgba(0,0,0,0.4);"
      >
        Itinerario
      </h1>
      <div class="w-16 h-[1px] bg-white/30 mx-auto mt-4"></div>
    </div>
    <ItineraryCarousel />
  </div>
</div>
