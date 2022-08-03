<template>
  <div class="header">
    <div class="header_name">旅游购票系统</div>
    <div style="display:flex;width:calc(100vw-400px);min-width:500px">
        <el-menu v-if="this.$store.state.identity===0" router mode="horizontal" class="el-menu-demo" background-color='steelblue' text-color="#000000" active-text-color="#ffd04b">
            <el-menu-item title="首页" index="homepage">首页</el-menu-item>
            <el-menu-item title="个人中心" index="personal">个人中心</el-menu-item>
            <el-menu-item title="消息中心" index="news">消息中心</el-menu-item>
            <el-menu-item title="订单管理" index="order">订单管理</el-menu-item>
        </el-menu>
    </div>
    <div class="header_username">
        <div style=" display: flex;align-items: center;margin-right: 2rem;">
            <el-dropdown @command="handleCommand" trigger="click">
                <span class="el-dropdown-link"><i class="el-icon-arrow-down el-icon--right"></i></span>
                <el-dropdown-menu>
                    <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    computed: {
        activeIndex() {
            return this.$route.path.replace('/', '');
        }
    },
    methods: {
        handleCommand(command){
            if(command === 'logout'){
                this.$router.push('/login')
            }
        }
    },
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .header{
        display: flex;
        position: relative;
        height:60px;
        width: 100%;
        margin-top: 0;
        background-color: steelblue;
    }

    .el-menu-demo{
        height: 50px;
    }

    .el-menu.el-menu--horizontal {
        border-bottom: none;
    }
    .el-menu-item {
        padding: 0 20px;
    }
    .el-menu-item:nth-of-type(1) {
        margin-left: 50px;
    }
    .header_name {
        display: flex;
		align-items: center;
		padding-left: 1rem;
		width: 200px;
		min-width: 190px;
		font-size: 2rem;
	}

    .header_username {
        display: flex;
        justify-content: flex-end;
        position: absolute;
        top: 0;
        right: 0;
		width: 200px;
        height: 100%;
	}

    .el-dropdown-menu{
        padding: 10px;
    }

    .el-dropdown-link {
		cursor: pointer;
		color: #000000;
		font-size: 1rem;
	}

    .el-icon-arrow-down {
		font-size: 12px;
	}
</style>