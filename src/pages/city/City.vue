<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
        <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
    </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './compoments/Header'
import CitySearch from './compoments/Search'
import CityList from './compoments/List'
import CityAlphabet from './compoments/Alphabet'
    export default {
        name: 'City',
        components: {
            CityHeader: CityHeader,
            CitySearch: CitySearch,
            CityList:CityList,
            CityAlphabet:CityAlphabet
        },
        data(){
            return{
                cities:{},
                hotCities:[],
                letter: ''
            }
        },
        methods:{
            getCityInfo(){
                axios.get('static/mock/city.json')
                .then(this.handleGetCity)
            },
            handleGetCity(res){
                res = res.data
                if(res.ret&&res.data){
                    const data = res.data
                    this.cities = data.cities
                    this.hotCities=data.hotCities
                }
                console.log(res)
            },
            handleLetterChange(letter){
               this.letter =  letter 
            }
        },
        mounted(){
         this.getCityInfo() 
           
        }
    }
</script>

<style lang="stylus" scoped>

</style>
