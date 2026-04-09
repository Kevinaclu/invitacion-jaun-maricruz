<script>
  import { onMount } from "svelte";
  import PhotoSwipeLightbox from "photoswipe/lightbox";
  import "photoswipe/style.css";
  import { colors } from "../config/wedding";

  // Agrega aqui las fotos de la galeria cuando esten listas
  const images = [
    // {
    //   src: "/gallery/1.jpeg",
    //   thumbnailURL: "/gallery/1.jpeg",
    //   width: 1920,
    //   height: 2560,
    // },
  ];

  let lightbox;

  onMount(() => {
    if (images.length === 0) return;

    lightbox = new PhotoSwipeLightbox({
      gallery: "#gallery",
      children: "a",
      dataSource: images,
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();
  });

  function handleOnClick() {
    if (lightbox) lightbox.loadAndOpen(0);
  }
</script>

{#if images.length > 0}
  <div class="py-12">
    <p class="font-raleway text-[0.7rem] tracking-[0.35em] uppercase text-center mb-3" style="color: {colors.textMuted}">
      Recuerdos
    </p>
    <h3 class="font-greatVibes text-5xl sm:text-6xl text-center mb-6" style="color: {colors.primary}">
      Nuestra Historia
    </h3>
    <div class="w-10 h-[1px] mx-auto mb-8 opacity-40" style="background-color: {colors.primaryLight}"></div>
    <button
      id="play-button"
      class="flex justify-center w-full"
      onclick={handleOnClick}
      aria-label="Ver galeria"
    >
      <lord-icon
        src="https://cdn.lordicon.com/rszslpey.json"
        trigger="loop"
        delay="2000"
        stroke="bold"
        colors="primary:{colors.primary},secondary:{colors.primaryLight}"
        style="width:160px;height:160px"
      >
      </lord-icon>
    </button>
    <button
      class="text-center pb-8 w-full font-raleway text-xs tracking-[0.2em] uppercase"
      tabindex="0"
      onclick={handleOnClick}
      onkeydown={(e) => e.key === "Enter" && handleOnClick()}
      style="color: {colors.textMuted}"
    >
      Ver galeria
    </button>
  </div>
{:else}
  <div class="py-14 text-center">
    <p class="font-raleway text-[0.7rem] tracking-[0.35em] uppercase mb-3" style="color: {colors.textMuted}">
      Recuerdos
    </p>
    <h3 class="font-greatVibes text-5xl sm:text-6xl mb-4" style="color: {colors.primary}">
      Nuestra Historia
    </h3>
    <div class="w-10 h-[1px] mx-auto mb-6 opacity-40" style="background-color: {colors.primaryLight}"></div>
    <p class="font-cormorant text-lg italic" style="color: {colors.textMuted}">
      Proximamente...
    </p>
  </div>
{/if}
