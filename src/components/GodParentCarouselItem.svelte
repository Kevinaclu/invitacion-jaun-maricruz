<script>
  export let title;
  export let names;

  import { colors } from "../config/wedding";
</script>

<div class="w-3/4 text-center mx-auto py-6 sm:py-8">
  <div class="text-4xl mb-2 opacity-40" style="color: {colors.primary}">
    &#10047;
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
