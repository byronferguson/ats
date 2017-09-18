<template>
  <footer class="footer">

    <nav class="level">
      <div class="level-left">
        <p>
          American Topsoil<br />
          Copyright © {{ currentYear }}
        </p>
      </div>

      <div class="level-item">
        <p class="has-text-centered">
          <a href="tel:18008677645">1-800-TOP-SOIL (1-800-867-7645)</a><br />
          <span class="icon"><i class="fa fa-envelope-o"></i></span>
          <a href="mailto:americantopsoil@embarqmail.com">Email Us - americantopsoil@embarqmail.com</a>
        </p>
      </div>

      <div class="level-right">
        <img src="~assets/card_acceptance.jpg">
      </div>
    </nav>
    <div class="container">
      <p class="has-text-centered">
        
      </p>
    </div>

    
  </footer>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
  .footer {
    padding-top: 36px;
    padding-bottom: 24px;
  }
</style>