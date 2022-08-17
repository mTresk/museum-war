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
              <div style="width: 800px; height: 635px" class="screen__image screen__image-ibg">
                <img src="img/22.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <p class="screen__text">
                  Известно ещё одно боевое применение голубей в Красной Армии. В центре служебного собаководства готовили голубей-подрывников. На голубя
                  крепился зажигательный снаряд нажимного действия. Птиц дрессировали: они должны были садиться на авиабомбы, подвешенные к крыльям боевых
                  самолетов, а также на топливные ёмкости. К месту диверсии голуби со специальным зажигательным снарядом доставлялись самолётами в
                  специальных кассетах. Над объектами противника при помощи специального механизма голуби выпускались из закреплённой на самолёте кассеты,
                  куда помещалось двадцать четыре птицы.
                </p>
                <p class="screen__text">
                  Когда голубь садился на объект, снаряд автоматически отстёгивался, после чего срабатывал взрыватель нажимного действия, а голубь
                  возвращался на базу. Поскольку голубю была абсолютно всё равно, на какой самолёт садиться, советский или немецкий, секрет «голубиных
                  бомб» заключался именно в том, чтобы выпустить птиц точно над объектами противника.
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
  name: "Page-27",
  data() {
    return {
      pagePrev: 'page-26',
      pageNext: 'page-28',
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