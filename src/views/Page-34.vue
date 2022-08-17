<template>
  <main class="page">
    <div class="screen">
      <Background/>
      <div class="screen__container">
        <Logo/>
        <div class="screen__body">
          <Doves/>
          <h2 class="screen__subtitle">Голуби на службе других армий</h2>
          <div class="screen__content">
            <p class="screen__text">
              В конце 1930-х годов, перед Второй мировой войной, лейтенант Клэр Ли Ченно американский пилот группы «Летающие тигры», привёз с собой в Китай
              несколько сотен голубей-связистов.
            </p>
            <p class="screen__text">
              Группа принимала активное участие в боях с Японией на стороне Китая во время Японо-китайской войны. В конце войны выживших птиц он оставил
              Китаю, который зачислил их в свои вооруженные силы. Так они и стали основой для всё еще действующей сегодня программы по разведению и подготовке
              голубей военной связи в этой стране.
            </p>
            <p class="screen__text">
              Сегодня в Китае зарегистрировано 30 млн голубей. В конце 2010 года Народно-освободительная армия Китая инициировала новую программу по
              подготовке 10 тысяч военных птиц — «резервной армии голубей», которая обеспечит поддержку в случае выхода из строя ее высокотехнологичных систем
              электронной связи.
            </p>
            <p class="screen__text">
              Австралийские и канадские военные также использовали голубей-связистов в годы войны. Например, канадский военный голубь Бич Комбер на службе в
              Великобритании в августе 1942 года за доставленное важное донесение из Дьеппа получил медаль Дикина.
            </p>
            <p class="screen__text">Использовались почтовые голуби также в Новой Зеландии и Японии.</p>
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
  name: "Page-34",
  data() {
    return {
      pagePrev: 'page-33',
      pageNext: 'page-35',
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