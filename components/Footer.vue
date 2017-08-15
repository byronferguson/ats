<template>
  <footer class="footer">

    <nav class="level">
      <div class="level-left">
        Copyright © {{ currentYear }} American Topsoil
      </div>

      <div class="level-item">
        1-800-TOP-SOIL (1-800-867-7645)
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