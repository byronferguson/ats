<template>
<div>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1 has-text-centered hero-title">About Us</h1>
      </div>
    </div>
  </section>

  <section class="section">
    <article class="box">
      <div class="content">
        <p>American Topsoil was started in 1988 by Ed Prigel.  Ed is a geologist and has extensive experience in agriculture as well as soil conservation.  Most people do not know that selling topsoil in an urban setting is actually topsoil conservation.  We work on farms that will soon be developed.  We remove and save the rich, top 8 inches of topsoil before the farm is developed.  Usually, the best topsoil gets ruined during development as it gets mixed up with clay and rocks and buried within the site's development.</p>
        <p>We then sell the rich topsoil to people who need it for gardens and yard work.  We estimate that our topsoil remains just as productive and possibly even more productive being in someone's garden, compared to its former state on the farm.</p>
        <p>Since 1988, American Topsoil has grown to employ nine people full time and several more part-time employees.  Our employees make the difference as they put their experience to work  for you everyday.</p>
      </div>
    </article>
  </section>

  <section class="section">
    <article class="container">

      <div class="columns is-centered">
        <div class="column is-mobile is-half-tablet">
          
          <template v-for="person in people">
            <div class="card">
              <header class="card-header">
                  <p class="card-header-title title">{{ person.title }}</p>
              </header>

              <div class="card-image">
                <figure class="image is-4by3">
                  <img :src="`/${person.photo}`">
                </figure>
              </div>

              <div class="card-content">
                <div class="section">
                  <p class="containter is-fluid">
                    {{ person.description }}
                  </p>
                </div>
              </div>

              <div class="card-footer">
              </div>
            </div>
          </template>
            
        </div>

      </div>

    </article>
  </section>

</div>
</template>

<script>
export default {
  data: () => ({
    people: [
      {
        title: 'Ed & James',
        photo: 'ed_and_james.jpg',
        description: 'James joined the company full time in 1993 making American Topsoil a true family business.'
      },
      {
        title: 'Steve',
        photo: 'steve.jpg',
        description: 'Steve has been managing our office for nearly 22 years and is always ready to answer your questions.'
      },
      {
        title: 'Mike',
        photo: 'mike.gif',
        description: 'Mike is in charge of topsoil production at the Olathe location, and is married to Debbie.'
      },
      {
        title: 'Debbie',
        photo: 'debbie.jpg',
        description: 'Debra works in the Olathe office.  In addition to working in the office, she also answers the telephones at night until 9:00pm at her home with Mike.'
      }
    ]
  })
}
</script>

<style scope>
</style>