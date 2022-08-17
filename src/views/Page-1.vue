<template>
  <main class="page">
    <div class="screen">
      <Background/>
      <div class="screen__container">
        <Logo/>
        <div class="screen__body">
          <Doves/>
          <h2 class="screen__subtitle screen__subtitle_italic">
            Война – это время, когда от точной и оперативной информации зависят судьбы городов, армий, а то и целых народов.
          </h2>
          <div class="screen__content">
            <div class="screen__images">
              <div style="width: 800px; height: 500px" class="screen__image screen__image-ibg">
                <img src="img/1.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <p class="screen__text">
                  «Хоминг» – уникальная природная способность голубя возвращаться к своему гнезду, к своему партнёру (самке или самцу).
                </p>
                <p class="screen__text">
                  Голуби обладают очень острым зрением в сочетании с прекрасной памятью. Но главный навигатор голубя  — магнитный. Он расположен в
                  основании клюва и называется магнитно-рецепторной системой. С её помощью только что вылупившийся птенец определяет и запоминает уровень
                  магнитного напряжения возле своего гнезда. И эту информацию он уже никогда не забудет.
                </p>
              </div>
            </div>
            <p class="screen__text">
              Помимо магнитного «навигатора» у голубя есть еще и инфразвуковой «датчик», позволяющий улавливать колебания ниже 10 герц. Таким образом голуби
              узнают о надвигающихся бурях, перемене погоды и направлении ветра.
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
import Background from "@/components/Background";
import Logo from "@/components/Logo";
import Doves from "@/components/Doves";

export default {
  name: "Page-1",
  data() {
    return {
      pageNext: 'page-2',
      pagePrev: 'home'
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