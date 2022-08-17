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
              <div style="width: 405px; height: 635px" class="screen__image screen__image-ibg">
                <img src="img/23.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <p class="screen__text">
                  В материалах времён войны есть рассказ немецкого пилота, который описывает, как на крыло его готовящегося к вылету «Мессершмитта» сел
                  голубь:
                </p>
                <p class="screen__text screen__text_italic">
                  «Я только подумал, что это плохой знак, как в следующую секунду топливный бак вспыхнул, я еле успел выскочить. Потом мне сказали, что
                  русские использовали голубей-поджигателей. Даже после войны я не мог спокойно видеть этих птиц, подбирающих крошки на площадях».
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
  name: "Page-28",
  data() {
    return {
      pagePrev: 'page-27',
      pageNext: 'page-29',
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