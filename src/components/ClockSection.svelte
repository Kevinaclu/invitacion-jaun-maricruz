<script>
  import Scroller from "@sveltejs/svelte-scroller";
  import Clock from "./Clock.svelte";
  import { weddingDate, couple } from "../config/wedding";

  let index, offset, progress;
</script>

<Scroller top={0} bottom={0.1} bind:index bind:offset bind:progress>
  <div slot="background">
    <div
      class="bg-cover bg-center h-screen backdrop-filter backdrop-brightness-[50%] relative w-full z-40"
      style="background-image: url('img/IMG_1836.webp');"
    ></div>
  </div>

  <div
    slot="foreground"
    class="w-full h-screen flex items-center flex-col backdrop-filter backdrop-brightness-[70%]"
  >
    <div class="h-full flex sm:items-start font-cormorant">
      <div class="grid grid-cols-1 w-3/4 mx-auto content-start sm:py-10 py-8">
        <p
          class="text-center text-white text-sm sm:text-base tracking-[0.4em] uppercase mb-4 font-light"
          style="text-shadow: 0 1px 4px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.5);"
        >
          Faltan
        </p>
        <Clock />
        <div class="mt-10">
          <div class="w-12 h-[1px] bg-white/30 mx-auto mb-6"></div>
          <h1
            class="text-center sm:py-1 py-2 text-4xl sm:text-6xl text-white font-greatVibes leading-tight"
            style="text-shadow: 0 3px 20px rgba(0,0,0,0.5);"
          >
            {couple.groomName} & {couple.brideName}
          </h1>
          <h2
            class="text-center sm:py-2 py-1 text-xl sm:text-2xl text-white tracking-[0.15em] font-light mt-2"
            style="text-shadow: 0 1px 4px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.5);"
          >
            {weddingDate.displayDay} {weddingDate.displayDate}
          </h2>
          <p
            class="text-center text-white/90 text-lg mt-2 tracking-wider"
            style="text-shadow: 0 1px 4px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.5);"
          >
            {weddingDate.displayTime}
          </p>
        </div>
      </div>
    </div>
  </div>
</Scroller>
