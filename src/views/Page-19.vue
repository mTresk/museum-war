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
              <div style="width: 330px; height: 570px" class="screen__image screen__image-ibg">
                <img src="img/15.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <p class="screen__text">
                  Голубю Густаву, также обладателю медали Дикин, понадобилось чуть больше пяти часов, чтобы донести в Англию известие об успешной высадке
                  десанта в Нормандии 6-го июня 1944 года. На ноге Густава была прикреплена депеша корреспондента агентства «Рейтер», который наблюдал за
                  десантированием.
                </p>
                <p class="screen__text">
                  Среди других обладателей медали Марии Дикин известны голуби Меркурий, Пэдди, Белое Видение, голубка Принцесса и другие, которые не
                  только доставили депеши, но еще и преодолели большие расстояния или установили рекорды скорости полетов.
                </p>
                <p class="screen__text">В 1948 году британские военные заявили, что голуби им больше не нужны.</p>
                <p class="screen__text">Во время войны голуби-посыльные могли получать специальное государственное пособие в виде кукурузы и семян.</p>
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
  name: "Page-19",
  data() {
    return {
      pagePrev: 'page-18',
      pageNext: 'page-20',
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