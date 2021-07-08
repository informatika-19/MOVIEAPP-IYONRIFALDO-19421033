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
              <div class="text-h6">Data DVD </div>
              <div>Data Katalog DVD Anda</div>
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
          <q-td key="judulFilm" :props="props">
            {{ props.row.judulFilm }}
          </q-td>
          <q-td key="harga" :props="props">
              Rp. {{ props.row.harga }},-
          </q-td>
          <q-td key="tahun" :props="props">
              {{ props.row.tahun }}
          </q-td>
          <q-td key="genre" :props="props">
             {{ props.row.genre }}
          </q-td>
          <q-td key="deskripsi" :props="props">
              <div class="ellipsis" style="max-width: 200px">
                {{ props.row.deskripsi }}
              </div>
          </q-td>
          <q-td key="gambar" :props="props">
              <q-img
                :src="`${$baseImageURL}/${props.row.image}`"
                spinner-color="white"
              />
          </q-td>
          <q-td key="aksi" :props="props">
            <div class="row q-gutter-md">
              <q-btn :to="{ name: 'formEditDVD', params: { id: props.row._id}}" label="Edit" icon="edit" color="warning" unelevated/>
              <q-btn  @click="deleteMovie(props.row._id)" label="Hapus" icon="delete" color="negative" unelevated/>
            </div>
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
        { name: 'judulFilm', align: 'left', label: 'Judul Film', field: 'judulFilm', sortable: true },
        { name: 'harga', align: 'left', label: 'Harga', field: 'harga', sortable: true },
        { name: 'tahun', align: 'left', label: 'Tahun', field: 'tahun', sortable: true },
        { name: 'genre', align: 'left', label: 'Genre', field: 'genre', sortable: true },
        { name: 'deskripsi', align: 'left', label: 'Deskripsi', field: 'deskripsi', sortable: true },
        { name: 'gambar', align: 'left', label: 'Gambar', field: 'gambar' },
        { name: 'aksi', align: 'left', label: 'Aksi', field: 'aksi' }
      ],
      data: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.get('movie/getall')
        .then((res) => {
          if (res.data.sukses) {
            this.data = res.data.data
          } else {
            this.showNotif(res.data.pesan, 'negative')
          }
        })
    },
    deleteMovie (id) {
      this.$q.dialog({
        title: 'Konfirmasi',
        message: 'Apakah Anda Yakin ?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$axios.delete(`movie/delete/${id}`)
          .then(res => {
            if (res.data.sukses) {
              this.$showNotif(res.data.pesan, 'positive')
              this.getData()
            } else {
              this.$showNotif(res.data.pesan, 'negative')
            }
          })
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
