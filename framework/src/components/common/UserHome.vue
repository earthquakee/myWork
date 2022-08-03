<template>
  <div>
		<Header></Header>
		<div class="blank">
      <router-view></router-view>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
import Header from './part/Header'
import Footer from './part/Footer'
export default {
   components:{
        Header,
        Footer
   }
}
</script>

<style scoped>
  .blank{
    margin: 0 150px;
    margin-bottom: 1rem;
  }
</style>