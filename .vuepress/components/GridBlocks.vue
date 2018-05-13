<template>
<div class="flex-wrapper">
  <div>{{ feature1 }}</div> 
  <div>{{ feature2 }}</div> 
  <div>{{ feature3 }}</div>
</div>


</template>

<script>
export default {
  props: {
  feature1: {
    type: String
  },
  feature2: {
    type: String
  },
  feature3: {
    type: String
  }
  }
}
</script>