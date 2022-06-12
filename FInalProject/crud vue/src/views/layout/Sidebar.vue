<template>
  <div>
    <nav style="z-index: -10" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="position-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item" style="cursor: pointer">
            <a class="nav-link" aria-current="page" @click="gantiMenu('dashboard')">
              <b-icon icon="grid1x2-fill" class="align-text-bottom" aria-hidden="true"/>
              Dashboard
            </a>
          </li>
          <li class="nav-item" style="cursor: pointer">
            <a class="nav-link" @click="gantiMenu('TablePengguna')">
              <b-icon icon="people-fill" class="align-text-bottom" aria-hidden="true"/>
              Master Pengguna
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    gantiMenu(data) {
      if (data === 'dashboard') {
        this.$router.push('/')
      } else if (data === 'TablePengguna') {
        this.$router.push('/table-pengguna')
      }
    }
  }
}
</script>
