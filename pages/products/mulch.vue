<template>
<div>
<section class="hero">
  <div class="hero-body mulch-bg">
    <div class="container">
      <h1 class="title is-1 has-text-centered hero-title">Mulch</h1>
    </div>
  </div>
</section>

<section class="section">
  <article class="container">

    <div class="columns">
      <div class="column is-mobile is-half-tablet is-one-quarter-desktop">
          
        <div class="card">
          <header class="card-header">
              <p class="card-header-title title">Colored</p>
          </header>

          <div class="card-image">
            <figure class="image is-4by3">
              <img src="~assets/colored_mulch.png" alt="Colored Mulch">
            </figure>
          </div>

          <div class="card-content">
            <div class="section">
              <p class="containter is-fluid">
                We carry a variety of colored mulches at our Kansas City location which include:  Red, Chocolate and Black.
                Our colored mulch is made of native hardwoods and is colored using a 100% safe, water based dye.
              </p>
            </div>

            <div class="tags has-addons">
              <span class="tag is-medium">1/2 cubic yard</span>
              <span class="tag is-primary is-medium">$28 + tax</span>
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
              <p class="card-header-title title">Cedar</p>
          </header>

          <div class="card-image">
            <figure class="image is-4by3">
              <img src="~assets/cedar_mulch.jpg" alt="Cedar Mulch">
            </figure>
          </div>

          <div class="card-content">
            <div class="section">
              <p class="containter is-fluid">
                Our Cedar Mulch comes from the forests of Missouri.  This mulch is light yellow in color and naturally bug resistant.
              </p>
            </div>

            <div class="tags has-addons">
              <span class="tag is-medium">1/2 cubic yard</span>
              <span class="tag is-primary is-medium">$28 + tax</span>
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
              <p class="card-header-title title">Playground</p>
          </header>

          <div class="card-image">
            <figure class="image is-4by3">
              <img src="~assets/playground_mulch.jpg" alt="Playground Mulch">
            </figure>
          </div>

          <div class="card-content">
            <div class="section">
              <p class="containter is-fluid">
                This mulch comes certified for use on all playgrounds and is amazingly "soft".
              </p>
            </div>

            <div class="tags has-addons">
              <span class="tag is-medium">1/2 cubic yard</span>
              <span class="tag is-primary is-medium">$28 + tax</span>
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
              <p class="card-header-title title">Hardwood</p>
          </header>

          <div class="card-image">
            <figure class="image is-4by3">
              <img src="~assets/hardwood_mulch.jpg" alt="Hardwood Mulch">
            </figure>
          </div>
          
          <div class="card-content">
            <div class="section">
              <p class="containter is-fluid">
                Our Hardwood Mulch is double ground and is made from native hardwood trees.
              </p>
            </div>

            <div class="tags has-addons">
              <span class="tag is-medium">1/2 cubic yard</span>
              <span class="tag is-primary is-medium">$20 + tax</span>
            </div>

            <div class="tags has-addons">
              <span class="tag is-medium">1 cubic yard</span>
              <span class="tag is-primary is-medium">$35 + tax</span>
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
  .mulch-bg {
    background-image: url('~assets/mulch.jpg') ;
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