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
              <div style="width: 800px; height: 530px" class="screen__image screen__image-ibg">
                <img src="img/9.jpg" alt="" />
              </div>
            </div>
            <p class="screen__text">
              За доставку сообщения о местонахождении лётного экипажа, он был награждён медалью Дикина в марте 1945 года. По итогам войны британские
              Королевские ВВС определили, что каждый седьмой сбитый над морем экипаж обязан своей жизнью сообщению, доставленному голубем.
            </p>
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
  name: "Page-12",
  data() {
    return {
      pagePrev: 'page-11',
      pageNext: 'page-13',
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