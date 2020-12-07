


 <script>
 import {isActive, url} from '@roxi/routify';

 const links = [
     ['./index', 'Home'],
     ['./webflow', 'Webflow'],
     ['./svelte', 'Svelte']
 ]
 let Logo = 'images/logo.svg'
  let fixedNav;

</script>

<svelte:window bind:scrollY={fixedNav}/>

<div class='bg-white  px-4 sm:px-10 mx-auto p-6   classTrans' class:fixed={fixedNav >= 100}>
    <div class='flex justify-between items-center  mx-auto max-w-6xl'>
    <a href='.'>
        <img src={Logo} alt="logo nav" class='sm:w-24 w-20 h-auto' >
        
    </a>
   
   <nav>
    {#each links as [path, name]}
    <a href={$url(path)} class:active={$isActive(path)} class='sm:ml-6 ml-3 sm:text-lg text-md text-gray-700 hover:opacity-50 font-bold' >{name}</a>
    {/each}
   </nav>
</div>
</div>

<style>
    .active{
        color:  #B45309;  

    }
    .classTrans{
        transition: all .3s ease-in-out;
    }
    .fixed{
        width: 100%;
        top: 0;
        padding-top: 30px  !important;
        padding-bottom: 30px  !important;
        opacity: .9;
        z-index: 10;
        --tw-bg-opacity: 1;
       background-color: rgba(219, 234, 254, var(--tw-bg-opacity));
        box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    }

</style> 