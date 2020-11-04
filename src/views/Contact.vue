<template>
  <section id="contact" class="contact-section">
    <v-container>
      <v-row>
        <v-col>
          <h1 class="text-center white--text text-h4 mb-6">Where to find me</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="6" offset-sm="3" class="d-flex justify-space-around">
          <img 
          class="contact-icon"
          src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg"
          />
          <img 
          class="contact-icon"
          src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/codepen.svg"
          />
          <img 
          class="contact-icon"
          src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg"
          />
          <img 
          class="contact-icon"
          src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/facebook.svg"
          />
          <img 
          class="contact-icon"
          src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/google.svg"
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.contact-section {
  background-color: #2c3c50;
  color: #FFF;
}
.contact-icon {
  height: 30px;
}
</style>