<template>

  <div id="app" class="site">
    <app-navbar></app-navbar>
    
    <article class="site-content">
      <nuxt/>
    </article>

    <app-footer></app-footer>
  
  </div>

</template>

<script>
import Navbar from '~/components/Navbar'
import Footer from '~/components/Footer'
export default {
  data: () => ({}),
  components: {
    AppNavbar: Navbar,
    AppFooter: Footer
  }
}
</script>

<style>
  .site {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  .site-content {
    flex: 1;
  }
  
  .content {
    padding-top: 52px;
  }

</style>