<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
  import './tailwind.css';
</script>

<Router {routes} />



<style  global>
  body{
    padding: 0;
    margin: 0 auto;
    box-sizing: border-box;
    /* height: 2000px; */
  }
</style>



<!-- max-w-6xl xl:px-0 sm:px-8 px-16 mx-auto -->