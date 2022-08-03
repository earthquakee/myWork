<template>
  <div class="homelist">
    <div style="display: flex;margin-top:20px">
			<div class="left_name">
				<strong>订票中心</strong>
			</div>
			<div class="right_name">
				<el-input placeholder="请输入内容">
					<el-button slot="append" icon="el-icon-search"></el-button>
				</el-input>
			</div>
		</div>
    <div style="display: flex;">
		<div class="left_sidelist">
			<strong class="title_name">&nbsp;热游榜</strong>
			<div class="index_top" style="padding-left:1rem;">
				<h4>浙江省博物馆</h4>
				<h4>西湖</h4>
				<h4>灵隐寺</h4>
				<h4>法喜寺</h4>
				<h4>雷峰塔</h4>
				<h4>河坊街</h4>
				<h4>南宋御街</h4>
			</div>
		</div>
		<div style="margin-top: 1rem;">
			<img style="width: 100%;height: 100%;" src="../../../assets/img/indeximg.jpg">
		</div>
	</div>
    <div class="bar">
		<div class="hotdes">热门目的地</div>
		<div class="more" @click="to">
			更多>>
		</div>
	</div>
	<div style="display: flex;">
		<div style="width: 226px;">
			<img src="../../../assets/img/top.jpg" style="margin-top: 1rem">
			<span class="word">热门主题玩法</span>
		</div>
		<div class="rightword">
			<div class="top_li" @click="godetails()" v-for="item in data" :key="item.id">
				<img :src="item.img" style="width: 211px;height: 150px;" alt="">
				<div style="padding: 0.25rem;">
					<div style="font-weight: bold;">{{item.name}}</div>
					<div style="font-size: 0.8rem;color: #707371;">{{item.details}}</div>
					<div><strong style="color: #FF0000;">¥<b style="font-size: 1.5rem;">{{item.price}}</b></strong>起
					</div>
				</div>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			data: [{
					id: 1,
					img: require('../../../assets/img/temple.jpg'),
					name: '法喜寺',
					details: '踏青游春',
					price: 10,
				},
				{
					id: 2,
					img: require('../../../assets/img/temple.jpg'),
					name: '法喜寺',
					details: '踏青游春',
					price: 10,
				},
				{
					id: 3,
					img: require('../../../assets/img/temple.jpg'),
					name: '法喜寺',
					details: '踏青游春',
					price: 10,
				},
				{
					id: 4,
					img: require('../../../assets/img/temple.jpg'),
					name: '法喜寺',
					details: '踏青游春',
					price: 10,
				},
				{
					id: 5,
					img: require('../../../assets/img/temple.jpg'),
					name: '法喜寺',
					details: '踏青游春',
					price: 10,
				},
				{
					id: 6,
					img: require('../../../assets/img/temple.jpg'),
					name: '法喜寺',
					details: '踏青游春',
					price: 10,
				}, {
					id: 7,
					img: require('../../../assets/img/temple.jpg'),
					name: '法喜寺',
					details: '踏青游春',
					price: 10,
				},
				{
					id: 8,
					img: require('../../../assets/img/temple.jpg'),
					name: '法喜寺',
					details: '踏青游春',
					price: 10,
				},
			]
		};
	},
	methods: {
		godetails(){
			this.$router.push('/scenic_spot_details');
		},
		to() {
			this.$router.push('/allgoods');
		}
	},
}
</script>

<style>
  .homelist{
	margin-bottom: 1rem;
  }
  .left_name{
    width: 50%; 
    display:flex;
    justify-content: center; 
    align-items: center;
    font-size: 1.5rem;
  }
  .right_name{
    text-align: center;
    width: 40%;
  }
  .left_sidelist{
    width: 500px;
    min-width: 200px; 
    height: 400px;
    margin-top: 1rem;
    margin-right: 1rem; 
    border: 1px solid #E6ECE8;
    border-radius: 4px;
  }
  .title_name{
    font-size: 1.25rem;
    margin-top:1rem;
    display: block;
  }
  .bar{
	width: 100%;
	display: flex; 
	border-bottom: 3px solid steelblue;
	margin-top: 1rem;
  }
  .bar .hotdes{
	font-size: 1.75rem;
	width: 100%;
	color: steelblue;
  }
  .more{
	justify-content: flex-end;
	align-items: center;
	width: 100px;
	cursor: pointer;
  }
  .word{
	position: relative;
	left: 40px; 
	top: -400px; 
	font-size: 1.5rem;
	color: #FFFFFF;
  }
  .rightword{
	display: flex;
	margin-top: 1rem;
	flex-wrap:wrap;
	min-width: 917px;
  }
  .top_li {
	margin-left: 1rem;
	margin-bottom: 1rem;
	height: 230px;
	border: 1px solid #E6ECE8;
	text-align: center;
  }

  .top_li:hover {
	border: 1px solid #7fffd4;
  }
</style>