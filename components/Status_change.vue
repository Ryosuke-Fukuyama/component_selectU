<template>
  <section>
    <select v-model="selected_status" @click="update()"> <!-- "$store.commit('status_change/statusChange')"> -->
      <option>initial</option>
      <option>calling</option>
      <option>done</option>
      <option>pending</option>
      <option>noshow</option>
      <option>complete</option>
    </select>
  </section>
</template>

<script>
export default {
  data: () => ({

  })
}
</script>

<style>

</style>
