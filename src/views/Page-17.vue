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
              <div style="width: 800px; height: 365px" class="screen__image screen__image-ibg">
                <img src="img/13.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <p class="screen__text">
                  Голубь Уильям Оранский находился на службе британской военной разведки MI 14. Во время воздушно-десантной операции союзных войск
                  доставил сообщение, которое спасло жизни более чем 2 000 солдат.
                </p>
                <p class="screen__text">
                  Голубя выпустили в небо в 10:30 19 сентября 1944 года, а в родное гнездо в Англии он прилетел в 14:55. За это время он преодолел около
                  400 км.
                </p>
                <p class="screen__text">За свое мужество и отвагу Вильям Оранжский был награжден медалью Марии Дикин.</p>
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
  name: "Page-17",
  data() {
    return {
      pagePrev: 'page-16',
      pageNext: 'page-18',
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