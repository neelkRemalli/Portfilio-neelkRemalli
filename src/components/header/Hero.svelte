<script>
import {onMount} from 'svelte'
import {fly, fade, blur, scale} from 'svelte/transition'
let HeroImage = "images/background.png"

</script>

<div class='grid grid-cols-1 sm:grid-cols-2 md:mt-10 mt-8 max-w-6xl xl:px-0 sm:px-8 px-16 mx-auto  w-full h-full widthMax lg:pb-10 sm:pb-36 pb-20'>


    <div class=' mb-12 sm:mb-0' in:fly={{x:200, duration: 3000}}> 
           
            <h1 class='font-serif lg:text-4xl font-bold md:w-96 text-2xl sm:w-full w-2/3  leading-none text-gray-700 uppercase' >Hi, I’m <span class='text-yellow-700 italic font-bold tracking-tighter'>neelkRemalli</span>, Web Designer and Developer</h1>
                <div class='flex flex-col'>
                    <span class='w-16 h-1 rounded-md bg-yellow-700 inline-block'></span>
                    <span class='w-12 h-1 rounded-md bg-yellow-700 inline-block opacity-60'></span>
                    <span class='w-8 h-1 rounded-md bg-yellow-700 inline-block opacity-40'></span>
                </div>
            <p class='font-sans lg:text-lg sm:w-full capitalize  w-11/12 text-sm  mt-4'>
                I design and build beautiful websites for businesses 
                around the globe. If you need a modern and powerful website,
                 send me an email. If we are a good fit, I will give you a time and cost estimate.</p>  
                

           <a href="https://github.com/neelkRemalli" target="_blank"  class=' transition-colors  duration-500 inline-block mt-12 px-8 py-4 text-sm font-serif text-white rounded  uppercase  bg-yellow-700 hover:bg-yellow-800'>see my repo</a>  
      </div>
 
    
    <!---->
  
    <div class='w-full h-full' in:scale={{duration: 3000, delay: 1000}}>
        <img class='w-full h-auto object-cover' src={HeroImage} alt="unable to see this content">
    </div>

</div>

<style>
    widthMax{
        max-width: 10px;
        margin: 0 auto;
    }
</style>