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
                <img src="img/4.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <p class="screen__text">
                  Для перевозки большого количества птиц использовались специальные мобильные экипажи, так называемые подвижные голубятни. Изначально это
                  были конные прицепы, а затем двухэтажные лондонские автобусы типа «В».
                </p>
                <p class="screen__text">
                  Автобусы переоборудовали для новой задачи: пассажирские сиденья убрали на обоих этажах, передние окна закрыли ставнями, а ограждение
                  второго этажа заменили окнами, которые можно было накрыть сеткой, чтобы птицы могли вылетать одновременно.
                </p>
                <p class="screen__text">Для связи между двумя пунктами в каждом из них имелось по голубятне.</p>
                <p class="screen__text">
                  Голубей, приученных к одной станции, отвозили заблаговременно на другую, а голубей второй — на первую. По мере необходимости их
                  выпускали на свободу и птицы возвращались на свою родную точку с нужным сообщением.
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
  name: "Page-5",
  data() {
    return {
      pagePrev: 'page-4',
      pageNext: 'page-6',
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