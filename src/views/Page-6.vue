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
              <div style="width: 800px; height: 623px" class="screen__image screen__image-ibg">
                <img src="img/5.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <p class="screen__text">
                  Также для голубиной связи птицу передавали лицу, от которого в дальнейшем ожидали важных сообщений. Сообщения писали на кусочках тонкой
                  бумаги длиной 16,5 и шириной 6,5 см. На русских военных станциях депешу (письмо) свертывали в трубочку, вкладывали в обрезок гусиного
                  или голубиного пера, прошивали с обоих концов навощёнными шелковинками и привязывали к одному или двум хвостовым перьям.
                </p>
                <p class="screen__text">
                  Существовал и более простой способ: на одно из перьев хвоста надевали обрезок гусиного пера длиной от 4 до 5 см, а затем свёрнутую в
                  трубочку депешу вгоняли, наподобие клина, в зазор, образованный внутренними стенками обрезка и бородкой пера; если при этом оставался
                  зазор, то его заполняли колышком.
                </p>
                <p class="screen__text">
                  В среднем дальность голубиной связи со стационарных станций достигала 300 км, а с подвижных (полевых) — 30-50 км.
                </p>
                <p class="screen__text">Голубь летел на высоте 100—300 м со средней скоростью 60—70 км/ч.</p>
                <p class="screen__text">
                  К концу Первой мировой войны в армиях союзников России (Франции, Англии и Америки) было около 400 тысяч военно-почтовых голубей, а в
                  германской армии – около 150 тысяч голубей.
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
  name: "Page-6",
  data() {
    return {
      pagePrev: 'page-5',
      pageNext: 'page-7',
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