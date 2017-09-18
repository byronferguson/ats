<template>
<div>
<section class="hero">
  <div class="hero-body rock-bg">
    <div class="container">
      <h1 class="title is-1 has-text-centered hero-title">Delivery</h1>
    </div>
  </div>
</section>

<section class="section">
  <article class="container">

    <div class="columns is-centered">
      <div class="column is-mobile is-half-tablet">
          
        <div class="card">
          <header class="card-header">
              <p class="card-header-title title">Standard</p>
          </header>

          <div class="card-image">
            <figure class="image is-4by3">
              <img src="~assets/delivery.jpg" alt="Standard Delivery">
            </figure>
          </div>

          <div class="card-content">
            <div class="section">
              <p class="containter is-fluid">
                Our Standard Delivery is made with a normal dump truck that can deliver the soil onto the yard, driveway or street. Standard Delivery pricing varies according to where the delivery is made.  Give us a call for exact pricing.
              </p>
            </div>

            <div class="tags has-addons">
              <span class="tag is-medium">1 cubic yard</span>
              <span class="tag is-primary is-medium">Call for Pricing</span>
            </div>
          </div>
        </div>
          
      </div>

      <div class="column is-mobile is-half-tablet">
        <div class="card">
          <header class="card-header">
              <p class="card-header-title title">Smart</p>
          </header>

          <div class="card-image">
            <figure class="image is-4by3">
              <img src="~assets/smartdelivery.jpg" alt="Smart Delivery">
            </figure>
          </div>

          <div class="card-content">
            <div class="section">
              <p class="container is-fluid">
                <p class="is-bold has-padding">NO SHOVELING OR WHEEL BARROWING NEEDED!!</p>
                
                <p class="has-padding">Did you know that 1 cubic yard of topsoil weighs about 1 ton?  Moving a dump truck load of soil by hand can easily be a day's work.  A Smart Delivery lets you save your time and energy for more important things other than moving topsoil.</p>

                <p class="has-padding">Our Smart Delivery buggy can place the topsoil in your yard where you need it.  The topsoil is off-loaded directly from delivery truck to the topsoil buggy which can easily move the topsoil to most places in your yard.  No need for shoveling or pushing a wheel barrow. Our topsoil buggy runs on rubber tracks and can haul 1/2 cubic yard per trip without causing major damage to the turf.  The topsoil buggy can fit through a <span class="is-bold">36 inch</span> gate opening.</p>

                <p class="is-italic">Don't worry about ordering the wrong amount.  The topsoil is off-loaded directly into the buggy that hauls 1/2 a cubic yard per trip.  <span class="is-bold">You pay only for the amount of topsoil that is off-loaded.</span></p>
              </p>
            </div>

            <div class="tags has-addons">
              <span class="tag is-medium">1 cubic yard</span>
              <span class="tag is-primary is-medium">$33 + tax</span>
            </div>
            <p class="is-italic">* Standard Delivery not included</p>
          </div>

        </div>
      </div>

    </div>

  </article>
</section>

</div>
</template>

<script>

export default {
  data: () => ({
  })
}
</script>

<style scope>
  .has-padding {
    margin-bottom: 1.5em;
  }

  .is-bold {
    font-weight: bold;
  }

  .is-italic {
    font-style: italic;
  }
</style>