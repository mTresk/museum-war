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
              <div style="width: 800px; height: 600px" class="screen__image screen__image-ibg">
                <img src="img/12.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <p class="screen__text">
                  В Лондоне установлен памятник голубке по имени Уинки, благодаря которой был спасен экипаж подводной лодки. В феврале 1942 года
                  повреждённая немецкой авиацией субмарина опустилась недалеко от Норвегии на дно. По счастливой случайности на этой подводной лодке жили
                  два голубя и экипаж в специальной капсуле через торпедный аппарат выбросил голубей на поверхность.
                </p>
                <p class="screen__text">
                  К обоим голубям были перекреплены записки с координатами нахождения лодки. Во время шторма один голубь погиб, а голубка Уинки
                  благополучно преодолела 9 тысяч километров и через 12 суток доставила записку до «адресата». В ходе последовавшей спасательной операции
                  весь экипаж благополучно был спасен. За этот благородный и героический поступок Уинки была награждена медалью Марии Дикин, а в честь
                  голубки был дан торжественный ужин.
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
  name: "Page-16",
  data() {
    return {
      pagePrev: 'page-15',
      pageNext: 'page-17',
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