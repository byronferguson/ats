<template>
<div class="row">
  <div class="col-md-6 col-md-offset-3">
    <div class="panel panel-default coupon">
      <div class="panel-heading" id="head">
        <div class="panel-title" id="title">
          <img src="https://i.imgur.com/IOL5F9T.png">
          <span class="hidden-xs">Automatic Transmission Service</span>
          <span class="visible-xs">Automatic Transmission Service</span>
        </div>
      </div>
      <div class="panel-body">
        <img src="https://i.imgur.com/e07tg8R.png" class="coupon-img img-rounded">
        <div class="col-md-9">
          <ul class="items">
            <li>Add up to 5 quarts of motor oil (per specification)</li>
            <li>Complimentary multi-point inspection</li>
            <li>Drain and refill trnasmission fluid</li>
            <li>System inspection</li>
          </ul>
        </div>
        <div class="col-md-3">
          <div class="offer">
            <span class="usd"><sup>$</sup></span>
            <span class="number">39</span>
            <span class="cents"><sup>95</sup></span>
          </div>
        </div>
        <div class="col-md-12">
          <p class="disclosure">Using Genuine Oil Filter and multigrade oil up to vehicle specification. Lube as necessary. Ester Oil or Synthetic available at additional cost. Excludes hazardous waste fee, tax and shop supplies, where applicable. Offer not valid with previous
            charges or with any other offers or specials. Customer must offer at time of write-up. No cash value.</p>
        </div>
      </div>
      <div class="panel-footer">
        <div class="coupon-code">
          Code: GBWO2
          <span class="print">
            <a href="#" class="btn btn-link"><i class="fa fa-lg fa-print"></i> Print Coupon</a>
          </span>
        </div>
        <div class="exp">Expires: Sep 30, 2016</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data: () => ({
  })
}
</script>

<style scoped>
  .coupon {
    border: 3px dashed #bcbcbc;
    border-radius: 10px;
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-weight: 300;
  }

  .coupon #head {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    min-height: 56px;
  }

  .coupon #footer {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  #title .visible-xs {
    font-size: 12px;
  }

  .coupon #title img {
    font-size: 30px;
    height: 30px;
    margin-top: 5px;
  }

  @media screen and (max-width: 500px) {
    .coupon #title img {
      height: 15px;
    }
  }

  .coupon #title span {
    float: right;
    margin-top: 5px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .coupon-img {
    width: 100%;
    margin-bottom: 15px;
    padding: 0;
  }

  .items {
    margin: 15px 0;
  }

  .usd,
  .cents {
    font-size: 20px;
  }

  .number {
    font-size: 40px;
    font-weight: 700;
  }

  sup {
    top: -15px;
  }

  #business-info ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    text-align: center;
  }

  #business-info ul li {
    display: inline;
    text-align: center;
  }

  #business-info ul li span {
    text-decoration: none;
    padding: .2em 1em;
  }

  #business-info ul li span i {
    padding-right: 5px;
  }

  .disclosure {
    padding-top: 15px;
    font-size: 11px;
    color: #bcbcbc;
    text-align: center;
  }

  .coupon-code {
    color: #333333;
    font-size: 11px;
  }

  .exp {
    color: #f34235;
  }

  .print {
    font-size: 14px;
    float: right;
  }
</style>
