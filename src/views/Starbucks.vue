<template>
  <section>
  <div class="circle"></div>
  <header>
    <a href="#" class="logo"><img src="https://assets.codepen.io/3765537/starlogo.png"></a>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Menu</a></li>
      <li><a href="#">What's New</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </header>
  <div class="content">
    <div class="textBox">
      <h2>It's not just Coffee<br>It's <span>Starbucks</span></h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error enim atque nulla ad, nemo, laboriosam labore deserunt sapiente itaque similique id aut aliquid inventore, culpa voluptatem quidem voluptate voluptatum quisquam modi maxime! Laborum, ipsum suscipit. Atque nobis natus consequatur. Voluptatibus.</p>
      <a href="#">Learn More</a>
    </div>
    <div class="imgBox">
      <img src="https://assets.codepen.io/3765537/star1.png" class="starbucks">
    </div>
  </div>
  <ul class="thumb">
    <li><img src="https://assets.codepen.io/3765537/thumb1.png" onclick="imgSlider('https://assets.codepen.io/3765537/star1.png');changeCircleColor('#017143')"></li>
    <li><img src="https://assets.codepen.io/3765537/thumb2.png" onclick="imgSlider('https://assets.codepen.io/3765537/star2.png');changeCircleColor('#eb7495')"></li>
    <li><img src="https://assets.codepen.io/3765537/thumb3.png" onclick="imgSlider('https://assets.codepen.io/3765537/star3.png');changeCircleColor('#d752b1')"></li>
  </ul>
  <ul class="sci">
    <li><a href="#"><img src="https://assets.codepen.io/3765537/facebook.png"></a></li>
    <li><a href="#"><img src="https://assets.codepen.io/3765537/twitter.png"></a></li>
    <li><a href="#"><img src="https://assets.codepen.io/3765537/instagram.png"></a></li>
  </ul>
</section>
</template>

<script>
function imgSlider(anything) {
  document.querySelector(".starbucks").src = anything;
}

function changeCircleColor(color) {
  const circle = document.querySelector(".circle");
  circle.style.background = color;
}

</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:200,300,400,500,600,700,800,900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}

section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
}

header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.logo {
    position: relative;
    max-width: 80px;
  }
}

ul {
  position: relative;
  display: flex;
  li a {
    display: inline-block;
    color: #333;
    font-weight: 400;
    margin-left: 40px;
  }
}

.content {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .textBox {
    position: relative;
    max-width: 600px;
    h2 {
      color: #333;
      font-size: 4em;
      line-height: 1.4em;
      font-weight: 500px;
      span {
        color: #017143;
        font-size: 1.2em;
        font-weight: 900;
      }
    }
    p {
      color: #333;
    }
    a {
      display: inline-block;
      margin-top: 20px;
      padding: 8px 20px;
      background: #017143;
      color: #fff;
      border-radius: 40px;
      font-weight: 500;
      letter-spacing: 1px;
    }
  }
  .imgBox {
    width: 600px;
    display: flex;
    justify-content: flex-end;
    padding-right: 50px;
    margin-top: 50px;
    img {
      max-width: 340px;
    }
  }
}

.thumb {
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translatex(-50%);
  li {
    display: inline-block;
    margin: 0 20px;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      transform: translatey(-15px);
    }
    img {
      max-width: 60px;
    }
  }
}

.sci {
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translatey(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  li a {
    display: inline-block;
    margin: 5px 0;
    transform: scale(0.6);
    filter: invert(1);
  }
}

.circle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #017143;
  clip-path: circle(600px at right 800px);
}

</style>