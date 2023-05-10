<template>
    <div>
<h1 class="my-6 font-semibold text-2xl">My Gallary</h1>
<table class="w-3/4 table-auto mx-auto text-sm text-left text-gray-700 rounded-t-lg overflow-hidden">
  <thead class="text-xs text-white uppercase bg-gradient-to-r to-orange-400 via-red-400 from-red-600">
    <tr>
      <th scope="col" class="py-3 px-6">Id</th>
      <th scope="col" class="py-3 px-6">Car Model</th>
      <th scope="col" class="py-3 px-6">Model Year</th>
      <th scope="col" class="py-3 px-6">Details</th>
      <th scope="col" class="py-3 px-6">Action</th>
    </tr>
  </thead>
  <tbody >
    <tr class="border-b" v-for="car in cars" :key="car.id">
      <td class="py-3 px-6 text-red-500">{{ car.id }}</td>
      <td class="py-3 px-6">{{ car.car_model }}</td>
      <td class="py-3 px-6 text-red-500">{{ car.car_model_year }}</td>
      <td class="py-3 px-6"><router-link class="hover:underline font-semibold" :to="`/cars/${car.id}`">See more</router-link></td>
      <td class="py-3 px-6"><button class="bg-red-400 rounded-lg py-2 px-4 text-white capitalize" @click="handleDelete(car.id)" >delete</button></td>
    </tr>

  </tbody>
</table>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name:'allCars',
        data(){
            return{
                cars:[]
            }
        },
        created(){
            this.getAllCars()
        },
        methods:{
            getAllCars(){
                axios.get('http://localhost:3004/cars')
                .then((res)=>{
                    this.cars = res.data
                })
                .catch((err)=>{
                    console.log(err)
                })
            },
            handleDelete(id){
                axios.delete(`  http://localhost:3004/cars/${id}`)
                .then((res)=>{
                    console.log(res.data)
                    this.getAllCars()
                }).catch((err)=>{
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped>

</style>