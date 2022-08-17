<template>
  <main class="page">
    <div class="screen">
      <Background/>
      <div class="screen__container">
        <Logo/>
        <div class="screen__body">
          <Doves/>
          <h2 class="screen__subtitle">Голубиная служба в Швейцарской армии</h2>
          <div class="screen__content">
            <div class="screen__images">
              <div style="width: 480px; height: 557px" class="screen__image screen__image-ibg">
                <img src="img/27.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <p class="screen__text">Голубиная служба в Швейцарской армии появилась в 1917 году на базе действующей ассоциации голубеводов.</p>
                <p class="screen__text">
                  И хотя Швейцария не участвовала в войне, необходимость появления голубиной почты была вызвана способностью германской разведки тотально
                  прослушивать телефоны и контролировать телеграф.
                </p>
                <p class="screen__text">Каждая телеграфная компания для сохранения режима конфиденциальности имела голубиную станцию.</p>
                <p class="screen__text">
                  Впоследствии голубиная служба была военизирована и подчинена Генеральному штабу. В случае мобилизации отряды службы были закреплены за
                  дивизиями, крепостями, голубиными станциями, складами и передвижными голубятнями.
                </p>
                <p class="screen__text">
                  На саму службу была возложена обязанность готовить военных голубеводов, выращивать и тренировать почтовых голубей. Преимущественным
                  расстоянием, на которое тренировали голубей, была дистанция от передовых частей до штабов дивизий. В Швейцарии эта дистанция была
                  приблизительно равна 30 км.
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
  name: "Page-32",
  data() {
    return {
      pagePrev: 'page-31',
      pageNext: 'page-33',
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