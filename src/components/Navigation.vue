<template>
  <nav class="screen__navigation">
    <template v-if="showBackButton">
      <router-link :to="{name: pagePrev}" class="screen__button screen__button_begin button button_left">
        <svg width="60" height="21" viewBox="0 0 60 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_139_45842)">
            <path
                d="M59.5 12.2529L21.7845 12.2529C22.0396 15.2944 22.8597 18.2611 24.2024 21L0.499986 10.5L24.2024 -5.00679e-06C22.8422 2.73672 21.9985 5.70233 21.7139 8.74705L59.5 8.74705L59.5 12.2884V12.2529Z"
                fill="#2A335C"
            />
          </g>
          <defs>
            <clipPath id="clip0_139_45842">
              <rect width="59" height="21" fill="white" transform="translate(59.5 21) rotate(180)"/>
            </clipPath>
          </defs>
        </svg>

        назад
      </router-link
      >
      <router-link :to="{name: 'home'}"
                   class="start-screen__button start-screen__button_small">
        начало
      </router-link>
      <router-link :to="{name: pageNext}" class="screen__button button">
        вперед
        <svg width="59" height="21" viewBox="0 0 59 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M0 8.74705H37.7155C37.4603 5.7056 36.6403 2.73888 35.2976 0L59 10.5L35.2976 21C36.6578 18.2633 37.5015 15.2977 37.7861 12.253H0V8.71164V8.74705Z"
              fill="#2A335C"
          />
        </svg>
      </router-link>
    </template>
    <template v-if="this.$route.name === 'page-1'">
      <router-link :to="{name: pagePrev}" class="screen__button screen__button_begin button button_left">
        <svg width="60" height="21" viewBox="0 0 60 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_139_45842)">
            <path
                d="M59.5 12.2529L21.7845 12.2529C22.0396 15.2944 22.8597 18.2611 24.2024 21L0.499986 10.5L24.2024 -5.00679e-06C22.8422 2.73672 21.9985 5.70233 21.7139 8.74705L59.5 8.74705L59.5 12.2884V12.2529Z"
                fill="#2A335C"
            />
          </g>
          <defs>
            <clipPath id="clip0_139_45842">
              <rect width="59" height="21" fill="white" transform="translate(59.5 21) rotate(180)"/>
            </clipPath>
          </defs>
        </svg>

        начало
      </router-link
      >
      <router-link :to="{name: pageNext}" class="screen__button button">
        вперед
        <svg width="59" height="21" viewBox="0 0 59 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M0 8.74705H37.7155C37.4603 5.7056 36.6403 2.73888 35.2976 0L59 10.5L35.2976 21C36.6578 18.2633 37.5015 15.2977 37.7861 12.253H0V8.71164V8.74705Z"
              fill="#2A335C"
          />
        </svg>
      </router-link>
    </template>
    <template v-if="this.$route.name === 'page-35'">
      <router-link :to="{name: pagePrev}" class="screen__button screen__button_begin button button_left">
        <svg width="60" height="21" viewBox="0 0 60 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_139_45842)">
            <path
                d="M59.5 12.2529L21.7845 12.2529C22.0396 15.2944 22.8597 18.2611 24.2024 21L0.499986 10.5L24.2024 -5.00679e-06C22.8422 2.73672 21.9985 5.70233 21.7139 8.74705L59.5 8.74705L59.5 12.2884V12.2529Z"
                fill="#2A335C"
            />
          </g>
          <defs>
            <clipPath id="clip0_139_45842">
              <rect width="59" height="21" fill="white" transform="translate(59.5 21) rotate(180)"/>
            </clipPath>
          </defs>
        </svg>

        назад
      </router-link
      >
      <router-link :to="{name: 'home'}" class="screen__button button">
        начало
        <svg width="59" height="21" viewBox="0 0 59 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M0 8.74705H37.7155C37.4603 5.7056 36.6403 2.73888 35.2976 0L59 10.5L35.2976 21C36.6578 18.2633 37.5015 15.2977 37.7861 12.253H0V8.71164V8.74705Z"
              fill="#2A335C"
          />
        </svg>
      </router-link>
    </template>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    pagePrev: String,
    pageNext: String,
  },
  computed: {
    showBackButton() {
      return this.$route.name !== 'page-1' && this.$route.name !== 'page-35'
    }
  }
}
</script>

<style scoped>

</style>