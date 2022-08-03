<template>
  <div class="scenic_spot_details">
    <div class="show">
      <div style="height: 100%;">
        <el-carousel :autoplay="false" arrow="always" style="width:700px;" height="350px">
          <el-carousel-item v-for="item in imglist" :key="item.id">
            <el-image style="width:100%;height: 100%" :src="item.url"></el-image>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="detail_info">
        <strong style="font-size: 2rem;">{{this.data[0].name}}</strong>
        <div class="scenic_in">
          <div>{{this.data[0].details}}</div>
          <div><i class="el-icon-location-outline"></i>&nbsp;位 置：{{this.data[0].DetailedAddress}}</div>
          <div><i class="el-icon-edit-outline"></i>&nbsp;用户评价：{{this.pjdata.length}}&nbsp;条</div>
        </div>
        <div class="scenic_bottom">
					<div><strong style="color: #FF0000;">¥<b style=" font-size: 2rem;">{{this.data[0].price}}</b></strong>起</div>
					<div>
						<el-button type="danger" @click="check">查看评价</el-button>
					</div>
				</div>
      </div>
    </div>
    <div style="margin-top: 1rem;">
			<el-tabs type="border-card">
				<el-tab-pane label="门票">
					<div style="border: 1px solid #E6ECE8;">
						<div style="display: flex;" class="p_top">
							<div style="width:565px;">产品名称</div>
							<div style="width:280px;">产品说明</div>
							<div>价格</div>
						</div>
						<div class="p_top" v-for="(item,index) in listdata" :key="index" >
							<div style="width:600px;">{{item.name}}</div>
							<div style="width:300px;">{{item.explain}}</div>
							<div class="right_item">
								<div style="color: #FF0000;">{{item.price}}</div>
								<div>
									<el-button type="primary" @click="gotookorder(item)">立即购买</el-button>
								</div>
							</div>
						</div>
					</div>
				</el-tab-pane>
			</el-tabs>
		</div>
    <div style="margin-top: 1rem;" id="box">
			<el-tabs type="border-card" v-model="activeName">
				<el-tab-pane label="介绍" name="1">
					<div style="width: 100%;">{{this.data[0].ntroduce}}</div>
				</el-tab-pane>
				<el-tab-pane label="评价" name="2">
					<div v-for="item in pjdata" :key="item.id">
						<div style="display: flex;margin: 1rem;">
							<div>{{item.u_name}}</div>
							<div style="margin-left:2rem;">{{item.time}}</div>
						</div>
						<div>{{item.content}}</div>
						<div style="display: flex;">
							<div v-for="o in imglist" :key="o.id" style="padding: 1rem;">
								<el-image lazy :src="o.url" style="width: 150px;height: 150px;">{{o}}</el-image>
							</div>
						</div>
					</div>
				</el-tab-pane>
			</el-tabs>
		</div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			activeName: '1',
			pjdata: [
				{
					id: 1,
					u_name: "阿希希",
					time: "2021-12-20",
					content: "还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还",
				},
				{
					id: 2,
					u_name: "阿希希",
					time: "2021-12-20",
					content: "还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还",
				},
				{
					id: 3,
					u_name: "阿希希",
					time: "2021-12-20",
					content: "还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还",
				},
				{
					id: 4,
					u_name: "阿希希",
					time: "2021-12-20",
					content: "还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还",
				},
				{
					id: 5,
					u_name: "阿希希",
					time: "2021-12-20",
					content: "还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还还行还",
				},
			],
			listdata: [{
					name: "儿童票",
					explain: "小于12岁或低于1.2米",
					price: 66,
				},
				{
					name: "学生票/老年票",
					explain: "购买时出示学生证或年龄大于60岁",
					price: 70,
				},
				{
					name: "成人票",
					explain: "",
					price: 80,
				},
			],
			imglist:[
				{
						id: 1,
						url: require('../../../assets/img/pic2.jpg'),
					},
					{
						id: 2,
						url: require('../../../assets/img/pic1.jpg'),
					},
					{
						id: 3,
						url: require('../../../assets/img/pic3.jpg'),
					},
					{
						id: 4,
						url: require('../../../assets/img/pic4.jpg'),
					}, {
						id: 5,
						url: require('../../../assets/img/pic1.jpg'),
					},
					{
						id: 6,
						url: require('../../../assets/img/pic3.jpg'),
					},
			],
			data:[{
				id: 1,
				name: '西湖',
				details: '天下西湖三十六，就中最美是杭州',
				price: 66,
				address: "浙江杭州",
				DetailedAddress: "浙江省杭州市西湖区西湖街道杭州西湖风景名胜区",
				ntroduce: "西湖，位于浙江省杭州市西湖区龙井路1号，杭州市区西部，西湖景区总面积49平方千米，汇水面积为21.22平方千米，湖面面积为6.38平方千米。西湖南、西、北三面环山，湖中白堤、苏堤、杨公堤、赵公堤将湖面分割成若干水面。湖体轮廓呈近椭圆形，湖底部较为平坦，平均水深2.27米，最深约5米，最浅不到1米。西湖天然地表水源是金沙涧、龙泓涧、赤山涧（慧因涧）、长桥溪四条溪流。西湖地处中国东南丘陵边缘和中亚热带北缘，年均太阳总辐射量在100—110千卡/平方厘米之间，日照时数1800—2100小时",
			}]
		}
	},
	methods: {
		gotookorder(item){
			this.$store.commit("Ticket", item);
			this.$router.push('/pay');
		},
		check(){
			this.$el.querySelector("#box").scrollIntoView();
			this.activeName = '2';
		}
	},
}
</script>

<style>
>>>.el-tabs__nav .el-tabs__item {
		font-size: 20px;
	}
  .show{
    display: flex;
    margin-top: 2rem;
    padding: 1rem;
    border: 1px solid #E6ECE8;
  }

  .detail_info{
    width:443px;
    padding: 1rem;
    height: 100%;
  }

  .scenic_in {
		height: 180px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

  .scenic_in div {
		padding-top: 10px;
	}

  .scenic_bottom {
		display: flex;
		justify-content: space-between;
		position: relative;
		bottom: -80px;
	}

  .right_item{
    display: flex;
    justify-content: space-between;
    width: 250px;
    align-items: center;
  }

  .p_top {
		padding: 1rem;
		border-bottom: 1px solid #E6ECE8;
		display: flex;
		align-items: center;
	}
  
  .scenic_spot_details {
		width: 1143px;
	}
</style>