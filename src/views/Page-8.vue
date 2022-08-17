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
              <div style="width: 800px; height: 655px" class="screen__image screen__image-ibg">
                <img src="img/7.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <p class="screen__text">
                  Немецкий изобретатель Нойброннер начал свои эксперименты с голубями и фотоаппаратом еще в 1903 году и к 1912 году достиг неплохих
                  результатов.
                </p>
                <p class="screen__text">
                  Пока голубь летел домой, фотоаппарат делал серию снимков через одинаковые промежутки времени. Это обеспечивал специальный
                  пневмомеханизм, вмонтированный в фотокамеры. В августе 1914 года после практической проверки голубей-разведчиков на манёврах
                  в Страсбурге, германское правительство приобрело изобретение.
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
  name: "Page-8",
  data() {
    return {
      pagePrev: 'page-7',
      pageNext: 'page-9',
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