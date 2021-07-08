<template>
    <q-layout>
        <q-page-container>
            <q-page padding class="bg-blue-grey-1">
                <div class="row">
                    <q-card class="fixed-center col-md-4 col-xs-12">
                        <q-card-section>
                            <div class="text-h6">
                                Halaman Register
                            </div>
                            <q-form
                                @submit="onSubmit"
                            >
                                <q-input
                                v-model="username"
                                label="Username"
                                :rules="[
                                val => val && val.length > 0 || 'Tolong Ketik Username'
                                ]"
                                />
                                <q-input
                                v-model="namaLengkap"
                                label="Nama Lengkap"
                                :rules="[
                                val => val && val.length > 0 || 'Masukkan Nama Lengkap'
                                ]"
                                />
                                <q-input
                                 v-model="Email"
                                label="Email"
                                :rules="[
                                val => val && val.length > 0 || 'Masukkan Email Anda'
                                ]"
                                  />
                                <q-input
                                 v-model="password"
                                label="Password"
                                type="password"
                                :rules="[
                                val => val && val.length > 0 || 'Harap Isi Password'
                                ]"
                                />
                                <div class="q-gutter-md">
                                    <q-btn label="Register" type="submit" unelevated color="primary"/>
                                    <q-btn label="Login" :to="{ name: 'loginPage' }" unelevated color="primary" flat/>
                                </div>
                            </q-form>
                        </q-card-section>
                    </q-card>
                </div>
            </q-page>
        </q-page-container>
    </q-layout>
</template>
<script>
export default {
  data () {
    return {
      username: null,
      namaLengkap: null,
      Email: null,
      password: null
    }
  },
  methods: {
    onSubmit () {
      this.$axios.post('user/register', {
        username: this.username,
        namaLengkap: this.namaLengkap,
        Email: this.Email,
        password: this.password
      }).then(res => {
        if (res.data.sukses) {
          this.$showNotif(res.data.pesan, 'positive')
          this.$router.push({ name: 'loginPage' })
        } else {
          this.$showNotif(res.data.pesan, 'negative')
        }
      })
    }
  }
}
</script>
