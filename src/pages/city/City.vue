<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list></city-list>
        <city-alphabet></city-alphabet>
    </div>
</template>

<script>
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
        }
    }
</script>

<style lang="stylus" scoped>

</style>
