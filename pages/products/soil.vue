<template>
<div>
<section class="hero">
  <div class="hero-body soil-bg">
    <div class="container">
      <h1 class="title is-1 has-text-centered hero-title">Soil</h1>
    </div>
  </div>
</section>

<section class="section">
  <article class="container">

    <div class="columns">
      <div class="column is-mobile is-half-tablet is-one-quarter-desktop">
          
        <div class="card">
          <header class="card-header">
              <p class="card-header-title title">Regular</p>
          </header>

          <div class="card-image">
            <figure class="image is-4by3">
              <img src="~assets/regular_topsoil.jpg" alt="Regular Topsoil">
            </figure>
          </div>

          <div class="card-content">
            <div class="section">
              <p class="containter is-fluid">
                Removed from the top 8 inches of Rich Farmland.
              </p>
            </div>

            <div class="tags has-addons">
              <span class="tag is-medium">1/2 cubic yard</span>
              <span class="tag is-primary is-medium">$15 + tax</span>
            </div>

            <div class="tags has-addons">
              <span class="tag is-medium">1 cubic yard</span>
              <span class="tag is-primary is-medium">$27 + tax</span>
            </div>
          </div>

        </div>
          
      </div>

      <div class="column is-mobile is-half-tablet is-one-quarter-desktop">
        <div class="card">
          <header class="card-header">
              <p class="card-header-title title">Pulvarized</p>
          </header>

          <div class="card-image">
            <figure class="image is-4by3">
              <img src="~assets/pulvarized_topsoil.jpg" alt="Pulvarized Topsoil">
            </figure>
          </div>

          <div class="card-content">
            <div class="section">
              <p class="containter is-fluid">
                Same soil as Regular topsoil except that it has been ground and screened.  Pulverized Topsoil is ideal if you are working the soil by hand (shoveling, raking, ect...).
              </p>
            </div>

            <div class="tags has-addons">
              <span class="tag is-medium">1/2 cubic yard</span>
              <span class="tag is-primary is-medium">$20 + tax</span>
            </div>

            <div class="tags has-addons">
              <span class="tag is-medium">1 cubic yard</span>
              <span class="tag is-primary is-medium">$33 + tax</span>
            </div>
          </div>

        </div>
      </div>

      <div class="column is-mobile is-half-tablet is-one-quarter-desktop">
        <div class="card">
          <header class="card-header">
              <p class="card-header-title title">Organic</p>
          </header>

          <div class="card-image">
            <figure class="image is-4by3">
              <img src="~assets/organic_topsoil.jpg" alt="Organic Topsoil">
            </figure>
          </div>
          
          <div class="card-content">
            <div class="section">
              <p class="containter is-fluid">
              Made of 70% Pulverized Topsoil and 30% Compost. We recommend Organic Topsoil for gardens and flower beds.
              </p>
            </div>

            <div class="tags has-addons">
              <span class="tag is-medium">1/2 cubic yard</span>
              <span class="tag is-primary is-medium">$25 + tax</span>
            </div>

            <div class="tags has-addons">
              <span class="tag is-medium">1 cubic yard</span>
              <span class="tag is-primary is-medium">$45 + tax</span>
            </div>
          </div>

        </div>
      </div>

      <div class="column is-mobile is-half-tablet is-one-quarter-desktop">
        <div class="card">
          <header class="card-header">
              <p class="card-header-title title">Compost</p>
          </header>

          <div class="card-image">
            <figure class="image is-4by3">
              <img src="~assets/compost.jpg" alt="Mulch Topsoil">
            </figure>
          </div>
          
          <div class="card-content">
            <div class="section">
              <p class="containter is-fluid">
                Our compost is made of recycled yard waste and composted horse manure.
              </p>
            </div>

            <div class="tags has-addons">
              <span class="tag is-medium">1/2 cubic yard</span>
              <span class="tag is-primary is-medium">$25 + tax</span>
            </div>

            <div class="tags has-addons">
              <span class="tag is-medium">1 cubic yard</span>
              <span class="tag is-primary is-medium">$45 + tax</span>
            </div>

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
    products: {
      regular: {
        image: 'regular_topsoil.jpg',
        description: 'Removed from the top 8 inches of Rich Farmland.',
        note: 'For use with power equipment',
        prices: [
          {
            unit: '1/2 cubic yard',
            price: 15,
            withTax: false
          },
          {
            unit: '1 cubic yard',
            price: 27,
            withTax: false
          }
        ]
      },
      pulvarized: {
        image: 'pulvarized_topsoil.jpg',
        description: 'Same soil as Regular topsoil except that it has been ground and screened.  Pulverized Topsoil is ideal if you are working the soil by hand',
        note: 'shoveling, raking, etc...',
        prices: [
          {
            unit: '1/2 cubic yard',
            price: 20,
            withTax: false
          },
          {
            unit: '1 cubic yard',
            price: 30,
            withTax: false
          }
        ]
      },
      organic: {
        image: 'organic_topsoil.jpg',
        description: 'Made of 70% Pulverized Topsoil and 30% Compost. We recommend Organic Topsoil for gardens and flower beds.',
        note: '',
        prices: [
          {
            unit: '1/2 cubic yard',
            price: 25,
            withTax: false
          },
          {
            unit: '1 cubic yard',
            price: 45,
            withTax: false
          }
        ]
      },
      compost: {
        image: 'compost.jpg',
        description: 'Our compost is made of recycled yard waste and composted horse manure.',
        note: '',
        prices: [
          {
            unit: '1/2 cubic yard',
            price: 25,
            withTax: false
          },
          {
            unit: '1 cubic yard',
            price: 45,
            withTax: false
          }
        ]
      }
    }
  })
}
</script>

<style scope>
  .soil-bg {
    background-image: url('~assets/soil.jpg') ;
    background-position: center center;
    background-repeat:  no-repeat;
    background-attachment: fixed;
    background-size:  cover;
    background-color: #999;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1.hero-title {
    color: white;
  }

  .card {
    min-height: 75vh;
  }
</style>