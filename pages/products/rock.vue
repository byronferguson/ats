<template>
<div>
<section class="hero">
  <div class="hero-body rock-bg">
    <div class="container">
      <h1 class="title is-1 has-text-centered hero-title">Rock</h1>
    </div>
  </div>
</section>

<section class="section">
  <article class="container">

    <div class="columns is-centered">
      <div class="column is-mobile is-half-tablet is-one-quarter-desktop">
          
        <div class="card">
          <header class="card-header">
              <p class="card-header-title title">1" Kansas River</p>
          </header>

          <div class="card-image">
            <figure class="image is-4by3">
              <img src="~assets/ks_1in_river_rock.jpg" alt="1in Kansas River Rock">
            </figure>
          </div>

          <div class="card-content">
            <div class="section">
              <p class="containter is-fluid">
                Lorem ipsum
              </p>
            </div>

            <div class="tags has-addons">
              <span class="tag is-medium">1/2 cubic yard</span>
              <span class="tag is-primary is-medium">$60 + tax</span>
            </div>

            <div class="tags has-addons">
              <span class="tag is-medium">1 cubic yard</span>
              <span class="tag is-primary is-medium">$100 + tax</span>
            </div>
          </div>

        </div>
          
      </div>

      <div class="column is-mobile is-half-tablet is-one-quarter-desktop">
        <div class="card">
          <header class="card-header">
              <p class="card-header-title title">1" Missouri River</p>
          </header>

          <div class="card-image">
            <figure class="image is-4by3">
              <img src="~assets/mo_river_rock.jpg" alt="1in Missouri River Rock">
            </figure>
          </div>

          <div class="card-content">
            <div class="section">
              <p class="containter is-fluid">
                Lorem ipsum
              </p>
            </div>

            <div class="tags has-addons">
              <span class="tag is-medium">1/2 cubic yard</span>
              <span class="tag is-primary is-medium">$60 + tax</span>
            </div>

            <div class="tags has-addons">
              <span class="tag is-medium">1 cubic yard</span>
              <span class="tag is-primary is-medium">$100 + tax</span>
            </div>
          </div>

        </div>
      </div>

      <div class="column is-mobile is-half-tablet is-one-quarter-desktop">
        <div class="card">
          <header class="card-header">
              <p class="card-header-title title">2" Missouri River</p>
          </header>

          <div class="card-image">
            <figure class="image is-4by3">
              <img src="~assets/mo_river_rock.jpg" alt="2in Missouri River Rock">
            </figure>
          </div>

          <div class="card-content">
            <div class="section">
              <p class="containter is-fluid">
                Lorem ipsum
              </p>
            </div>

            <div class="tags has-addons">
              <span class="tag is-medium">1/2 cubic yard</span>
              <span class="tag is-primary is-medium">$60 + tax</span>
            </div>

            <div class="tags has-addons">
              <span class="tag is-medium">1 cubic yard</span>
              <span class="tag is-primary is-medium">$100 + tax</span>
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
  })
}
</script>

<style scope>
  .rock-bg {
    background-image: url('~assets/rock.jpg') ;
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
</style>