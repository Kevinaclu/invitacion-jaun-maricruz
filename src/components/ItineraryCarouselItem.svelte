<script>
  export let title;
  export let time;
  export let icon;
</script>

<div class="w-3/4 text-center mx-auto py-4 sm:py-8">
  <lord-icon
    src={icon}
    trigger="loop"
    delay="1500"
    colors="primary:#ffffff,secondary:#d4a843"
    style="width: 120px; height: 120px; filter: drop-shadow(0 2px 8px rgba(0,0,0,0.3));"
  ></lord-icon>
  <div class="mt-4">
    <h1
      class="text-center font-cormorant py-1 text-2xl sm:text-3xl tracking-wider"
      style="text-shadow: 0 1px 4px rgba(0,0,0,0.8);"
    >{title}</h1>
    <p
      class="text-center font-raleway py-1 text-base sm:text-lg text-white/90 tracking-widest"
      style="text-shadow: 0 1px 4px rgba(0,0,0,0.8);"
    >
      {time}
    </p>
  </div>
</div>
