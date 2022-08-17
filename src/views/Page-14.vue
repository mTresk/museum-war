<template>
  <main class="page">
    <div class="screen">
      <Background/>
      <div class="screen__container">
        <Logo/>
        <div class="screen__body">
          <Doves/>
          <div class="screen__content">
            <p class="screen__text">
              Среди тех, кому достались голуби, были не только случайные гражданские лица, но и организованные группы Сопротивления, которые не имели связи с
              Союзниками. Именно они и стали постоянным источником разведданных.
            </p>
            <p class="screen__text">
              Многие десантированные птицы погибли при приземлении, многие попали в руки врага, часть была съедена местными жителями, но в итоге 12% голубей
              вернулось на остров.
            </p>
            <p class="screen__text">
              По оценкам британских разведчиков, около половины доставленной информации с материка оказалось полезной. С ее помощью британская разведка не
              только получила детальное представление о системе обороны побережья, но образовала устойчивые подпольные анонимные разведцентры на территории
              врага.
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
  name: "Page-14",
  data() {
    return {
      pagePrev: 'page-13',
      pageNext: 'page-15',
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