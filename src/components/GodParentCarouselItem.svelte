<script>
  export let title;
  export let names;
  export let icon = "";

  import { colors } from "../config/wedding";
</script>

<div class="w-3/4 text-center mx-auto py-6 sm:py-8">
  <div
    class="gp-icon mx-auto mb-2 opacity-60 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
    style="color: {colors.primary}"
  >
    {#if icon}
      {@html icon}
    {:else}
      <span class="text-4xl">&#10047;</span>
    {/if}
  </div>
  <div class="mt-3">
    <h1
      class="text-center font-cormorant py-1 text-2xl sm:text-3xl tracking-wider"
      style="color: {colors.primary}"
    >
      {title}
    </h1>
    <div class="w-10 h-[1px] mx-auto my-3 opacity-40" style="background-color: {colors.primaryLight}"></div>
    {#each names as name}
      <h2
        class="text-center font-raleway py-1 text-base sm:text-lg font-light tracking-wide"
        style="color: {colors.textDark}"
      >
        {name}
      </h2>
    {/each}
  </div>
</div>

<style>
  .gp-icon :global(svg) {
    width: 100%;
    height: 100%;
  }
</style>
