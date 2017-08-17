<template>
<div>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1 has-text-centered hero-title">FAQ</h1>
      </div>
    </div>
  </section>

  <section class="section">
    
    <article class="container">
        <b-input type="search" placeholder="Search FAQ" icon="search" class="search" v-model="search" expanded />
    </article>

    <article class="container">

      <div class="box">
    
        <dl>
          <template v-for="faq in filteredFAQs">
            <dt class="question">{{ faq.question }}</dt>
            <dd class="answer">{{ faq.answer }}</dd>
          </template>
        </dl>
    
      </div>
    </article>
  </section>

</div>
</template>

<script>
export default {
  data: () => ({
    search: '',
    faqs: [
      {
        question: `How much does topsoil weigh?`,
        answer: `One cubic yard of topsoil generally weighs about one ton (2000 pounds).  Topsoil's weight can vary greatly due to moisture content.  In the dryness of the summer, the weight of a cubic yard of soil can drop down to around 1700 pounds, while in the spring when soil is damper, one cubic yard may weigh well over one ton.`
      },
      {
        question: `Do I need Regular, Pulverized, or Organic Topsoil?`,
        answer: `Use Regular if you have a machine to spread the soil with, like a tractor or a bobcat.  Use Pulverized if you are spreading the topsoil by hand, and use Organic topsoil if it is for a flower bed or a garden.  Regular and Pulverized topsoil is the same topsoil, the difference is that we use a large machine to break-up and screen out the clods which are in the Regular topsoil to produce the Pulverized topsoil.`
      },
      {
        question: `What is your Organic Topsoil?`,
        answer: `Our Organic Topsoil is a blend of topsoil and compost.  We mix them at a rate of 2/3 topsoil and 1/3 compost which is optimal for gardens.`
      },
      {
        question: `Does your topsoil have chemicals in it?`,
        answer: `No. We control weeds only by mechanical means of frequently disking and tilling the soil to control weeds and plant growth.`
      },
      {
        question: `Can you load my pick-up?`,
        answer: `Yes. We will load almost anything!  We load hundreds of pick-ups every year that are of every size and kind.  One time a guy pulled his bass boat behind his car and we loaded his boat!  One tip is to make sure your tires are properly inflated before coming out.  But if you do need a tire aired up then we will be happy to do that for you.`
      },
      {
        question: `How much topsoil can I put in my pick-up truck?`,
        answer: `Most 1/2 ton pickups, which include F150's and 1500's, can safely haul about 1 cubic yard.  Because 1 cy weighs about a ton, that is their upper limit.   3/4 and 1 ton pick-up trucks tend to haul as much as they can hold, which can be up to 2 cubic yards.  Smaller pickup trucks like a 1/4 ton truck vary on their weight capacities.  We load all trucks slowly and watch how they handle the weight.`
      },
      {
        question: `Can I come out and get a few buckets of soil in my car?`,
        answer: `Yes. If you need a very small amount and are willing to shovel it yourself, then come on out.  People usually pay $1 per 5 gallon bucket.`
      },
      {
        question: `Are you open if it is raining?`,
        answer: `Sometimes we close during heavy rains.  If you are in doubt, call us at 1-800-TOP-SOIL.`
      },
      {
        question: `What are your hours?`,
        answer: `8-5 Mon- Sat.  Phones are answered until 9 pm. We are open as needed during thewinter. We offfer evening and Sunday deliveries.`
      },
      {
        question: `How do you keep your topsoil dry?`,
        answer: `We cover our huge stock piles with a large piece of plastic that helps shed the water from the stockpiles.`
      },
      {
        question: `When you deliver a load to my house, where can you dump it?`,
        answer: `We will try to dump it where you want it, but because dump trucks are large, they are limited to where they can dump.  We will try and put it wherever you need it but remember that all deliveries made within the curb line are at the homeowner's risk.`
      },
      {
        question: `What is a Smart Delivery?`,
        answer: `It's our power wheelbarrow service!!  After years of watching people labor away at moving topsoil, we knew that there had to be a better way of moving topsoil.  We came up with a better way to delivery the topsoil by using a powered wheel barrow (buggy) which can haul 1/2 cubic yard per bucket full.  This topsoil buggy is loaded directly from the dump truck which has a conveyor inside the dump bed.  This way the topsoil never hits the ground until the buggy dumps it where you want it. It is fun!!`
      },
      {
        question: `Will the topsoil buggy tear up my yard?`,
        answer: `I would liken the damage to be about the same as what a large  riding lawn mower would do to your yard.  The buggy runs on rubber tracks which reduces the ground pressure.   The rule-of-thumb is that the dryer the ground is, the less damage a topsoil buggy or a riding lawn mower will do to the turf.`
      },
      {
        question: `How long will the Smart Delivery take?`,
        answer: `Once we are at your house, the Smart Delivery (buggy portion of the work) usually takes about 10 minutes per cubic yard.  This can vary according to different situations.`
      },
      {
        question: `Will that big delivery truck break my driveway?`,
        answer: `No one knows for sure.  Any time you drive a heavier vehicle onto a driveway, there is a risk of cracking the driveway.  A good rule of thumb is that if the truck is fully loaded, then there is a real risk of the driveway cracking.  A smaller load decreases the risk substantially.  For reference, I have delivered thousands of loads of topsoil and I dump a majority of them onto driveways and over the past 15 years, I have cracked 30 driveways.  I explain this because driving on your driveway is your risk and not mine.  It is your choice of where to dump it and we have dumped many loads onto the street because the driveway was in bad shape.  Also, if you use the Smart Delivery method, we almost always park and work from the city street.  The only exception is if your house is very, very far away from the street.`
      },
      {
        question: `How much does mulch weigh?`,
        answer: `I don't know but I do know that mulch is very light compare to topsoil.  I estimate that mulch tends to weigh around 750 pounds per cubic yard.  Mulch is similar to topsoil in that moisture content can effect its weight greatly.`
      },
      {
        question: `What is your mulch made of?`,
        answer: `We get our mulch from the best wholesale manufacturers in the area.  Our hardwood and colored mulches are made from native hardwood trees.`
      },
      {
        question: `What is compost made of?`,
        answer: `Our compost is made from recycled yard waste.  Our compost is first rate and is great for vegetable gardens and flower beds.`
      },
      {
        question: `What is topsoil?`,
        answer: `Topsoil is the upper layer of the Earth's crust,  usually the top 2 to 8 inches. It has the highest concentration of microrganisms and organic matter and is where most of the soil's biological activity occurs. Plants generally sink their roots into and obtain most of their nutrients from this rich layer.`
      },
      {
        question: `Where does the topsoil come from?`,
        answer: `Our topsoil come off of rich farm ground that is soon to be developed.  By removing the best top layer of soil before the development comes, we insure that this valuable resource is not wasted as many times it is wasted during the land's development.  In actuality, topsoil removal is a form of soil conservation as our customers put the soil to good use in their gardens and yards.`
      },
      {
        question: `How much topsoil do I need?`,
        answer: `To figure out how much topsoil you need, you need to measure the area that is to be filled.  The measurements you need are the length, width and depth.  Once you find those values, you simply multiply them together to get a cubic quanitity.  For an example:  You build a flower box that is 10 feet long, 3 feet wide and 1 foot deep.  To find the volume, simply multiply these three values together:  10 x 3 x 1= 30 cubic feet.  That is easy.  We sell topsoil by the cubic yard which is 3 x 3 x 3 which equals 27 cubic feet.  To turn 30 cubic feet into cubic yards, simply divide 30 by 27.  The answer is 1.11 cubic yards.  One big cubic yard is the amount you need to fill your flower box.  Below is a more complex problem to figure out how much soil you need to fill in around a foundation. YOU CAN CALL US WITH YOUR MEASUREMENTS AND WE WILL BE GLAD TO HELP YOU FIGURE THE AMOUNT NEEDED!!`
      },
      {
        question: `How much topsoil do I need to fill in around my foundation?`,
        answer: `To figure out how much topsoil you need, you need you multiply length x width x depth and then divide by 2.  For an example, if the soil is sunken down 4 inches(1/3 ft) at your house's foundation and the foundation is 100 feet long,  and you need to grade the soil out from the foundation 4 feet, then you need to multiply your measurements together:      .3333 ft x 100 ft x 4 feet= 133.2 cubic feet.   But because you are grading the soil out 4 feet into the yard to a depth of zero, the average depth is half of .333 ft.  To get the correct answer, divide 133.2 in half giving you the correct answer of 66.6 cubic feet.  To turn this into cubic yards, you need to divide 66.6 by 27, because there are 27 cubic feet in one cubic yard ( 3x3x3=27).  The amount of topsoil you need is 2.46 cubic yards.`
      }
    ]
  }),
  computed: {
    filteredFAQs () {
      return this.faqs
    }
  }
}
</script>

<style scope>
  
  .search {
    margin-bottom: 1.5em;
  }

  .question {
    font-weight: bold;
  }

  .answer {
    margin-left: 1em;
    margin-bottom: 1.5em;
  }
</style>