<template>
  <a href="https://vuepress.vuejs.org" target="_blank">{{ linktext }}</a>
</template>

<script>
export default {
  props: {
  linktext: {
    default: 'VuePress',
    type: String
  }
}
}
</script>