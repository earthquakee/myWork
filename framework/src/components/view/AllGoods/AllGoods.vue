<template>
  <div class="allgoods">
    <div class="search">
        <el-input v-model="input" placeholder="请输入内容" style="width:70%">
            <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
    </div>
    <div class="goodlist" v-for="item in data" :key="item.id">
        <img :src="item.img" alt="">
        <div class="all">
            <div style="font-size: 2rem;">{{item.name}}</div>
            <div>{{item.address}}</div>
            <div style="color: #999999;">{{item.DetailedAddress}}</div>
            <div style="color: #999999;">{{item.details}}</div>
        </div>
        <div class="scenic_spot">
            <strong style="color: #FF0000;">¥<b style="font-size: 2rem;">66</b></strong>起
            <div>
                <el-button type="primary" @click="go">查看景点>></el-button>
            </div>
            <span>销量:1235</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            input:'',
            data:[]
        }
    },
    created() {
        this.$api.get("./table.json").then((res) => {
            this.data = res.orderData;
        })
    },
    methods: {
        go() {
            this.$router.push("/scenic_spot_details");
        },
    },
}
</script>

<style>
    .search{
        margin-top: 2rem;
        text-align: center;
    }
    .goodlist{
        display: flex;
        border: 1px solid #e6ece8;
        margin-top: 1rem;
    }
    img{
        width: 300px; 
        height: 200px;
    }
    .all{
        width: 600px;
        padding: 1rem;
    }
    .scenic_spot{
        border-left: 1px dashed #E6ECE8;
		display: flex;
		width: 240px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
        margin-top: 30px;
    }
    .scenic_spot div{
        margin: 10px 0;
    }
</style>