<template>
  <section id="timeline" class="timeline-section">
    <v-container>
      <v-row>
        <v-col>
          <h1 class="text-center text-h4 font-weight-bold">5G Warning</h1>
        </v-col>
      </v-row>
      <v-row class="w-80">
        <v-col>
          <div>
            <v-timeline :reverse="reverse" :dense="$vuetify.breakpoint.smAndDown"
            class="tmln-itm"
            >
              <v-timeline-item
                v-for="(item, i) in items"
                :key="i"
              >
                <span slot="opposite">{{ item.year }}</span>
                <v-card class="elevation-4">
                  <v-card-title class="headline">{{ item.title }}</v-card-title>
                  <v-card-text>
                    {{ item.text }}
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
  export default {
    data: () => ({
      reverse: true,
      items: [
        {
          year: '2022',
          title: '5G Dominance',
          text: 'World wields under the power of the true 5G King'
        },
        {
          year: '2020',
          title: 'Reactions to 5G',
          text: 'Pacifists and religions join forces for a better tomorrow, 5G grows stronger'
        },
        {
          year: '2016',
          title: 'The true self',
          text: '5G publicly declared responsible for the human stupidity'
        },
        {
          year: '1990',
          title: 'A new Power is rising',
          text: '5G has been slipping in the shadows, spreading fear and headaches'
        },
        {
          year: '1760',
          title: 'Rumors',
          text: 'About an evil future technology, suspicions of human extinction'
        },
        {
          year: '0',
          title: 'The birth of everything',
          text: 'At the beginning there was nothing. Then, there was something.'
        },
      ],
    }),
  }
</script>

<style scoped>
.timeline-section {
  color: #2c3c50;
}
.headline {
  color:#2c3c50;
}
.tmln-itm {
  max-width: 80%;
  margin: auto;
}
</style>