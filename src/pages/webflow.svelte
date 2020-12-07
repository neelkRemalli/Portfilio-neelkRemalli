



<script>
    import {fade,fly, blur} from 'svelte/transition'
    import { quintOut } from 'svelte/easing';
    import LineStyle from '../components/LineStyle.svelte'
    let showAnimate;
   </script>
   
   <svelte:window  bind:scrollY={showAnimate} />
   <div class='my-20  lg:max-w-6xl px-4 xl:px-0 sm:px-10 mx-auto'>
       <div class='grid md:grid-cols-2'>
 
  <!-- {#if showAnimate >= 0} -->
   <div class='sm:mt-12' in:fly="{{delay: 500, duration: 3000, x: -500, easing: quintOut}}">
       <h2 class='md:text-5xl text-3xl text-gray-700 font-bold '>Chat App</h2>
       <LineStyle />
       <p class='mt-8 mb-12 sm:w-4/5 w-full '>online chat app Full website design and build contain pages. 
           I designed it first then built a responsive web page using 
            a responsive web page using Webflow. </p>
            <a href="https://project-remoteteam.webflow.io/" target="_blank" class='ransition-colors  duration-500 inline-block mt-12 px-8 py-4 text-sm font-serif text-white rounded  uppercase  bg-yellow-700 hover:bg-yellow-800'>See Demo</a>
   </div>
   <!-- {/if} -->
  
   
   <div class='w-full h-full' >
       <img class='h-auto object-cover' src="images/chat.png" alt="chat image" in:blur="{{delay: 1000, duration: 3000, amount: 22, easing: quintOut}}">
   </div>
   </div>
   <div class='grid md:grid-cols-2  gap-12 mt-32'>
     {#if showAnimate >= 230}
       <div class='w-full h-full '>
           <img class='h-auto object-cover ' src="images/bios.png" alt="movies image" in:blur="{{delay: 500, duration: 3000, amount: 22, easing: quintOut}}">
       </div>
     {/if}
       {#if showAnimate >= 230}
       <div class='sm:mt-12' in:fly="{{delay: 300, duration: 3000, x: 300, easing: quintOut}}">
           <h2 class='md:text-5xl text-3xl text-gray-700 font-bold '>Bio App</h2>
           <LineStyle />
           <p class='mt-8 mb-12 sm:w-4/5 w-full '>
            bios for real women successful 
             contain pages. I designed it first then built pages using 
              a responsive web page using Webflow.  </p>
                <a href="" target="_blank" class='ransition-colors  duration-500 inline-block mt-12 px-8 py-4 text-sm font-serif text-white rounded  uppercase  bg-yellow-700 hover:bg-yellow-800'>See Demo</a>
       </div>
   {/if}
       </div>
   </div> 
   






















<!-- <script>
 import {fade,fly} from 'svelte/transition'
 import { quintOut } from 'svelte/easing';
 import LineStyle from '../components/LineStyle.svelte'
 let showAnimate;
</script>

<svelte:window  bind:scrollY={showAnimate} />

<div class='my-40'>
 
<div class='grid md:grid-cols-2  gap-12 p-6'>

{#if showAnimate >= 500}
<div class='sm:mt-12' transition:fly="{{delay: 500, duration: 5250, x: -500, easing: quintOut}}">
    <h2 class='text-5xl text-gray-700 font-bold '>Chatting</h2>
    <LineStyle />
    <p class='mt-8 mb-12 sm:w-4/5 w-full '>online chat app Full website design and build contain pages. 
        I designed it first then built a responsive web page using 
         a responsive web page using Webflow. </p>
         <a href="https://project-remoteteam.webflow.io/" target="_blank" class='ransition-colors  duration-500 inline-block mt-12 px-8 py-4 text-sm font-serif text-white rounded  uppercase  bg-yellow-700 hover:bg-yellow-800'>See Demo</a>
</div>
{/if}

<div class='w-full h-full bg-blue-50'>
    <img class='h-auto object-cover' src="images/chat.png" alt="chat image">
</div>
</div>

<div class='grid md:grid-cols-2  gap-12 p-6'>
   
    <div class='w-full h-full bg-yellow-50'>
        <img class='h-auto object-cover' src="images/bios.png" alt="chat image">
    </div>
  
    {#if showAnimate >= 1200}
    <div class='sm:mt-12' transition:fly="{{delay: 500, duration: 5250, x: 500, easing: quintOut}}">
        <h2 class='text-5xl text-gray-700 font-bold '>Chatting</h2>
        <LineStyle />
        <p class='mt-8 mb-12 sm:w-4/5 w-full '>online chat app Full website design and build contain pages. 
            I designed it first then built a responsive web page using 
             a responsive web page using Webflow. </p>
             <a href="https://bios-project-fb3624.webflow.io" target="_blank" class='ransition-colors  duration-500 inline-block mt-12 px-8 py-4 text-sm font-serif text-white rounded  uppercase  bg-yellow-700 hover:bg-yellow-800'>See Demo</a>
    </div>
   {/if}
    </div>
</div> -->
