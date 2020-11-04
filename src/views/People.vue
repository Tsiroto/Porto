<template>
  <section id="people" class="people-section my-12">
    <h1 class="text-center text-h4 font-weight-bold mb-6">People I Admire</h1>
    <v-card
    max-width="900"
    class="mx-auto elevation-6"
    >

      <v-container>
        <v-row dense class="d-flex justify-center">

          <v-col
            v-for="(item, i) in items"
            :key="i"
            cols="6"
            class="ppl-col"
          >
            <v-card
              :color="item.color"
              dark
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title
                    class="headline"
                    v-text="item.person"
                  ></v-card-title>

                  <v-card-subtitle v-text="item.title"></v-card-subtitle>

                  <v-card-actions>
                    <v-btn
                      class="ml-2 mt-5"
                      outlined
                      rounded
                      small
                      :href="item.wiki"
                      target="blank"
                    >
                      Read More
                    </v-btn>
                  </v-card-actions>
                </div>

                <v-avatar
                  class="ma-3"
                  size="125"
                  tile
                >
                  <v-img :src="item.src"></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-col>

        </v-row>
      </v-container>
    </v-card>
  </section>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          color: '#F65058FF',
          src: 'https://assets.codepen.io/3765537/vincent.webp',
          title: 'Painter',
          person: 'Vincent Van Gogh',
          wiki: 'https://en.wikipedia.org/wiki/Vincent_van_Gogh'
        },
        {
          color: '#F65058FF',
          src: 'https://assets.codepen.io/3765537/verne.gif',
          title: 'Novelist',
          person: 'Jules Verne',
          wiki: 'https://en.wikipedia.org/wiki/Jules_Verne'
        },
        {
          color: '#F95700FF',
          src: 'https://assets.codepen.io/3765537/tesla.gif',
          title: 'Inventor - Scientist',
          person: 'Nikola Tesla',
          wiki: 'https://en.wikipedia.org/wiki/Nikola_Tesla'
        },
        {
          color: '#F95700FF',
          src: 'https://assets.codepen.io/3765537/bowie.gif',
          title: 'Artist',
          person: 'David Bowie',
          wiki:'https://en.wikipedia.org/wiki/David_Bowie'
        },
        {
          color: '#F95700FF',
          src: 'https://assets.codepen.io/3765537/elon.gif',
          title: 'Entrepreneur',
          person: 'Elon Musk',
          wiki: 'https://en.wikipedia.org/wiki/Elon_Musk'
        },
        {
          color: '#F95700FF',
          src: 'https://assets.codepen.io/3765537/souris.jpg',
          title: 'Poet',
          person: 'Georgios Souris',
          wiki: 'https://simple.wikipedia.org/wiki/Georgios_Souris'
        },
        {
          color: '#F95700FF',
          src: 'https://assets.codepen.io/3765537/sagan.gif',
          title: 'Astronomer',
          person: 'Carl Sagan',
          wiki: 'https://en.wikipedia.org/wiki/Carl_Sagan'
        },
        {
          color: '#F95700FF',
          src: 'https://assets.codepen.io/3765537/einstein.gif',
          title: 'Theoretical Physicist',
          person: 'Albert Einstein',
          wiki: 'https://en.wikipedia.org/wiki/Albert_Einstein'
        },
      ],
    }),
  }
</script>

<style scoped>
.people-section {
  color: #2c3c50;
}
  .ppl-col {
    min-width: 380px;
  }
</style>