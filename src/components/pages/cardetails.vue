<template>
  <div>
    <h1 class="my-6 font-semibold text-2xl">Car Details</h1>
    <div class="w-[400px] bg-white border border-gray-200 rounded-lg shadow mx-auto">
      <a href="#">
          <img class="rounded-t-lg" :src="image" alt="Car" />
      </a>
      <div class="p-5 text-start">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-red-500">Model: {{ model }}</h5>
          <p class="mb-1 font-normal text-gray-700">Car description and specifications. Information about car.</p>
          <div class="mb-1 font-semibold">
            <span class="text-sm text-blue-400 pe-5">Car_ID: {{ id }}</span>
            <span class="text-sm text-amber-400 pe-5">Year: {{ year }}</span>
            <span class="text-sm text-green-400 pe-5">Color: {{ color }}</span>
          </div>
          <h6 class="text-sm text-red-500">VIN: {{ VIN }}</h6>
          <button class="inline-flex items-center mt-5 px-3 py-2 text-sm font-medium text-center text-white bg-stone-950 rounded-lg hover:bg-stone-900 focus:outline-none" @click="back">Go Back</button>
      </div>
  </div>
  <div v-if="flag === false">
    <form @submit.prevent="updateCar" class="w-[400px] mx-auto border-2 rounded-lg mt-5 border-gray-200 shadow p-5 text-end">
      <h2 class="my-4 font-semibold text-center text-xl">Edit Details</h2>
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
      </div>
      <button class="inline-flex items-center mt-5 px-3 py-2 text-sm font-medium text-center text-white bg-stone-950 rounded-lg hover:bg-stone-900 focus:outline-none">Submit</button>
    </form>
  </div>
  <div class="my-3 flex justify-content-between mx-auto px-5 w-[400px] gap-5">
      <button class="inline-flex items-center mt-5 px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-400 focus:outline-none" @click="flag = true">Preview</button>
      <button class="inline-flex items-center mt-5 px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-400 focus:outline-none" @click="flag = false">Update</button>
  </div>
</div>
</template>
<script>
import axios from "axios";
export default {
  name: "userDetails",
  data() {
    return {
      id: "",
      model:'',
      year:'',
      color:'',
      VIN: "",
      image: "",
      flag:true
    };
  },
  created() {
    this.getCarById();
  },
  methods: {
    getCarById() {
      this.id = this.$route.params.id;
      // console.log(this.id)
      axios
        .get(`http://localhost:3004/cars/${this.id}`)
        .then((res) => {
        this.model=res.data.car_model;
        this.year = res.data.car_model_year;
        this.color = res.data.color
        this.VIN = res.data.car_vin
        this.image = res.data.image
        })
        .catch((err) => {
          console.log(err);
        });
    },
    back(){
        this.$router.push('/')
    },
    updateCar(){
        this.id = this.$route.params.id
        axios.put(`http://localhost:3004/cars/${this.id}`,{
            image: this.image,
            car_model :this.model,
            car_model_year :this.year,
            car_vin: this.VIN,
            color :this.color,
        }).then(()=>{
            this.$router.push('/cars')
        }).catch((err)=>{
            console.log(err)
        })
    }
  },
};
</script>

<style scoped></style>
