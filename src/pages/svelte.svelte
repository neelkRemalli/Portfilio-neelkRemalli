<script>
    import {fade,fly, blur} from 'svelte/transition'
    import { quintOut } from 'svelte/easing';
    import LineStyle from '../components/LineStyle.svelte'
    let showAnimate;
   </script>
   
   <svelte:window  bind:scrollY={showAnimate} />
   
   <div class='my-20  lg:max-w-6xl px-4 xl:px-0 sm:px-10 mx-auto'>
   
   <div class='grid md:grid-cols-2 gap-12'>

 {#if showAnimate >= 0}
   <div class='sm:mt-12' in:fly="{{delay: 300, duration: 3000, x: -300, easing: quintOut}}">
       <h2 class='md:text-5xl text-3xl text-gray-700 font-bold '>discovery</h2>
       <LineStyle />
       <p class='mt-8 mb-12 sm:w-4/5 w-full '>
        This is a homepage design and build for a concept project discoery trip,
         I designed the page first then built a responsive web page using svelte and tailwindcss 
        </p>
            <a href="https://svelte-tailwincss-tour.netlify.app/" target="_blank" class='ransition-colors  duration-500 inline-block mt-12 px-8 py-4 text-sm font-serif text-white rounded  uppercase  bg-yellow-700 hover:bg-yellow-800'>See Demo</a>
   </div>
{/if}

   <div class='w-full h-full'>
       <img class='h-auto object-cover' src="images/discovery.png" alt="discovery " in:blur="{{delay: 500, duration: 3000, amount: 22, easing: quintOut}}">
   </div>
   </div>
  
   <div class='grid md:grid-cols-2  gap-12 mt-32'>
     {#if showAnimate >= 230}
       <div class='w-full h-full '>
           <img class='h-auto object-cover ' src="images/movies1.png" alt="movies " in:blur="{{delay: 500, duration: 3000, amount: 22, easing: quintOut}}">
       </div>
     {/if}
       {#if showAnimate >= 230}
       <div class='sm:mt-12' in:fly="{{delay: 300, duration: 3000, x: 300, easing: quintOut}}">
           <h2 class='md:text-5xl text-3xl text-gray-700 font-bold '>Movies</h2>
           <LineStyle />
           <p class='mt-8 mb-12 sm:w-4/5 w-full '>
            This is external api website design and build for a concept projecta moives app.
             I designed the page first then built a responsive web page using svelte and tailwindcss.  </p>
                <a href="https://svelte-appmovie.netlify.app" target="_blank" class='ransition-colors  duration-500 inline-block mt-12 px-8 py-4 text-sm font-serif text-white rounded  uppercase  bg-yellow-700 hover:bg-yellow-800'>See Demo</a>
       </div>
   {/if}
       </div>

         
   <div class='grid md:grid-cols-2 mt-32  gap-12 p-6 px-4 sm:px-10 mx-auto'>
   
    {#if showAnimate >= 650}
    <div class='sm:mt-12' in:fly="{{delay: 700, duration: 3000, x: -300, easing: quintOut}}">
        <h2 class='md:text-5xl text-3xl text-gray-700 font-bold '>calculator</h2>
        <LineStyle />
        <p class='mt-8 mb-12 sm:w-4/5 w-full '>
            This is a homepage design and build for a concept project calcualte expenses ,
             I designed the page first then built a responsive web page using svelte and tailwindcss
         </p>
             <a href="https://svelte-tailwind-expenses.netlify.app" target="_blank" class='ransition-colors  duration-500 inline-block mt-12 px-8 py-4 text-sm font-serif text-white rounded  uppercase  bg-yellow-700 hover:bg-yellow-800'>See Demo</a>
    </div>
 {/if}
   {#if showAnimate >= 650}
    <div class='w-full h-full'>
        <img class='h-auto object-cover' src="images/calculator.png" alt="calcualator" in:blur="{{delay: 500, duration: 3000, amount: 22, easing: quintOut}}">
    </div>
    {/if}
    </div>
   </div>
   




















