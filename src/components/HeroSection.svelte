<script>
  import Scroller from "@sveltejs/svelte-scroller";
  import { couple, weddingDate } from "../config/wedding";

  let index, offset, progress;
</script>

<Scroller top={0} bottom={0.3} bind:index bind:offset bind:progress>
  <div slot="background">
    <div
      class="bg-cover bg-center h-screen backdrop-filter backdrop-brightness-[75%] relative w-full z-40"
      style="background-image: url('img/IMG_1661.webp');"
    ></div>
  </div>

  <div
    slot="foreground"
    class="w-full h-screen flex items-center justify-center flex-col backdrop-filter backdrop-brightness-[60%]"
  >
    <div class="flex flex-col items-center gap-3 px-6">
      <p
        class="font-raleway text-white text-sm sm:text-base tracking-[0.4em] uppercase font-light"
        style="text-shadow: 0 1px 6px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.4);"
      >
        Nuestra Boda
      </p>

      <div class="w-16 h-[1px] bg-white/50 my-1"></div>

      <h1
        id="hero-title"
        class="font-greatVibes text-center text-white text-7xl sm:text-8xl md:text-9xl motion-duration-2000 motion-delay-1000 leading-tight"
        style="text-shadow: 0 4px 30px rgba(0,0,0,0.4);"
      >
        {couple.groomName} & {couple.brideName}
      </h1>

      <div class="w-16 h-[1px] bg-white/50 my-1"></div>

      <p
        class="font-cormorant text-white/90 text-lg sm:text-xl tracking-[0.25em] uppercase mt-1"
        style="text-shadow: 0 1px 6px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.4);"
      >
        Nos casamos
      </p>
    </div>

    <div class="flex flex-grow items-end pb-20">
      <div class="flex flex-col items-center gap-2">
        <h2
          class="font-cormorant text-white text-2xl sm:text-3xl tracking-[0.3em] font-light"
          style="text-shadow: 0 1px 6px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.4);"
        >
          {weddingDate.shortDate}
        </h2>
        <svg class="w-5 h-5 text-white/70 animate-bounce mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 14l-7 7m0 0l-7-7" />
        </svg>
      </div>
    </div>
  </div>
</Scroller>
