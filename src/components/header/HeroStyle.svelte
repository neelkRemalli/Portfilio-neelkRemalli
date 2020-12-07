<script>
let  LogoName = 'images/logoName.svg'
import {fly} from 'svelte/transition';
import { quintOut } from 'svelte/easing';

let transTapItem; 

</script>

<svelte:window  bind:scrollY={transTapItem} />

{#if transTapItem >= 50}
<div class='backClass my-20 w-full h-44 relative' >
   <img class='absolute top-0 -mt-10 ml-10' src={LogoName} alt="logo style" in:fly={{ duration: 2000, x: 500, opacity: 0.5, easing: quintOut}}>
  
</div>
{/if}
<style>
    .backClass{
background: linear-gradient(to right, #0575e6, #021b79);
    }
</style>