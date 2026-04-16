<script>
  import Scroller from "@sveltejs/svelte-scroller";
  import { giftInfo, colors } from "../config/wedding";

  let index, offset, progress;
  let copied = false;

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text.replace(/\s/g, ""));
    copied = true;
    setTimeout(() => (copied = false), 2000);
  }
</script>

<Scroller top={0} bottom={0.5} bind:index bind:offset bind:progress>
  <div slot="background">
    <div
      class="bg-cover bg-center h-screen backdrop-filter backdrop-brightness-[50%] relative w-full z-40"
      style="background-image: url('img/IMG_1715.webp'); background-color: #3a3025;"
    ></div>
  </div>

  <div
    slot="foreground"
    class="w-full flex items-center flex-col backdrop-filter backdrop-brightness-[70%]"
  >
    <div class="w-11/12 py-12 mx-auto">
      <div
        class="sm:w-1/2 mx-auto py-10 px-8 relative w-full z-40 rounded-sm border"
        style="background-color: rgba(253, 248, 239, 0.95); border-color: {colors.primaryLight}; box-shadow: 0 8px 50px rgba(0,0,0,0.2);"
      >
        <div class="grid grid-cols-1 w-full mx-auto content-center">
          <h1
            class="text-center font-greatVibes py-2 text-4xl sm:text-5xl"
            style="color: {colors.primary}"
          >
            {giftInfo.title}
          </h1>

          <div class="w-10 h-[1px] mx-auto my-4 opacity-40" style="background-color: {colors.primaryLight}"></div>

          <p class="text-center font-cormorant text-lg sm:text-xl leading-relaxed px-4" style="color: {colors.textDark}">
            {giftInfo.message}
          </p>

          {#if giftInfo.showTransfer}
            <div class="mt-8 border-t pt-8" style="border-color: {colors.primaryLight}40">
              <p class="text-center font-raleway text-xs tracking-[0.3em] uppercase mb-5" style="color: {colors.textMuted}">
                Transferencia Electronica
              </p>

              <div class="space-y-3 text-center font-raleway text-sm sm:text-base" style="color: {colors.textDark}">
                <p><span class="text-xs tracking-[0.2em] uppercase" style="color: {colors.textMuted}">Banco</span><br/>{giftInfo.bankName}</p>
                <p><span class="text-xs tracking-[0.2em] uppercase" style="color: {colors.textMuted}">Titular</span><br/>{giftInfo.accountHolder}</p>
                <p><span class="text-xs tracking-[0.2em] uppercase" style="color: {colors.textMuted}">CLABE</span><br/><span class="tracking-wider">{giftInfo.clabe}</span></p>
                <p><span class="text-xs tracking-[0.2em] uppercase" style="color: {colors.textMuted}">Tarjeta</span><br/><span class="tracking-wider">{giftInfo.cardNumber}</span></p>
              </div>

              <div class="flex justify-center mt-6">
                <button
                  onclick={() => copyToClipboard(giftInfo.clabe)}
                  class="font-raleway text-white py-2.5 px-7 rounded-full text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                  style="background-color: {colors.primary}"
                >
                  {copied ? "Copiado!" : "Copiar CLABE"}
                </button>
              </div>
            </div>
          {/if}

          <div class="mt-8 border-t pt-8" style="border-color: {colors.primaryLight}40">
            <div class="text-center">
              <p class="font-raleway text-xs tracking-[0.3em] uppercase mb-4" style="color: {colors.textMuted}">
                O bien
              </p>
              <h2 class="text-center font-cormorant text-2xl sm:text-3xl mb-3 tracking-wider" style="color: {colors.primary}">
                Lluvia de Sobres
              </h2>
              <div class="text-5xl my-3 opacity-60" style="color: {colors.primary}">&#9993;</div>
              <p class="font-cormorant text-base sm:text-lg px-4 italic leading-relaxed" style="color: {colors.textMuted}">
                "La lluvia de sobres es la tradicion de regalar dinero en efectivo a los novios en un sobre el dia del evento"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</Scroller>
