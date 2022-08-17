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
              После Второй мировой войны почтовые голуби все реже использовались для осуществления связи. Последнее крупное развёртывание американских
              почтовых голубей имело место во время Корейской войны.
            </p>
            <p class="screen__text">Британская армия отказалась от программы голубей в 1948 году. Вскоре этому примеру последовало большинство армий мира.</p>
            <p class="screen__text">Тем не менее, австрийские горные спасатели использовали голубей до 1978 года.</p>
            <p class="screen__text">В индийском штате Орисса полиция содержала аналогичную голубиную станцию с 1946 по 2002 год.</p>
            <p class="screen__text">Сегодня ни одна страна, за исключением Китая, не использует голубей на военной службе.</p>
            <p class="screen__text">
              Оценивая вклад голубей в общую копилку заслуг во время войны, следует отметить его как самый яркий, хоть и не самый большой. Ведь голубь,
              совершая свой подвиг, руководствовался не сознанием, а лишь инстинктом.
            </p>
            <p class="screen__text">
              К сожалению, сегодня неизвестно даже количество спасённых птицами человеческих жизней. Не оценены и не обобщены все заслуги голубей перед
              человечеством даже за период войны.
            </p>
            <p class="screen__text">
              Голубиная почта, конечно, давно проиграла и самолёту, и телефону, и интернету. Но всё же она заслуживает уважения и доброй памяти!
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
import Doves from "@/components/Doves";
import Logo from "@/components/Logo";
import Background from "@/components/Background";

export default {
  name: "Page-35",
  data() {
    return {
      pagePrev: 'page-34',
      pageNext: 'home',
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