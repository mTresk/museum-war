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
              Во время первых военных операций стало очевидно, что в условиях высоких темпов развития событий и частых перемещений штабов применение голубиной
              связи стало невозможным.
            </p>
            <p class="screen__text">Вплоть до 1944 года голуби-«связисты» в основном использовались в интересах разведывательных отделов армий.</p>
            <div class="screen__images">
              <div style="width: 600px; height: 510px" class="screen__image screen__image-ibg">
                <img src="img/20.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <p class="screen__text">
                  В 1944 году, когда войска связи получили достаточный опыт боевого применения, сформировали голубиную роту связи и передали её
                  Двенадцатому гвардейскому стрелковому корпусу 1-й ударной армии 2-го Прибалтийского фронта. Командиром роты был назначен опытный
                  голубевод капитан М. Богданов. Подразделение состояло из четырёх голубиных станций, 80 солдат и 90 лёгких переносных голубятен (корзин),
                  в каждой из которых помещалось по 6 голубей. Всего в роте насчитывалось 500 голубей, которые были распределены на 22 направления и
                  надёжно работали в радиусе 10-15 км.
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
  name: "Page-24",
  data() {
    return {
      pagePrev: 'page-23',
      pageNext: 'page-25',
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