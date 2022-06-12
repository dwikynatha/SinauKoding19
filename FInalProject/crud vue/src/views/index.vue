<template>
  <div class="container-fluid">
    <div style="margin: 75px">
      <div class="row">
        <div class="col-md-6 row">
          <a><b>Master Pengguna</b></a>
        </div>
        <div class="col-md-6" align="right">
          <b-button variant="primary" size="sm" @click="tambahData">Tambah Data</b-button>
        </div>
      </div>
      <div align="center" style="margin-top: 30px">
        <b-table :busy="isBusy" hover striped :per-page="perPage" :current-page="currentPage" :items="items" :fields="fields" responsive="sm">
          <template #table-busy>
            <div class="text-center text-danger my-2">
              <b-spinner class="align-middle"></b-spinner>
              <strong>Loading...</strong>
            </div>
          </template>
          <template #cell(actions)="row">
            <b-button style="margin-right: 5px" size="sm" variant="info" @click="view(row)" class="mr-2">View</b-button>
            <b-button size="sm" variant="success" @click="update(row)" class="mr-2">Update</b-button>
            <b-button style="margin-left: 5px" size="sm" variant="danger" @click="deleted(row)" class="mr-2">Delete</b-button>
          </template>
        </b-table>
        <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            first-text="First"
            prev-text="Prev"
            next-text="Next"
            last-text="Last"
        ></b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    msg: String
  },
  data() {
    return {
      isBusy: false,
      perPage: 8,
      currentPage: 1,
      rows: 20,
      sortBy: 'age',
      sortDesc: false,
      fields: [
        { key: 'name'},
        { key: 'email'},
        { key: 'gender'},
        { key: 'status'},
        { key: 'actions'}
      ],
      items: []
    }
  },
  created() {
    this.datatables()
  },
  methods: {
    async datatables() {
      this.isBusy = true;
      const config = {
        headers: { Authorization: `Bearer 9690fb8196780608aa119e9cadbf3901b8d6679995f2667a259a1f07fb7617cd` }
      }
      let data = await axios.get('https://gorest.co.in/public/v2/users',config)
      this.items = data.data
      this.isBusy = false;
    },
    async view(val) {
      const param = val.item.id
      let data = await axios.get('https://gorest.co.in/public/v2/users/' + param)
      console.log('val data', data)
    },
    async deleted(val) {
      const header = {
        headers: {
          Authorization: `Bearer 9690fb8196780608aa119e9cadbf3901b8d6679995f2667a259a1f07fb7617cd`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      }
      let ini = this
      let data = await axios.delete('https://gorest.co.in/public/v2/users/' + val.item.id, header).then(function (){
        ini.datatables()
      })
      console.log(data)
    },
    update(data) {
      this.$router.push('/update/'+ data.item.id)
    },
    tambahData() {
      this.$router.push('/tambah')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
