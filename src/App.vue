<template>
  <div class="wrapper">
    <Sound></Sound>
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"/>
      </transition>
    </router-view>
  </div>
</template>

<script>
import Sound from "@/components/Sound.vue";

export default {
  components: {Sound},
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
          if (isPlaying) {
            myAudio.pause();
            playButton.src = 'img//sound-off.svg';
          } else {
            myAudio.play();
            playButton.src = 'img//sound-on.svg';
          }
        });

        myAudio.onplaying = function () {
          isPlaying = true;
        };
        myAudio.onpause = function () {
          isPlaying = false;
        };
      }
    }
  }
}
</script>

<style lang="scss">
@use 'sass:math';
@import '@/assets/scss/base/mixins';
@import '@/assets/scss/fonts/fonts';

$fontFamily: 'Montserrat';
$fontSize: rem(20);

// Основные цвета
$mainColor: #1a1a18; // Цвет шрифта по умолчанию
$blueColor: #008bd2;
$greyColor: #b1b2b3;
$lightBlueColor: #a1d9f8;
$darkBlueColor: #2a335c;
$whiteColor: #fff;
$violetColor: #49517b;
$darkBlueGradient: linear-gradient(180deg, #050506 0%, #2a335c 100%);

// Настройки адаптивной сетки ===============================================================================================================================================================================================================================================================================================

// Минимальная ширина страницы
$minWidth: 320;
// Ширина полотна (макета)
$maxWidth: 1920;
// Ширина ограничивающего контейнера (0 = нет ограничения)
$maxWidthContainer: 1860;
// Общий отступ у контейнера
// (30 = по 15px слева и справа, 0 = нет отступа)
$containerPadding: 60;

// Ширина срабатывания первого брейкпоинта
$containerWidth: $maxWidthContainer + $containerPadding;

// Брейк-поинты
$pc: em($containerWidth); // ПК, ноутбуки, некоторые планшеты в горизонтальном положении
$tablet: em(991.98); // Планшеты, некоторые телефоны в горизонтальном положении
$mobile: em(767.98); // Телефоны L
$mobileSmall: em(479.98); // Телефоны S

// Тип адаптива:
// 1 = отзывчивость (у контейнера нет брейкпоинтов),
// 2 = по брейк-поинтам (контейнер меняет свою ширину по брейк-поинтам)
$responsiveType: 1;

// ============================================================================================================================================================================================================================================================================================================================================================================================
// ============================================================================================================================================================================================================================================================================================================================================================================================

// Обнуление ============================================================================================================================================================================================== =============================================================================================== ===============================================================================================
@import '@/assets/scss/base/null';

// Стили тега BODY ============================================================================================================================================================================================================================================================================================================================================================================================

body {
  overflow: hidden;
  background: linear-gradient(180deg, #050506 0%, #2a335c 100%);
  // Скролл заблокирован
  .lock & {
    overflow: hidden;
    touch-action: none;
  }

  // Сайт загружен
  .loaded & {
  }
}

// Оболочка wrapper ============================================================================================================================================================================================================================================================================================================================================================================================================================================
.wrapper {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  // Прижимаем footer
  > main {
    flex: 1 1 auto;
  }

  // Фикс для слайдеров
  > * {
    min-width: 0;
  }
}

.page {
  max-height: rem(1080);
  max-width: rem(1920);
  width: 100%;
  margin: 0 auto;
}

// Ограничивающий контейнер ======================================================================================================================================================================================================================

/*
(i) Стили будут применяться ко
всем классам содержащим *__container
Например header__container, main__container и т.д.
Снипет (HTML): cnt
*/
@if ($responsiveType==1) {
  // Отзывчивая
  [class*='__container'] {
    @if ($maxWidthContainer>0) {
      max-width: rem($maxWidthContainer);
      box-sizing: content-box;
      margin: 0 auto;
    }
    @if ($containerPadding>0) {
      padding: 0 rem(math.div($containerPadding, 2));
    }
  }
} @else {
  // По брейк-поинтам
  [class*='__container'] {
    margin: 0 auto;
    @if ($maxWidthContainer>0) {
      max-width: rem($maxWidthContainer);
      box-sizing: content-box;
    } @else {
      @if ($containerPadding>0) {
        padding: 0 rem(math.div($containerPadding, 2));
      }
    }
    @media (max-width: $pc) {
      max-width: rem(970);
    }
    @media (max-width: $tablet) {
      max-width: rem(750);
    }
    @media (max-width: $mobile) {
      max-width: none;
      @if ($containerPadding>0 and $maxWidthContainer>0) {
        padding: 0 rem(math.div($containerPadding, 2));
      }
    }
  }
}

@import '@/assets/scss/base';
@import '@/assets/scss/base/forms/button';
@import '@/assets/scss/home';

/* route transitions */
.route-enter-from {
  opacity: 0;
  transform: translateY(100px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>

