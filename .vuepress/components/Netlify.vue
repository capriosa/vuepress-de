<template>
  <a href="https://netlify.com" target="_blank">{{ linktext }}</a>
</template>

<script>
export default {
  props: {
  linktext: {
    default: 'Netlify',
    type: String
  }
}

</script>