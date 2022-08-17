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
              <div style="width: 495px; height: 623px" class="screen__image screen__image-ibg">
                <img src="img/3.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <p class="screen__text">
                  Голубиная связь, или военно-голубиная почта — один из способов военной связи, при котором доставка письменных сообщений производилась
                  почтовыми голубями.
                </p>
                <p class="screen__text">Голубиная связь широко применялась во Франко-прусской войне 1870—1871 годов.</p>
                <p class="screen__text">При осаде Парижа 73 голубя передали 150 тысяч официальных и до миллиона частных писем.</p>
                <p class="screen__text">
                  Почта для Парижа готовилась в городе Тур. Птиц в провинцию завозили на воздушном шаре. Один голубь некоего Деруара шесть раз перелетал
                  из провинции в Париж.
                </p>
                <p class="screen__text">
                  В 1870 году в Париже был специально оборудован «голубиный почтамт» — читальный зал, в котором расшифровывались голубеграммы —
                  микрописьма.
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
import Background from "@/components/Background";
import Logo from "@/components/Logo";
import Doves from "@/components/Doves";

export default {
  name: "Page-3",
  data() {
    return {
      pagePrev: 'page-2',
      pageNext: 'page-4',
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