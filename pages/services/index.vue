<template>
<section> 
  <div class="columns is-gapless">
    <div class="column is-mobile is-one-third-tablet delivery-bg">
     <a href="/services/delivery">
      <h1 class="title is-1 has-text-centered">Delivery</h1>
     </a>
    </div>

    <div class="column is-mobile is-one-third-tablet grading-bg">
      <a href="/services/grading">
        <h1 class="title is-1 has-text-centered">Grading</h1>
      </a>
    </div>

    <div class="column is-mobile is-one-third-tablet spreading-bg">
      <a href="/services/spreading">
        <h1 class="title is-1 has-text-centered">Spreading</h1>
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

  .delivery-bg {
    background-image: url('~assets/delivery.jpg') ;
    background-position: center center;
    background-repeat:  no-repeat;
    background-attachment: fixed;
    background-size:  cover;
    background-color: #999;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .grading-bg {
    background-image: url('~assets/grading.jpg') ;
    background-position: center center;
    background-repeat:  no-repeat;
    background-attachment: fixed;
    background-size:  cover;
    background-color: #999;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .spreading-bg {
    background-image: url('~assets/spreading.jpg') ;
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