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
              <div style="width: 800px; height: 555px" class="screen__image screen__image-ibg">
                <img src="img/21.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <p class="screen__text">
                  За годы войны почтовыми голубями ВГС РККА было доставлено 150 000 голубеграмм. Данный вид связи был настолько эффективным, что
                  немецко-фашистские войска были вынуждены принимать контрголубиные меры.
                </p>
                <p class="screen__text">
                  Известен случай, когда раненный голубь, доставлявший важное сообщение, упал на нейтральной полосе. Это видели и наши, и немцы. Немецкая
                  разведгруппа немедленно выдвинулась к нему под огнем наших подразделений, чтобы завладеть шифрограммой. Советские бойцы прикрывали
                  крылатого почтальона огнём, не давя немцам к нему приблизиться. Голубь с перебитым крылом под шквальным огнем противника пешком достиг
                  наших окопов и принёс важное сообщение.
                </p>
                <br />
                <p class="screen__text screen__text_italic">
                  30 солдат-голубеводов были награждены боевыми орденами и медалями за участие в обороне Москвы.
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
  name: "Page-26",
  data() {
    return {
      pagePrev: 'page-25',
      pageNext: 'page-27',
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