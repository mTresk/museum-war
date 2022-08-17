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
              <div style="width: 580px; height: 570px" class="screen__image screen__image-ibg">
                <img src="img/14.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <p class="screen__text">Коммандос был голубем, использовавшимся британскими вооруженными силами в целях разведки.</p>
                <p class="screen__text">
                  Во время войны голубь выполнил более 90 полётов и получил медаль Дикин за три особенно заметные миссии в 1942 году, связанные с
                  местонахождение немецких войск, промышленных объектов и раненых британских солдат.
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
  name: "Page-18",
  data() {
    return {
      pagePrev: 'page-17',
      pageNext: 'page-19',
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