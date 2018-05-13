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
  feature1,
  feature2,
  feature3
  }
}
</script>