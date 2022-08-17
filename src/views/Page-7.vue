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
              <div style="width: 800px; height: 623px" class="screen__image screen__image-ibg">
                <img src="img/6.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <p class="screen__text">
                  Помимо голубиной связи, во время Первой мировой войны предпринимались попытки использовать голубей и в разведывательных целях.
                </p>
                <p class="screen__text">
                  Несмотря на то, что уже существовали самолеты, применяемые для проведения аэрофотосъёмок, фотографии, сделанные голубями с низкой
                  высоты, давали более точные данные.
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
  name: "Page-7",
  data() {
    return {
      pagePrev: 'page-6',
      pageNext: 'page-8',
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