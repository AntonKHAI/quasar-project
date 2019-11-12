<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />
        <q-toolbar-title>
          My App
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <router-link to="/">
          <q-item-label header>Menu Links</q-item-label>
        </router-link>
        <router-link tag="li" to="/src/pages/First.vue">
          <q-item clickable>
            <q-item-section avatar>
              <q-icon name="school" />
            </q-item-section>
            <q-item-section>
              <q-item-label>First Item</q-item-label>
            </q-item-section>
          </q-item>
        </router-link>
        <router-link tag="li" to="/src/pages/Second.vue">
          <q-item clickable>
            <q-item-section avatar>
              <q-icon name="code" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Second Item</q-item-label>
            </q-item-section>
          </q-item>
        </router-link>
        <router-link tag="li" to="/src/pages/Third.vue">
          <q-item clickable>
            <q-item-section avatar>
              <q-icon name="record_voice_over" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Third Item</q-item-label>
            </q-item-section>
          </q-item>
        </router-link>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style lang="sass">
li
  list-style-type: none;

.router-link-exact-active
  background: #dedede

</style>
