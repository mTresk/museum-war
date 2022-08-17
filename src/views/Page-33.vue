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
                <img src="img/28.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <p class="screen__text">
                  Доставку голубей к точкам связи обеспечивали пешим порядком или с помощью велосипедов. При благоприятных условиях использовались
                  автомобили, мототранспорт или повозки.
                </p>
                <p class="screen__text">
                  До 1988 года швейцарская армия имела на дежурстве почти 7 тысяч птиц, а еще 33 тысячи голубей находилось в частной собственности до
                  момента объявления мобилизации. Окончательно голубиная служба была ликвидирована лишь в 1996 году.
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
  name: "Page-33",
  data() {
    return {
      pagePrev: 'page-32',
      pageNext: 'page-34',
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