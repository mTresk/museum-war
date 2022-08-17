<template>
  <main class="page">
    <div class="screen">
      <Background/>
      <div class="screen__container">
        <Logo/>
        <div class="screen__body">
          <Doves/>
          <h2 class="screen__subtitle">Операция «Columba» (Колумба)</h2>
          <div class="screen__content">
            <div class="screen__images">
              <div style="width: 800px; height: 600px" class="screen__image screen__image-ibg">
                <img src="img/10.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <p class="screen__text">
                  С апреля 1941 года по сентябрь 1944 года на европейскую территорию от Копенгагена до Бордо на специальных парашютах было сброшено 16
                  554 клетки с голубями.
                </p>
                <p class="screen__text">
                  В каждой клетке находилась листовка с призывом к населению помочь в борьбе с нацисткой Германией и просьба заполнить прилагаемый
                  вопросник разведывательного характера:
                </p>
                <ul class="screen__text">
                  <li>о передвижениях войск;</li>
                  <li>о положении орудий или радиолокационных станций.</li>
                </ul>
                <p class="screen__text">Здесь же была инструкция, как прикрепить контейнер с депешей к ножке голубя.</p>
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
  name: "Page-13",
  data() {
    return {
      pagePrev: 'page-12',
      pageNext: 'page-14',
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