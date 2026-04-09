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
      class="h-5 w-5 mr-2 flex justify-center items-center rounded-full"
      style="background-color: {colors.primaryLight}"
      ><i
        class="sc-carousel-arrow__arrow s-QnFt-6YR1ouf sc-carousel-arrow__arrow-next"
      ></i></button
    >
  </div>

  <div slot="prev" class="flex justify-center items-center">
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <button
      onclick={prev}
      class="h-5 w-5 ml-2 flex justify-center items-center rounded-full"
      style="background-color: {colors.primaryLight}"
      ><i
        class="sc-carousel-arrow__arrow s-QnFt-6YR1ouf sc-carousel-arrow__arrow-prev"
      ></i></button
    >
  </div>

  {#each itinerary as item}
    <ItineraryCarouselItem
      title={item.title}
      time={item.time}
      icon={item.icon}
    />
  {/each}
</Carousel>
