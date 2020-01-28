<template>
  <div class="home">
    {{ getAllCats.length }}
    {{ animalsCount }}
    <button @click="toggelPetForm" class="btn btn-primary"> Add new Per </button>
    <b-form @submit.prevent="handleSubmit"  v-if="showPet">

      <b-form-group id="input-group-2" label="Pet's Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.species"
          :options="['cats','dogs']"
          required
        ></b-form-select>
      </b-form-group>

     <b-form-group id="input-group-2" label="Pet's Age:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="formData.age"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      showPet: false,
      formData: {
        name: '',
        age: 0,
        species: null
      }
    }
  },
  computed: {
    ...mapGetters([
      'animalsCount',
      'getAllCats'
    ])
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    toggelPetForm () {
      this.showPet = !this.showPet
    },
    handleSubmit () {
      const { species, name, age } = this.formData
      const payLoad = {
        species,
        pet: {
          name,
          age
        }
      }
      this.addPet(payLoad)
      this.formData = {
        name: '',
        age: 0,
        species: null
      }
    }
  }
}
</script>
