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
              <div style="width: 800px; height: 300px" class="screen__image screen__image-ibg">
                <img src="img/2.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <p class="screen__text">
                  Удивительной способностью голубей возвращаться издалека домой пользовались ещё в глубокой древности. Греки, римляне, египтяне, персы,
                  евреи, а позднее галлы и германцы оставили обильные письменные сведения об использовании голубей в том числе в военных целях.
                </p>
              </div>
            </div>
            <p class="screen__text">Египетский султан Нур ад-Дин платил по 1 000 динариев за пару хороших почтовых голубей.</p>
            <p class="screen__text">
              Он считается также создателем первой официальной почтовой службы – сети «голубиных башен» по всей территории Сирии и Египта. В более поздние
              эпохи голуби оказали большие услуги в 1572 году при осаде Харлема и в 1574 году при осаде Лейдена.
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
  name: "Page-2",
  data() {
    return {
      pagePrev: 'page-1',
      pageNext: 'page-3',
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