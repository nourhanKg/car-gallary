<template>
  <div>
    <h1 class="my-6 font-semibold text-2xl">Add new Car</h1>
    <form action="" @submit.prevent="createCar" class="w-[400px] mx-auto border-2 rounded-lg mt-5 border-gray-200 shadow p-5 text-end">
      <div class="columns-1">
        <div class="text-start mb-3">
          <label for="Car_Model" class="block text-sm font-medium leading-6 text-red-500">Car_Model</label>
            <div class="mt-2">
              <input type="text" id="Car_Model" class="block w-full rounded-md border-0 py-1.5 px-1.5 text-red-500 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-200 sm:text-sm sm:leading-6" v-model="model"/>
            </div>
        </div>
        <div class="text-start mb-3">
            <label for="Year" class="block text-sm font-medium leading-6 text-amber-400 ">Year</label>
            <div class="mt-2">
              <input type="text" id="Year" class="block w-full rounded-md border-0 py-1.5 px-1.5 text-amber-400  shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400  sm:text-sm sm:leading-6" v-model="year"/>
            </div>
        </div>
        <div class="text-start">
            <label for="postal-code" class="block text-sm font-medium leading-6 text-green-400 ">Color</label>
            <div class="mt-2">
              <input type="text" id="postal-code" class="block w-full rounded-md border-0 py-1.5 px-1.5 text-green-400  shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6" v-model="color"/>
            </div>
          </div>
          <div class="text-start">
            <label for="postal-code" class="block text-sm font-medium leading-6 text-blue-400 ">Image</label>
            <div class="mt-2">
              <input type="text" id="postal-code" class="block w-full rounded-md border-0 py-1.5 px-1.5 text-blue-400  shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6" v-model="image"/>
            </div>
          </div>
          <div class="text-start">
            <label for="postal-code" class="block text-sm font-medium leading-6 text-purple-400 ">VIN</label>
            <div class="mt-2">
              <input type="text" id="postal-code" class="block w-full rounded-md border-0 py-1.5 px-1.5 text-purple-400  shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:text-sm sm:leading-6" v-model="VIN"/>
            </div>
          </div>
      </div>
      <button class="inline-flex items-center mt-5 px-3 py-2 text-sm font-medium text-center text-white bg-stone-950 rounded-lg hover:bg-stone-900 focus:outline-none">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "createCar",
  data(){
    return{
      model:'',
      year:'',
      color:'',
      VIN: "",
      image: "",
    }
  },
  methods:{
    createCar(){
        axios.post("http://localhost:3004/cars",{
            car_model :this.model,
            car_model_year :this.year,
            color :this.color,
            car_vin: this.VIN,
            image: this.image
        }).then((res)=>{
            console.log(res.data)
            this.$router.push('/cars')
        }).catch((err)=>{
            console.log(err)
        })
    }
  }
};
</script>

<style scoped></style>
