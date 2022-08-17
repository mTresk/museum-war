<template>
  <main class="page">
    <div class="screen">
      <Background/>
      <div class="screen__container">
        <Logo/>
        <div class="screen__body">
          <Doves/>
          <div class="screen__content">
            <div class="screen__images">
              <div style="width: 500px; height: 530px" class="screen__image screen__image-ibg">
                <img src="img/8.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <p class="screen__text">
                  Первым голубем, доставившим сообщение от сбитого самолета на континенте, был Royal Blue,который пролетел 120 миль за 4 часа 10 минут.
                  Случилось это 10 октября 1940 года после того, как самолет, на котором он находился, был вынужден совершить посадку в оккупированной
                  Голландии.
                </p>
              </div>
            </div>
          </div>
          <Navigation :page-next="pageNext" :page-prev="pagePrev"/>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import {mapActions} from 'vuex'
import Navigation from "@/components/Navigation";
import Doves from "@/components/Doves";
import Logo from "@/components/Logo";
import Background from "@/components/Background";

export default {
  name: "Page-11",
  data() {
    return {
      pagePrev: 'page-10',
      pageNext: 'page-12',
    }
  },
  components: {
    Doves,
    Logo,
    Background,
    Navigation
  },
  mounted() {
    this.animate()
  },
  methods: {
    ...mapActions([
      'animate'
    ]),
  }
}
</script>