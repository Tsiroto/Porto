<template>
  <div class="home">
    <section id="about" class="about-section d-flex align-end mb-14">
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div id='titlos'>
        <h1>Giorgos Ntoufas</h1>
        <p>Web Developer</p>
      </div>
  </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue';

export default {
  name: 'Home',
  components: {
    Home,
  },
};
</script>
