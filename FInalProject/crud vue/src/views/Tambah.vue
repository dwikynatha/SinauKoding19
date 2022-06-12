<template>
  <div class="container-fluid">
    <div style="margin: 70px">
      <div class="row">
        <a><b>Tambah Pengguna</b></a>
      </div>
      <div style="margin-top: 20px" >
        <b-form>
          <b-form-group label="Nama:">
            <b-form-input
                v-model="name"
                placeholder="Masukkan nama pengguna"
            ></b-form-input>
          </b-form-group>

          <b-form-group label="Email:">
            <b-form-input
                v-model="email"
                type="email"
                placeholder="Masukkan email pengguna"
            ></b-form-input>
          </b-form-group>

          <b-form-group label="Gender:" >
            <select v-model="gender" class="form-select">
              <option value="-" disabled>Pilih Gender</option>
              <option value="male">Male</option>
              <option value="Female">Female</option>
            </select>
          </b-form-group>

          <b-form-group label="Status:">
            <select v-model="status" class="form-select">
              <option value="-" disabled>Pilih Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </b-form-group>

          <div class="row justify-content-between" style="margin-top: 80px">
            <div class="col-md-2" style="margin-left: 40px">
              <b-button @click="$router.go(-1)" variant="danger">Kembali</b-button>
            </div>
            <div class="col-md-2">
              <b-button @click="simpanData" variant="success">Simpan</b-button>
            </div>
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      name: '',
      email: '',
      status: '-',
      gender: '-'
    }
  },
  methods: {
    async simpanData() {
      const header = {
        headers: {
          Authorization: `Bearer 9690fb8196780608aa119e9cadbf3901b8d6679995f2667a259a1f07fb7617cd`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      }
      let dataInput = {
        name: this.name,
        email: this.email,
        status: this.status,
        gender: this.gender
      }
      let data = await axios.post('https://gorest.co.in/public/v2/users', dataInput, header).then(function () {
        console.log('data berhasil disimpan')
      }).catch(function (error) {
        console.error(error)
      })
      console.log('data', data)
    }
  }
}
</script>
