<script>
  import { onMount } from "svelte";
  import { weddingDate, colors } from "../config/wedding";

  let days = "00";
  let hours = "00";
  let minutes = "00";
  let seconds = "00";

  const targetDate = weddingDate.date.getTime();

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      days = "00";
      hours = "00";
      minutes = "00";
      seconds = "00";
      return;
    }

    const daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);

    days = daysLeft < 10 ? `0${daysLeft}` : daysLeft.toString();
    hours = hoursLeft < 10 ? `0${hoursLeft}` : hoursLeft.toString();
    minutes = minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft.toString();
    seconds = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft.toString();
  };

  onMount(() => {
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  });
</script>

<div id="countdown" class="mt-2">
  <div
    class="flex flex-row px-4 justify-center gap-4 sm:gap-6 font-cormorant text-white"
  >
    <div class="flex flex-col items-center min-w-[4.5rem] py-3 px-4 rounded-sm border border-white/20 backdrop-blur-md bg-white/[0.07]"
      style="box-shadow: 0 4px 30px rgba(0,0,0,0.15);">
      <span class="text-4xl sm:text-5xl font-light tabular-nums" style="text-shadow: 0 2px 10px rgba(0,0,0,0.4);">{days}</span>
      <span class="text-xs tracking-[0.3em] uppercase mt-1 text-white/90">Días</span>
    </div>
    <div class="flex flex-col items-center min-w-[4.5rem] py-3 px-4 rounded-sm border border-white/20 backdrop-blur-md bg-white/[0.07]"
      style="box-shadow: 0 4px 30px rgba(0,0,0,0.15);">
      <span class="text-4xl sm:text-5xl font-light tabular-nums" style="text-shadow: 0 2px 10px rgba(0,0,0,0.4);">{hours}</span>
      <span class="text-xs tracking-[0.3em] uppercase mt-1 text-white/90">Hrs</span>
    </div>
    <div class="flex flex-col items-center min-w-[4.5rem] py-3 px-4 rounded-sm border border-white/20 backdrop-blur-md bg-white/[0.07]"
      style="box-shadow: 0 4px 30px rgba(0,0,0,0.15);">
      <span class="text-4xl sm:text-5xl font-light tabular-nums" style="text-shadow: 0 2px 10px rgba(0,0,0,0.4);">{minutes}</span>
      <span class="text-xs tracking-[0.3em] uppercase mt-1 text-white/90">Min</span>
    </div>
    <div class="flex flex-col items-center min-w-[4.5rem] py-3 px-4 rounded-sm border border-white/20 backdrop-blur-md bg-white/[0.07]"
      style="box-shadow: 0 4px 30px rgba(0,0,0,0.15);">
      <span class="text-4xl sm:text-5xl font-light tabular-nums" style="text-shadow: 0 2px 10px rgba(0,0,0,0.4);">{seconds}</span>
      <span class="text-xs tracking-[0.3em] uppercase mt-1 text-white/90">Seg</span>
    </div>
  </div>
</div>
