<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-color v-model="rgba" class="my-picker" />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'First',

  data () {
    return {
      tab: 'mails',
      splitterModel: 20,
      slide: 'first',
      rgba: 'rgba(255,0,255,0.8)'
    }
  }
}
</script>

<style lang="sass">
.paralax-box
  width: 100%;
</style>

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>
