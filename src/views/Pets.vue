<template>
    <div>
       <h1> {{  pets ().name }} ({{$route.params.species}}) </h1>
       <p>{{  pets ().age }} years old</p>
       <p> breed : {{  pets ().breed }}</p>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'dogs',
      'cats'
    ])
  },
  methods: {
    pets () {
      const anamil = this[this.$route.params.species][this.$route.params.id]
      return anamil
    }
  }
}
</script>
