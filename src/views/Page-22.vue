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
              <div style="width: 600px; height: 310px" class="screen__image screen__image-ibg">
                <img src="img/18.jpg" alt="" />
              </div>
            </div>
            <p class="screen__text">Помимо содержания своей голубиной военной почты, вооруженные силы Германии боролись с почтовыми голубями противника.</p>
            <p class="screen__text">На всех оккупированных территориях гражданским лицам запрещалось иметь голубей. За неповиновение полагался расстрел.</p>
            <p class="screen__text">
              Немцы создали специальные подразделения, укомплектованные ястребами и соколами, натренированными на охоту на голубей. Их применяли для
              патрулирования атлантического побережья, где активно работала британская разведка. Эти же подразделения комплектовались и специальными
              снайперами, которые также охотились на голубей. В войсках на передовой имелись охотничьи ружья, оснащенные картечью для уничтожения голубей.
            </p>
            <p class="screen__text">
              В 1944 году, когда Союзники готовили открытие Второго фронта, и максимально активизировали проведение операции «Колумба», немецкая контрразведка
              тоже занялись «голубеводством». Её сотрудники собирали десантированных британцами голубей и массово отравляли обратно, предварительно снабдив их
              депешами с дезинформацией.
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
  name: "Page-22",
  data() {
    return {
      pagePrev: 'page-21',
      pageNext: 'page-23',
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