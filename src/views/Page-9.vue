<template>
  <main class="page">
    <div class="screen">
      <Background/>
      <div class="screen__container">
        <Logo/>
        <div class="screen__body">
          <Doves/>
          <h2 class="screen__subtitle">Награждённые голуби</h2>
          <div class="screen__content">
            <p class="screen__text">
              За большие заслуги в Первой мировой войне звание полковника английской армии было присвоено почтовому голубю № 888, который был похоронен после
              смерти со всеми воинскими почестями. В 1916 году за доставку письма специальным декретом президента Франции голубь был посмертно награждён
              Орденом Почётного легиона. Чучело героя до сих пор хранится в одном из парижских музеев.
            </p>
            <p class="screen__text">
              В 1918 году за отвагу награждена французским Военным крестом голубка Шер Ами. Американский отряд, окруженный немцами, выпустил несколько птиц с
              просьбой о немедленной помощи. Одна из птиц, Шер Ами, доставила это срочное сообщение в штаб в течение получаса, и вскоре отряд был освобожден
              из окружения противника.
            </p>
            <p class="screen__text">Использование голубей в почтовой службе во Второй мировой войне ничем не отличалось от их применения в Первой мировой.</p>
            <p class="screen__text">Разве что количество их было значительно больше, да ещё их пытались научить выполнять диверсионные функции.</p>
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
  name: "Page-9",
  data() {
    return {
      pagePrev: 'page-8',
      pageNext: 'page-10',
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