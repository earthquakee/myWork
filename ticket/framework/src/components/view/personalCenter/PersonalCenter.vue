<template>
  <div class="personal">
    <div style="display:flex;">
      <div class="userinfo_left">
				<div>
					<img class="edit_img" src="../../../assets/img/banner.jpg">
				</div>
				<div>普通用户</div>
				<div class="userinfo">
					用户名称:
					<span>admin</span>
				</div>
				<div class="userinfo">
					登录时间:
					<span>7.4</span>
				</div>
			</div>
      <div class="userinfo_middle">
				<div>我的日历</div>
				<div>3</div>
				<div>星期日</div>
				<div>2022.07</div>
			</div>
      <div class="userinfo_right">
				<el-card shadow="hover" :body-style="{padding: '0px'}">
					<div class="grid-content grid-con-1">
						<i class="el-icon-user-solid grid-con-icon"></i>
						<div class="grid-cont-right">
							<div class="grid-num">12330</div>
							<div>访问量</div>
						</div>
					</div>
				</el-card>
				<div style="height: 0.3125rem;"></div>
				<el-card shadow="hover" :body-style="{padding: '0px'}">
					<div class="grid-content grid-con-2">
						<i class="el-icon-message-solid grid-con-icon"></i>
						<div class="grid-cont-right">
							<div class="grid-num">12330</div>
							<div>我的消息</div>
						</div>
					</div>
				</el-card>
				<div style="height: 0.3125rem;"></div>
				<el-card shadow="hover" :body-style="{padding: '0px'}">
					<div class="grid-content grid-con-3">
						<i class="el-icon-s-goods grid-con-icon"></i>
						<div class="grid-cont-right">
							<div class="grid-num">12330</div>
							<div>数量</div>
						</div>
					</div>
				</el-card>
			</div>
    </div>
    <div style="display: flex;">
			<div class="user_order">
				<div class="user_myorder">我的订单</div>
				<div class="user_orderstate">
					<div><i class="el-icon-bank-card"></i>
						<p>待付款</p>
					</div>
					<div><i class="el-icon-takeaway-box"></i>
						<p>待使用</p>
					</div>
					<div><i class="el-icon-chat-line-square"></i>
						<p>待评价</p>
					</div>
					<div><i class="el-icon-circle-close"></i>
						<p>已取消</p>
					</div>
					<div><i class="el-icon-more-outline"></i>
						<p>全部订单</p>
					</div>
				</div>
				<div class="advice">
					<div>您买的东西太少了，这里都空空的，快去挑选合适的商品吧！</div>
				</div>
			</div>
			<div style="height: 100%;">
				<div class="user_follow">
					<div class="myfollow">我的关注/收藏</div>
					<div class="user_num">
						<div>
							<span>2</span><br>
							<span>用户关注</span>
						</div>
						<div>
							<span>4</span><br>
							<span>商品收藏</span>
						</div>
					</div>
				</div>
				<div class="regular_list">
					<div class="regular_order">常购清单<span
							class="more">更多<i class="el-icon-d-arrow-right"></i></span></div>
					<div class="goods_img" style="">
						<img src="../../../assets/img/banner.jpg" style="">
						<img src="../../../assets/img/banner.jpg" style="">
						<img src="../../../assets/img/banner.jpg" style="">
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .userinfo_left {
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
		width: 400px;
		text-align: center;
		padding: 1rem;
		border-radius: 0.25rem;
		margin: 1rem;
	}

  .edit_img{
    width:100px;
    height: 100px;
    border-radius:50%;
  }

  .edit_img:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
  }

  .userinfo_middle {
		border: 1px solid #6ec884;
		width: 400px;
		background-color: #f8fffa;
		text-align: center;
		border-radius: 0.25rem;
		margin: 1rem;
	}
  .userinfo_middle div:nth-child(1) {
		background-color: #6ec884;
		font-size: 2rem;
		color: #ffffff;
	}

	.userinfo_middle div:nth-child(2) {
		font-size: 5rem;
		color: #6ec884;
	}

	.userinfo_middle div:nth-child(3) {
		color: #6ec884;
	}

	.userinfo_middle div:nth-child(4) {
		color: #6ec884;
	}
  .userinfo_right {
		margin: 1rem;
	}

	.userinfo_right el-card:nth-child(2) {
		margin-top: 5px;
		margin-bottom: 5px;
	}

	.grid-content {
		display: flex;
		align-items: center;
		height: 60px;
	}

	.grid-cont-right {
		flex: 1;
		text-align: center;
		font-size: 14px;
		color: #999;
		padding: 10px;
	}

  .grid-num {
		width: 111px;
		font-size: 30px;
		font-weight: bold;
	}

	.grid-con-icon {
		font-size: 45px;
		width: 80px;
		height: 80px;
		text-align: center;
		line-height: 80px;
		color: #fff;
	}

	.grid-con-1 .grid-con-icon {
		background: rgb(45, 140, 240);
	}

	.grid-con-1 .grid-num {
		color: rgb(45, 140, 240);
	}

	.grid-con-2 .grid-con-icon {
		background: rgb(100, 213, 114);
	}

	.grid-con-2 .grid-num {
		color: rgb(100, 213, 114);
	}

	.grid-con-3 .grid-con-icon {
		background: rgb(242, 94, 67);
	}

	.grid-con-3 .grid-num {
		color: rgb(242, 94, 67);
	}
  .more {
		float: right;
		font-size: 1rem;
		cursor: pointer;
	}

	.more:hover {
		color: #FF0000;
	}

	.goods_img {
		height: 130px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.goods_img img {
		width: 90px;
		height: 90px;
	}

	.goods_img img:hover {
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
	}

	.user_num {
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 120px;
	}

	.user_num div {
		padding: 1rem;
		cursor: pointer;
    text-align: center;
	}
  .user_num span {
    text-align: center;
  }
	.user_num div:hover {
		color: #FF0000;
	}

	.user_follow {
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
		width: 295px;
		height: 100%;
	}

  .myfollow{
    padding: 1rem;
    font-size: 1.2rem;
    border-bottom: 2px solid #e6ece8;
  }

	.user_order {
		height: 385px;
		width: 800px;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
		margin-left: 1rem;
		margin-right: 1rem;
	}

	.user_myorder {
		padding: 1rem;
		font-size: 1.25rem;
		border-bottom: 2px solid #e6ece8;
	}

	.user_orderstate {
		display: flex;
		margin-top: 1rem;
		justify-content: space-around;
	}

	.user_orderstate div {
		padding-top: 16px;
		width: 118px;
		text-align: center;
	}

	.user_orderstate div:hover {
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
		border-radius: 4px;
		color: #FF0000;
	}

	.user_orderstate div i {
		font-size: 3rem;
	}

  .advice{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 190px;
  }
  
  .regular_list {
    width: 295px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
    margin-top: 1rem;
  }

  .regular_order{
    padding: 1rem;
    font-size: 1.2rem;
    border-bottom: 2px solid #e6ece8;
  }
</style>