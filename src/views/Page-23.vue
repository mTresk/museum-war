<template>
  <main class="page">
    <div class="screen">
      <Background/>
      <div class="screen__container">
        <Logo/>
        <div class="screen__body">
          <Doves/>
          <h2 class="screen__subtitle">Военно-голубиная связь в РККА</h2>
          <div class="screen__content">
            <p class="screen__text">Рабоче-Крестьянская Красная армия (РККА) – официальное название вооруженных сил России с 1918 по 1943 гг. По уже существующей практике, военно-голубиные станции подразделялись на стационарные и подвижные.  Постоянные станции входили в окружной (фронтовой) комплект подразделений связи. А подвижными комплектовались все корпуса. При перевозке голубей
              в автомобиле или на мотоцикле на расстояние 100 км связь устанавливалась за 2 часа. Подвижная станция разворачивала голубиную связь на четвёртый
              день.</p>
            <div class="screen__images">
              <div style="width: 280px; height: 460px" class="screen__image screen__image-ibg">
                <img src="img/19.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <p class="screen__text">
                  Подготовка кадров — военных голубеводов — была возложена на Центральный учебно-опытный питомник-школу военных и спортивных собак,
                  которая получила наименование «Центральная школа связи собаководства и голубеводства».
                </p>
                <p class="screen__text">
                  В состав Научно-экспериментального института военного собаководства был включен расформированный ранее и вновь восстановленный Институт
                  военного голубеводства РККА.
                </p>
                <p class="screen__text">Коллективом преподавательского состава школы было подготовлено и издано «Наставление по голубиной связи РККА».</p>
                <p class="screen__text">
                  С апреля 1934 по декабрь 1938 года школой было произведено 19 выпусков слушателей курсов усовершенствования начальников стационарных
                  военно-голубиных станций.
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
  name: "Page-23",
  data() {
    return {
      pagePrev: 'page-22',
      pageNext: 'page-24',
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