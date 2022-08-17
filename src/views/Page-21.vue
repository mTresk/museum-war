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
              <div style="width: 600px; height: 600px" class="screen__image screen__image-ibg">
                <img src="img/17.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <p class="screen__text">На одну армию полагалось не менее 300 облётанных голубей, которые могли обеспечивать пять направлений полёта.</p>
                <p class="screen__text">Армия имела одну стационарную и пять подвижных голубестанций.</p>
                <p class="screen__text">
                  В некоторых источниках указывается общее количество почтовых голубей, использованных в Германии за все время войны - 950 тысяч голов.
                </p>
                <p class="screen__text">Немецкая голубиная почта в сухопутных армиях поддерживала связь на короткие расстояния – 30-50 км.</p>
                <p class="screen__text">
                  Голубей в точки отправки доставляли как пешим ходом в заплечных корзинах на 6 голубей, так и с использованием мотоциклов или
                  велосипедов.
                </p>
                <p class="screen__text">
                  Зачастую на самую передовую или на участки фронта, с которыми отсутствовала какая-либо связь, голубей в специальных корзинах приносили
                  посыльные собаки.
                </p>
                <p class="screen__text">
                  В курс военной подготовки лётчиков и моряков входили навыки обращения с почтовыми голубями. В связи с этим выделенные военнослужащие
                  проходили двухдневные курсы на стационарных голубиных станциях.
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
  name: "Page-21",
  data() {
    return {
      pagePrev: 'page-20',
      pageNext: 'page-22',
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