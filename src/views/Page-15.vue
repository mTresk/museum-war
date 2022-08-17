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
              <div style="width: 800px; height: 600px" class="screen__image screen__image-ibg">
                <img src="img/11.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <p class="screen__text">
                  За время войны 32 голубя из NPS получили медаль Марии Дикин — высшую воинскую награду Великобритании для животных, учреждённую в 1943
                  году основательницей благотворительной организации помощи животным PDS Марией Дикин.
                </p>
                <p class="screen__text">
                  Одна из первых медалей была вручена голубке Мэри из города Эксетер. Во время военных действий в 1943–1944 годах Мэри пережила нападение
                  военного ястреба противника, тяжелое ранение дробью, травму шеи близким разрывом шрапнели и бомбардировку голубятни, когда были убиты
                  десятки других птиц.
                </p>
                <p class="screen__text">Она получила медаль Марии Дикин, 23 шва и специальный кожаный корсет для поддержки шеи.</p>
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
  name: "Page-15",
  data() {
    return {
      pagePrev: 'page-14',
      pageNext: 'page-16',
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