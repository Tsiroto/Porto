<template>
  <section id="projects" class="projects-section">
    <v-container>
      <v-row>
        <v-col>
          <h1 class="text-center text-h4 font-weight-bold">Projects</h1>
        </v-col>
      </v-row>
      <v-row class="justify-space-around mb-8 mt-4">
        
        <v-card
          v-for="project in projects"
          :key="project.name"
          class="project-card"
          max-width="300"
        >
          <v-img
            class="align-end"
            height="200px"
            :src="project.image"
          />

          <v-card-title>{{ project.name }}</v-card-title>

          <v-card-text class="text--primary">
            {{ truncate(project.description) }}
          </v-card-text>

          <div class="offset-10">
            <v-spacer></v-spacer>
            <v-menu top left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list dense>
              <!-- <v-subheader>Project Options</v-subheader> -->
              <v-list-item class="item-list">
                <v-btn
                color="pink"
                text
                :href="project.github"
              >
                Information
              </v-btn>
              </v-list-item>
              <v-list-item class="item-list">
                <v-btn
                color="pink"
                text
                :href="project.github"
              >
                Preview
              </v-btn>
              </v-list-item>
              <v-list-item class="item-list">
              <v-btn
                color="pink"
                text
                :href="project.github"
                target="blank"
              >
                Github Repo
              </v-btn>
              </v-list-item>
            </v-list>
          </v-menu>
          </div>
        </v-card>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: 'Portfolio site',
          github: 'https://github.com/Tsiroto/vue-gridsome-test',
          description: 'Vue.js, Gridsome, Vuetify',
          image: 'https://assets.codepen.io/3765537/preview.JPG',
          preview: ''
        },
        {
          name: 'This is evidence',
          github: 'https://github.com',
          description: 'Lets plant it.',
          image: 'https://assets.codepen.io/3765537/proj1.jpg',
          preview: ''
        },
        {
          name: 'Hiking App',
          github: 'https://github.com',
          description: 'This looks like a great app, but it is not',
          image: 'https://assets.codepen.io/3765537/proj3.jpg',
          preview: ''
        }
      ],
      projectopts: [
        { option: 'Information' },
        { option: 'Preview' },
        { option: 'Github Repo' },
      ],
    }
  },
  methods: {
    truncate(str) {
      if (str.length > 80) {
        return str.slice(0, 79) + '...'
      }
      return str
    }
  }
}
</script>

<style scoped>
.projects-section {
  color: #2c3c50;
}
.project-card {
  margin: 8px 12px;
}
.v-image {
  border-bottom: 1px solid;
}
.item-list:hover {
  background: #def6ff96;
  transition: all 0.20s;
}
</style>