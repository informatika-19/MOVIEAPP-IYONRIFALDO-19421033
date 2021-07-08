<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-blue-grey-14">
      <q-toolbar>
        <q-btn dense flat round  @click="leftDrawerOpen = !leftDrawerOpen" icon="menu"/>
        <q-space></q-space>
        <q-btn flat round>
        <q-avatar>
          <img src="https://th.bing.com/th/id/Rba8d781a7efdb64a9faaa6a7a8cd2944?rik=g9C1kQwn1eCrQg&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2f6%2fb%2ff%2f8%2f1516154399687998636clipart-administrative-assistant-day.hi.png&ehk=dkOc%2fIFexhkGdb2sJiuSAfb1AeAK3T8gG3wf1XrDrwE%3d&risl=&pid=ImgRaw">
        </q-avatar>
         <q-menu>
          <q-list style="min-width: 100px">
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Profile</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup @click="logout()">
              <q-item-section>Log Out</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
        </q-btn>
        </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :breakpoint="500"
      class="text-white bg-primary"
    >
      <q-scroll-area class="fit">
        <q-list>
          <q-item class="justify-center text-center q-mt-md">
                <div>
                  <q-avatar size="120px">
                    <img src="https://th.bing.com/th/id/Rba8d781a7efdb64a9faaa6a7a8cd2944?rik=g9C1kQwn1eCrQg&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2f6%2fb%2ff%2f8%2f1516154399687998636clipart-administrative-assistant-day.hi.png&ehk=dkOc%2fIFexhkGdb2sJiuSAfb1AeAK3T8gG3wf1XrDrwE%3d&risl=&pid=ImgRaw">
                  </q-avatar>
                  <div class="text-weight-bold q-mt-md">{{ $q.localStorage.getItem('DataUser').namaLengkap }}</div>
                  <div>Aplikasi Penjualan DVD</div>
                </div>
              </q-item>

          <q-item clickable active-class="active" v-ripple exact :to="{ name: 'dashboardAdmin' }">
            <q-item-section avatar>
              <q-icon name="dashboard"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Dashboard</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable active-class="active" v-ripple exact :to="{ name: 'DataDVD' }">
            <q-item-section avatar>
              <q-icon name="dashboard"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Data DVD</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable active-class="active" v-ripple exact :to="{ name: 'InputBarang' }">
            <q-item-section avatar>
              <q-icon name="input"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Input DVD</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable active-class="active" v-ripple exact :to="{ name: 'DataUser' }">
            <q-item-section avatar>
              <q-icon name="supervisor_account"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Data User</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container class="bg-grey-3">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    logout () {
      this.$q.localStorage.remove()
      this.$router.push({ name: 'loginPage' })
    }
  }
}
</script>
<style scoped>
.active {
  color: #000000;
  background-color: #ededed;
  padding-right: 10px;
}
</style>
