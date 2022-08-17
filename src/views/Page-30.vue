<template>
  <main class="page">
    <div class="screen">
      <Background/>
      <div class="screen__container">
        <Logo/>
        <div class="screen__body">
          <Doves/>
          <div class="screen__content">
            <div style="margin-bottom: -30px" class="screen__images">
              <div style="width: 540px; height: 710px" class="screen__image screen__image-ibg">
                <img src="img/25.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <p class="screen__text">
                  Участвовали голуби и во время проведения десантных операций. Для этого был разработан специальный жилет для голубя, который позволял
                  десантнику носить птицу на груди или на боку. На земле десантник мог приспособить жилет, чтобы нести голубя на спине. Первым
                  голубем-десантником был самец по имени Тандерберд. Он же первым совершил 10 прыжков с самолета.
                </p>
                <p class="screen__text">
                  Позже армия разработала специальную клетку и парашют для сбрасывания голубей с самолетов для снабжения изолированных войск средствами
                  связи. Устройство также использовалось, чтобы сбрасывать голубей в сельской местности во время вторжения в Нормандию в июне 1944 года.
                  Французским гражданским лицам было предложено отправить подробную информацию о немецких объектах и передвижениях войск. Для этого было
                  десантировано около тысячи американских голубей, базировавшихся на голубиных стационарных голубятнях в Англии.
                </p>
                <p class="screen__text">
                  Экипажи бомбардировщиков B-17 обнаружили, что, хотя им приходилось носить кислородные маски и утепленные костюмы на высоте 6 км, голубям
                  не требовалось специального оборудования. Даже на высоте 10 км при температуре 45 градусов ниже нуля птицы просто сидели в контейнерах,
                  глаза их были полузакрыты, перья распушены от холода.
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
  name: "Page-30",
  data() {
    return {
      pagePrev: 'page-29',
      pageNext: 'page-31',
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