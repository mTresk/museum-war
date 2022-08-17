<template>
  <main class="page">
    <div class="screen">
      <Background/>
      <div class="screen__container">
        <Logo/>
        <div class="screen__body">
          <Doves/>
          <h2 class="screen__subtitle">Служба голубей армии США</h2>
          <div class="screen__content">
            <div class="screen__images">
              <div style="width: 620px; height: 460px" class="screen__image screen__image-ibg">
                <img src="img/24.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <p class="screen__text">
                  Служба голубей армии Соединенных Штатов, также известная как Корпус голубей, была основана еще в годы Первой мировой войны. Её задачей
                  было обучение птиц для использования в связи и разведке. Они служили в сухопутных войсках, в авиации и на флоте.
                </p>
                <p class="screen__text">
                  Во время Второй мировой войны Корпус состоял из 3 150 военнослужащих, в том числе 150 офицеров, и 54 тысяч военных голубей. 36 тысяч
                  птиц из общего количества служили за пределами границ США.
                </p>
                <p class="screen__text">
                  Основное поступление голубей на военную службу произошло в начале 1942 года, когда Корпус связи армии публично обратился к
                  любителям-голубеводам с просьбой продать армии здоровых молодых птиц. Армия предлагала по пять долларов за каждую птицу — половину
                  средней рыночной цены. Но надеялась получить их в качестве подарков или в кредит.
                </p>
                <p class="screen__text">
                  Армия за короткое время получила почти 52 тысячи голубей. К октябрю 1943 года у Корпуса связи уже было достаточно птиц, чтобы поддержать
                  собственную программу разведения.
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
  name: "Page-29",
  data() {
    return {
      pagePrev: 'page-28',
      pageNext: 'page-30',
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