<template>
<section> 
  <div class="columns is-gapless">
    <div class="column is-mobile is-one-third-tablet soil-bg">
     <a href="/products/soil">
      <h1 class="title is-1 has-text-centered">Soil</h1>
     </a>
    </div>

    <div class="column is-mobile is-one-third-tablet rock-bg">
      <a href="/products/rock">
        <h1 class="title is-1 has-text-centered">Rock</h1>
      </a>
    </div>

    <div class="column is-mobile is-one-third-tablet mulch-bg">
      <a href="/products/mulch">
        <h1 class="title is-1 has-text-centered">Mulch</h1>
      </a>
    </div>
  </div>
</section>
</template>

<script>
export default {
  data: () => ({
  })
}
</script>

<style scope>

  .column {
    min-height: 100vh;
  }

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

  h1.title.is-1 {
    color: white;
  }
</style>