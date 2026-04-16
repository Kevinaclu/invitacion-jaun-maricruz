<script>
  import { onMount } from "svelte";
  import PhotoSwipeLightbox from "photoswipe/lightbox";
  import "photoswipe/style.css";
  import { colors } from "../config/wedding";

  const images = [
    { src: "/gallery/1.webp", thumb: "/gallery/1_thumb.webp", w: 1200, h: 1714 },
    { src: "/gallery/2.webp", thumb: "/gallery/2_thumb.webp", w: 1200, h: 1800 },
    { src: "/gallery/3.webp", thumb: "/gallery/3_thumb.webp", w: 1200, h: 1608 },
    { src: "/gallery/4.webp", thumb: "/gallery/4_thumb.webp", w: 1200, h: 1800 },
    { src: "/gallery/10.webp", thumb: "/gallery/10_thumb.webp", w: 1200, h: 1766 },
    { src: "/gallery/6.webp", thumb: "/gallery/6_thumb.webp", w: 1200, h: 1800 },
    { src: "/gallery/7.webp", thumb: "/gallery/7_thumb.webp", w: 1200, h: 1800 },
    { src: "/gallery/8.webp", thumb: "/gallery/8_thumb.webp", w: 1200, h: 1800 },
    { src: "/gallery/5.webp", thumb: "/gallery/5_thumb.webp", w: 1200, h: 1557 },
    { src: "/gallery/9.webp", thumb: "/gallery/9_thumb.webp", w: 1200, h: 1675 },
    { src: "/gallery/11.webp", thumb: "/gallery/11_thumb.webp", w: 1200, h: 1581 },
    { src: "/gallery/12.webp", thumb: "/gallery/12_thumb.webp", w: 1200, h: 1570 },
    { src: "/gallery/13.webp", thumb: "/gallery/13_thumb.webp", w: 1200, h: 2775 },
    { src: "/gallery/14.webp", thumb: "/gallery/14_thumb.webp", w: 1200, h: 2036 },
    { src: "/gallery/15.webp", thumb: "/gallery/15_thumb.webp", w: 1200, h: 1971 },
    { src: "/gallery/16.webp", thumb: "/gallery/16_thumb.webp", w: 1200, h: 840 },
    { src: "/gallery/17.webp", thumb: "/gallery/17_thumb.webp", w: 1200, h: 1931 },
    { src: "/gallery/18.webp", thumb: "/gallery/18_thumb.webp", w: 1200, h: 2475 },
    { src: "/gallery/19.webp", thumb: "/gallery/19_thumb.webp", w: 1200, h: 900 },
    { src: "/gallery/20.webp", thumb: "/gallery/20_thumb.webp", w: 1200, h: 2134 },
    { src: "/gallery/21.webp", thumb: "/gallery/21_thumb.webp", w: 1200, h: 1600 },
    { src: "/gallery/22.webp", thumb: "/gallery/22_thumb.webp", w: 1200, h: 675 },
    { src: "/gallery/23.webp", thumb: "/gallery/23_thumb.webp", w: 1200, h: 1599 },
    { src: "/gallery/24.webp", thumb: "/gallery/24_thumb.webp", w: 1200, h: 1600 },
    { src: "/gallery/25.webp", thumb: "/gallery/25_thumb.webp", w: 1200, h: 1600 },
    { src: "/gallery/26.webp", thumb: "/gallery/26_thumb.webp", w: 1200, h: 900 },
    { src: "/gallery/27.webp", thumb: "/gallery/27_thumb.webp", w: 1200, h: 1600 },
    { src: "/gallery/28.webp", thumb: "/gallery/28_thumb.webp", w: 1200, h: 900 },
    { src: "/gallery/29.webp", thumb: "/gallery/29_thumb.webp", w: 1200, h: 1599 },
    { src: "/gallery/30.webp", thumb: "/gallery/30_thumb.webp", w: 1200, h: 1605 },
    { src: "/gallery/31.webp", thumb: "/gallery/31_thumb.webp", w: 1200, h: 1604 },
    { src: "/gallery/32.webp", thumb: "/gallery/32_thumb.webp", w: 1200, h: 1599 },
    { src: "/gallery/33.webp", thumb: "/gallery/33_thumb.webp", w: 1200, h: 1605 },
    { src: "/gallery/34.webp", thumb: "/gallery/34_thumb.webp", w: 1200, h: 1605 },
    { src: "/gallery/35.webp", thumb: "/gallery/35_thumb.webp", w: 1200, h: 2286 },
    { src: "/gallery/36.webp", thumb: "/gallery/36_thumb.webp", w: 1200, h: 1599 },
  ];

  let showAll = $state(false);
  let loaded = $state(new Set());

  const INITIAL_COUNT = 8;
  const visibleImages = $derived(showAll ? images : images.slice(0, INITIAL_COUNT));

  onMount(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
      bgOpacity: 0.92,
    });
    lightbox.init();

    return () => lightbox.destroy();
  });

  function onImageLoad(index) {
    loaded.add(index);
    loaded = new Set(loaded);
  }
</script>

<div class="py-14 px-4 sm:px-6">
  <div class="text-center mb-10">
    <p
      class="font-raleway text-[0.7rem] tracking-[0.35em] uppercase mb-3"
      style="color: {colors.textMuted}"
    >
      Recuerdos
    </p>
    <h3
      class="font-greatVibes text-5xl sm:text-6xl mb-4"
      style="color: {colors.primary}"
    >
      Nuestra Historia
    </h3>
    <div
      class="w-10 h-[1px] mx-auto opacity-40"
      style="background-color: {colors.primaryLight}"
    ></div>
  </div>

  <div id="gallery" class="masonry max-w-5xl mx-auto">
    {#each visibleImages as img, i}
      <a
        href={img.src}
        data-pswp-width={img.w}
        data-pswp-height={img.h}
        target="_blank"
        rel="noreferrer"
        class="masonry-item group"
      >
        <div
          class="overflow-hidden rounded-lg shadow-md"
          style="background-color: {colors.bgOverlay};"
        >
          <img
            src={img.thumb}
            alt="Foto de la pareja"
            loading="lazy"
            width={img.w}
            height={img.h}
            onload={() => onImageLoad(i)}
            class="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
            class:opacity-0={!loaded.has(i)}
            class:opacity-100={loaded.has(i)}
          />
        </div>
      </a>
    {/each}
  </div>

  {#if !showAll && images.length > INITIAL_COUNT}
    <div class="text-center mt-10">
      <button
        onclick={() => (showAll = true)}
        class="font-raleway text-xs tracking-[0.25em] uppercase py-3 px-8 rounded-full border transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
        style="color: {colors.primary}; border-color: {colors.primaryLight};"
      >
        Ver todas las fotos ({images.length - INITIAL_COUNT} mas)
      </button>
    </div>
  {/if}
</div>

<style>
  .masonry {
    columns: 2;
    column-gap: 0.75rem;
  }

  @media (min-width: 640px) {
    .masonry {
      columns: 3;
      column-gap: 1rem;
    }
  }

  .masonry-item {
    display: block;
    break-inside: avoid;
    margin-bottom: 0.75rem;
  }

  @media (min-width: 640px) {
    .masonry-item {
      margin-bottom: 1rem;
    }
  }
</style>
