<template>
  <div class="footer">
    <div class="foot">
		<span>vue2项目</span>|
		<span>阿鑫</span>|
		<span>@2018-2022</span>|
		<span>XXXXX系统</span>|
		<span>京ICP证09002463 | Copyright</span>
		<span><a href="https://element.eleme.cn/#/zh-CN" target="_blank">UI框架</a></span>
		<span><a href="https://spring.io/projects/spring-boot" target="_blank">后端架构</a></span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .footer{
    position: relative;    
    width: 100%;
	bottom: 0;
    text-align: center;
  }

  .foot{
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
    background-color: steelblue;
  }

  .foot a {
	color: #000000;
	font-size: 16px;
	text-decoration: none;
  }
  .foot a:hover {
	color: red;
	font-size: 16px;
	text-decoration: none;
  }

  .foot span {
	cursor: pointer;
  }
</style>