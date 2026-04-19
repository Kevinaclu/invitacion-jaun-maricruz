<script>
  import Carousel from "svelte-carousel";
  import ItineraryCarouselItem from "./ItineraryCarouselItem.svelte";
  import { itinerary, colors } from "../config/wedding";
  let carousel;

  function next() {
    carousel.goToNext();
  }

  function prev() {
    carousel.goToPrev();
  }
</script>

<Carousel bind:this={carousel}>
  <div slot="next" class="flex justify-center items-center">
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <button
      onclick={next}
      aria-label="Siguiente"
      class="h-8 w-8 sm:h-9 sm:w-9 mr-2 flex justify-center items-center rounded-full shadow-md text-white transition hover:scale-110"
      style="background-color: {colors.primaryLight}"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 sm:w-5 sm:h-5">
        <polyline points="9 6 15 12 9 18"></polyline>
      </svg>
    </button>
  </div>

  <div slot="prev" class="flex justify-center items-center">
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <button
      onclick={prev}
      aria-label="Anterior"
      class="h-8 w-8 sm:h-9 sm:w-9 ml-2 flex justify-center items-center rounded-full shadow-md text-white transition hover:scale-110"
      style="background-color: {colors.primaryLight}"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 sm:w-5 sm:h-5">
        <polyline points="15 6 9 12 15 18"></polyline>
      </svg>
    </button>
  </div>

  {#each itinerary as item}
    <ItineraryCarouselItem
      title={item.title}
      time={item.time}
      icon={item.icon}
    />
  {/each}
</Carousel>
