<template>
    <div>
        <h1> Cats for Adaption </h1>
       <b-table striped hover :items="cats">

      <template v-slot:cell(name)="data">
        <!-- `data.value` is the value after formatted by the Formatter -->
        <router-link :to="`/pets/cats/${data.index}`">{{ data.value }}</router-link>
      </template>

       </b-table>
    </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapState } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'cats'
    ])
  }
}
</script>
