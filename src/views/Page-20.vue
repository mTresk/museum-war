<template>
  <main class="page">
    <div class="screen">
      <Background/>
      <div class="screen__container">
        <Logo/>
        <div class="screen__body">
          <Doves/>
          <h2 class="screen__subtitle">Голуби Германии</h2>
          <div class="screen__content">
            <div class="screen__images">
              <div style="width: 400px; height: 400px" class="screen__image screen__image-ibg">
                <img src="img/16.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <p class="screen__text">
                  Как и во времена Первой мировой войны, в Германии выращивание и подготовка почтовых голубей происходили на базе центров служебного
                  собаководства.
                </p>
                <p class="screen__text">С образованием Waffen-SS у них появилась отдельная собственная служба голубиной связи.</p>
                <p class="screen__text">
                  Военнослужащие подразделений голубиной связи носили специальные нарукавные нашивки, которые в определенных условиях служили для них
                  специфическим пропуском как в тылу, так и на передовой.
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
  name: "Page-20",
  data() {
    return {
      pagePrev: 'page-19',
      pageNext: 'page-21',
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