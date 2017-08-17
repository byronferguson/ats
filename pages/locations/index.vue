<template>
<div>
<section class="hero">
  <div class="hero-body">
    <div class="container">
      <h1 class="title is-1 has-text-centered hero-title">2 Locations</h1>
      <h2 class="subtitle is-3 has-text-centered hero-title">Olathe, KS & Belton, MO</h2>
    </div>
  </div>
</section>

<section class="section">
  <article class="container">

    <div class="columns is-centered">
      <div class="column is-mobile is-half-tablet">
          
        <div class="card">
          <header class="card-header">
              <p class="card-header-title title">Olathe, KS</p>
          </header>

          <div class="card-image">
            <figure class="image is-4by3">
              <a :href="googleOlathe" target="_blank">
                <img src="~assets/olathe.gif" alt="Olathe, KS">
              </a>
            </figure>
          </div>

          <div class="card-content">
            <div class="section">
              <p class="containter is-fluid">
                175th and Hedge Lane which is approximately 1 1/2 miles East of Gardner and I-35 on 175th and on the South side
              </p>
            </div>
          
            <h1 class="title is-4 is-pulled-right">913-780-4848</h1>
            <a :href="googleOlathe" target="_blank">
              <address>
                17589 S Hedge Ln<br />
                Gardner, KS 66030
              </address>
            </a>
          </div>

          <div class="card-footer">
          </div>
        </div>
          
      </div>

      <div class="column is-mobile is-half-tablet">
        <div class="card">
          <header class="card-header">
              <p class="card-header-title title">Belton, MO</p>
          </header>

          <div class="card-image">
            <figure class="image is-4by3">
              <a :href="googleBelton" target="_blank">
                <img src="~assets/belton.jpg" alt="Belton, MO">
              </a>
            </figure>
          </div>

          <div class="card-content">
            <div class="section">
              <p class="containter is-fluid">
                Appoximately 2 1/2 miles South of 150 Highway or 1/2 mile North of 58 Hwy on Prospect. East Side of road
              </p>
            </div>

            <h1 class="title is-4 is-pulled-right">816-331-0005</h1>
            <a :href="googleBelton" target="_blank">
              <address>
                16599 Prospect Ave<br />
                Kansas City, MO 64132
              </address>
            </a>
            
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
    googleOlathe: `https://www.google.com/maps/place/American+Topsoil,+Inc./@38.8099585,-94.8534244,17z/data=!3m1!4b1!4m5!3m4!1s0x87c0bed5cbec3c09:0xffc8d2d812bb5aa6!8m2!3d38.8099543!4d-94.8512357`,
    googleBelton: `https://www.google.com/maps/place/American+Topsoil/@38.823205,-94.5664308,16.32z/data=!4m5!3m4!1s0x87c0c3182d180b03:0xcf04c30ad3b2b5d4!8m2!3d38.8231012!4d-94.5633126`
  })
}
</script>

<style scope>
</style>