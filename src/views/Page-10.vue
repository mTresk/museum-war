<template>
  <main class="page">
    <div class="screen">
      <Background/>
      <div class="screen__container">
        <Logo/>
        <div class="screen__body">
          <Doves/>
          <h2 class="screen__subtitle">Национальная служба голубей Великобритании</h2>
          <div class="screen__content">
            <p class="screen__text">
              Национальная служба голубей (NPS) – добровольная гражданская организация (наподобие союза военных голубеводов), созданная в Великобритании в
              1938 году.
            </p>
            <p class="screen__text">В течение 1939-1945 годов NPS передала на службу в армию боле 200 тысяч молодых голубей.</p>
            <p class="screen__text">
              За каждого голубя, совершившего «боевой вылет», его владельцу полагалось небольшое денежное вознаграждение от правительства. Для обеспечения
              безопасности возвращения голубей с материка в Англию на всем побережье были уничтожены хищные птицы, которые могли бы помешать возвращению домой
              «крылатых связистов».
            </p>
            <p class="screen__text">
              Поскольку голуби использовались различными службами, рациональные англичане для быстрой идентификации «связных», придумали цветовую
              классификацию контейнеров, прикрепляемых к их ножкам.
            </p>
            <p class="screen__text">
              Это не только ускоряло доставку информации по назначению, но и в большей степени обеспечивало секретность полученных данных.
            </p>
            <p class="screen__text">
              Красный цвет использовали сухопутные силы США и Великобритании, синий – ВВС США и Великобритании, синий с цветным диском  — британские RAF,
              красный с цветным диском — британская спецслужба, чёрный — британская гражданская полиция, жёлтый – британские военные коммерсанты.
            </p>
            <p class="screen__text">
              Существовал ещё ряд разных цветовых обозначений, которые были сведены в единую памятку для голубеводов, отдавших птиц на военную службу.
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
  name: "Page-10",
  data() {
    return {
      pagePrev: 'page-9',
      pageNext: 'page-11',
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