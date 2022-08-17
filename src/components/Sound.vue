<template>
  <div class="sound">
    <img class="sound__icon" src="img/sound-off.svg" alt=""/>
    <audio class="sound__audio" src="files/war.mp3"></audio>
  </div>
</template>

<script>
export default {
  name: "Sound",
  mounted() {
    this.togglePlay()
  },
  methods: {
    togglePlay() {
      const playButton = document.querySelector('.sound__icon');
      if (playButton) {
        const myAudio = document.querySelector('.sound__audio');
        let isPlaying = false;

        playButton.addEventListener('click', () => {
          myAudio.onended = () => {
            playButton.src = 'img/sound-off.svg';
          }
          if (isPlaying) {
            myAudio.pause();
            playButton.src = 'img/sound-off.svg';
          }
          else {
            myAudio.play();
            playButton.src = 'img/sound-on.svg';
          }
        });

        myAudio.onplaying = function () {
          isPlaying = true;
        };
        myAudio.onpause = function () {
          isPlaying = false;
        };
      }
    },
  }
}
</script>

<style scoped>

</style>