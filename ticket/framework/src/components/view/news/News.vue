<template>
  <div class="news">
		<template>
			<el-tabs v-model="activeName" style="margin-top: 1.5rem;">
				<el-tab-pane :label="`已读消息(${tableData1.length})`" name="first"></el-tab-pane>
				<el-tab-pane :label="`未读消息(${tableData2.length})`" name="second"></el-tab-pane>
			</el-tabs>
		</template>
		<el-table :data="data" style="width: 100%">
			<el-table-column prop="name" label="内容">
			</el-table-column>
			<el-table-column prop="date" label="日期" width="180" align="center">
			</el-table-column>
			<el-table-column label="操作" width="120" align="center">
				<template slot-scope="scope">
					<el-button v-if="activeName==='first'" @click.native.prevent="deleteRow(scope.$index, data, scope.row)">标记已读</el-button>
					<el-button v-else type="danger" @click.native.prevent="deleteRow(scope.$index, data, scope.row)">删除已读</el-button>
				</template>
			</el-table-column>
		</el-table>
		<div style="margin-top: 2rem;">
			<el-button type="primary" v-if="this.activeName=='first'" @click="readAll">全部已读</el-button>
			<el-button type="danger" v-else @click="deleteALl">删除全部</el-button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			activeName:"first",
			data: [],
			tableData1: [{
				date: '2016-05-02',
				name: '今晚将进行系统维护',
			}, {
				date: '2016-05-04',
				name: '今晚将进行系统维护',
			}, {
				date: '2016-05-01',
				name: '今晚将进行系统维护',
			}, {
				date: '2016-05-03',
				name: '今晚将进行系统维护',
			}],
			tableData2: [{
				date: '2016-05-02',
				name: '今晚将进行系统维护',
			}, {
				date: '2016-05-04',
				name: '今晚将进行系统维护',
			}, {
				date: '2016-05-01',
				name: '今晚将进行系统维护',
			}],
		}
	},
	created() {
		this.data = this.tableData1;
	},
	watch: {
		activeName() {
			if (this.activeName === 'first') {
				this.data = this.tableData1;
			} else {
				this.data = this.tableData2;
			}
		},
	},
	methods: {
		readAll() {
			for (var i = 0; i < this.data.length; i++) {
				this.tableData2.push(this.tableData1[i]);
			}
			setTimeout(() => {
				this.data = [];
				this.tableData2 = [];
			}, 100)
		},
		deleteALl(){
			this.data = [];
			this.tableData2 = [];
		},
		deleteRow(index, rows, row) {
			rows.splice(index, 1);
			if(this.activeName=='first'){
				this.tableData2.push(row);
			}	
		},
	},
}
</script>

<style scoped>
    >>>.el-tabs__nav .el-tabs__item {
		font-size: 20px;
	}

	.news {
		width: 1143px;
	}
</style>