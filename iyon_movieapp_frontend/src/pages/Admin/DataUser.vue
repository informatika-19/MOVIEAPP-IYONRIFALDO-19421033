<template>
  <q-page padding>
    <div class="row q-mb-md col-gutter-md">
      <div class="col-md-12 col-xs-12 col-lg-12">
        <div class="row">
          <div class="col-auto">
            <div class="left blue"></div>
          </div>
          <div class="col">
             <q-banner inline-actions class="text-blue-grey-14">
              <div class="text-h6">Data User </div>
              <div>Detail Pelanggan Movie App</div>
            </q-banner>
          </div>
        </div>
      </div>
    </div>
    <q-card flat>
       <q-table
      :rows="data"
      flat
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="username" :props="props">
            {{ props.row.username }}
          </q-td>
          <q-td key="namaLengkap" :props="props">
              {{ props.row.namaLengkap }}
          </q-td>
          <q-td key="Email" :props="props">
              {{ props.row.Email }}
          </q-td>
        </q-tr>
      </template>
    </q-table>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        { name: 'username', align: 'left', label: 'Username', field: 'username', sortable: true },
        { name: 'namaLengkap', align: 'left', label: 'Nama Lengkap', field: 'namaLengkap', sortable: true },
        { name: 'Email', align: 'left', label: 'E-Mail', field: 'Email' }
      ],
      data: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.get('user/getalluser')
        .then((res) => {
          if (res.data.sukses) {
            this.data = res.data.data
          } else {
            this.$showNotif(res.data.pesan, 'negative')
          }
        })
    }
  }
}
</script>
<style scoped>
.left {
  width: 3px;
  height: 100%;
  background-color: aqua;
}
</style>
