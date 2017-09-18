<template>
  <nav class="navbar">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src="~static/ats_logo.jpg" alt="American Topsoil" width="112" height="28">
    </a>

    <div v-if="false">
    <a class="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma">
      <span class="icon" style="color: #333;">
        <i class="fa fa-github"></i>
      </span>
    </a>

    <a class="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms">
      <span class="icon" style="color: #55acee;">
        <i class="fa fa-twitter"></i>
      </span>
    </a>
    </div>

    <div class="navbar-burger burger" data-target="navMenuExample" @click="toggleMenu" :class="{'is-active': menuOpen}">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div class="navbar-menu" :class="{'is-active': menuOpen}">
    <div class="navbar-start">
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link  is-active" href="/products">
          Products
        </a>
        <div class="navbar-dropdown ">
          <a class="navbar-item" href="/products/soil">
            Soil
          </a>
          <a class="navbar-item" href="/products/rock">
            Rock
          </a>
          <a class="navbar-item" href="/products/mulch">
            Mulch
          </a>
        </div>
      </div>
     
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link  is-active" href="/services">
          Services
        </a>
        <div class="navbar-dropdown">
          <a class="navbar-item" href="/services/delivery">
            Delivery
          </a>
          <a class="navbar-item" href="/services/grading">
            Grading
          </a>          
          <a class="navbar-item" href="/services/spreading">
            Spreading
          </a>
        </div>
      </div>

      <div class="navbar-item has-dropdown is-hoverable">
        <p class="navbar-link">
          Info
        </p>
        <div class="navbar-dropdown">
          <a class="navbar-item" href="/hours">
            <b-icon icon="clock-o" />
            <span>Hours</span>
          </a>
          <a class="navbar-item" href="/locations">
            <b-icon icon="map-pin" />
            Locations
          </a>
          <a class="navbar-item" href="/faq">
            <b-icon icon="question" />
            FAQ
          </a>
          <a class="navbar-item" href="/about_us">
            <b-icon icon="newspaper-o" />
            About Us
          </a>
        </div>
      </div>

    </div>

    <div class="navbar-end">
      <a class="navbar-item" href="/estimate">
        <b-icon icon="calculator" />
        Estimate
      </a>

      <a class="navbar-item" href="/contacts_us">
        <b-icon icon="phone" />
        Contact Us
      </a>
    </div>
    
  </div>
</nav>
</template>

<script>
export default {
  data: () => ({
    menuOpen: false
  }),
  methods: {
    toggleMenu () {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>

<style scoped>
</style>