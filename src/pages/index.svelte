<script>
      import Header from '../components/header/Header.svelte'
    import {fade, fly} from 'svelte/transition';
    import {quintOut} from 'svelte/easing';
    import { metatags } from '@roxi/routify'
    import LineStyle from '../components/LineStyle.svelte'
   
    let transText;
</script>
<svelte:window bind:scrollY={transText} />


<Header />

<div class='my-40 max-w-6xl xl:px-0 sm:px-8 px-16 mx-auto font-serif'>
    {#if transText >= 450}
    <div class='mb-12' in:fade={{delay:500, duration: 2000}}>
        <h2 class='text-5xl text-gray-700 font-bold '>What I do </h2>
        <LineStyle /> 
    </div>
    {/if} 
    <div class='grid grid-cols-1 sm:grid-cols-2 sm:gap-y-40'>
        <div></div>
        {#if transText >= 450}
        <div class='md:p-4' in:fly={{y:200, delay: 500, duration: 2000}}>
            <h3 class='text-3xl font-bold text-gray-700 '>Design</h3>
            <div class='flex flex-col mb-8'>
                <span class='w-16 h-1 rounded-md bg-yellow-700 inline-block'></span>
                <span class='w-12 h-1 rounded-md bg-yellow-700 inline-block opacity-60'></span>
                <span class='w-8 h-1 rounded-md bg-yellow-700 inline-block opacity-40'></span>
            </div>
            <p class='text-lg text-gray-700'>I design beautiful and powerful websites for modern businesses.
                 Any business today needs a website that wins customers’ 
                 trust and helps you do your business well. I make sure
                  your website is up to that standard</p>
        </div>
        {/if}
        <div></div>
        {#if transText >= 850}
        <div class='md:p-4' in:fly={{y:200, delay: 500, duration: 2000, easing: quintOut}}>
            <h3 class='text-3xl font-bold text-gray-700'>Development</h3>
            <div class='flex flex-col mb-8'>
                <span class='w-32 h-1 rounded-md bg-yellow-700 inline-block'></span>
                <span class='w-24  h-1 rounded-md bg-yellow-700 inline-block opacity-60'></span>
                <span class='w-16 h-1 rounded-md bg-yellow-700 inline-block opacity-40'></span>
            </div>
            <p class='text-lg text-gray-700'>
                I build websites in Webflow, svelte with tailwindcss where I can create responsive,
                 powerful and fully custom websites.Svelte is a radical new approach to building user interfaces
                 and Webflow has an incredibly simple Content Editor 
                  to edit website content quickly and easily.</p>
        </div>
        {/if}
    </div>
</div>







