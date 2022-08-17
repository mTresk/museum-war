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
              <div style="width: 540px; height: 710px" class="screen__image screen__image-ibg">
                <img src="img/26.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <p class="screen__text">
                  Самым знаменитым американским голубем Второй мировой войны был Г. И. Джо. 18 октября 1943 года американская пехотная дивизия вызвала
                  тяжёлых бомбардировщиков для удара по селению Колви Веккии в Италии.
                </p>
                <p class="screen__text">
                  Однако, когда немцы неожиданно отступили, британская 56-я пехотная бригада вторглась в город почти перед самой его бомбардировкой. По
                  радио не смогли донести информацию об отмене атаки. Поэтому был отправлен голубь Джо с депешей об отмене бомбардировки.
                </p>
                <p class="screen__text">
                  Он совершил 20-мильный перелёт за 20 минут и прибыл как раз в тот момент, когда бомбардировщики собирались взлетать. Г. И. Джо был
                  награждён медалью Дикина за доблесть лорд-мэром Лондона.
                </p>
                <p class="screen__text">
                  Об эффективности голубиной почты говорит тот факт, что более 90% сообщений армии США, отправленных голубями, были получены. Армия США
                  прекратила использование голубей в 1957 году.
                </p>
                <p class="screen__text">
                  15 «голубей-героев» были переданы в дар зоопаркам, а около 1 000 других породистых пернатых были проданы населению.
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
  name: "Page-31",
  data() {
    return {
      pagePrev: 'page-30',
      pageNext: 'page-32',
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