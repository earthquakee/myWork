<template>
	<div class="order">
		<template>
			<el-tabs v-model="activeName">
				<el-tab-pane label="全部订单" name="1"></el-tab-pane>
				<el-tab-pane label="待付款" name="2"></el-tab-pane>
				<el-tab-pane label="待使用" name="3"></el-tab-pane>
				<el-tab-pane label="待评价" name="4"></el-tab-pane>
				<el-tab-pane label="已取消" name="5"></el-tab-pane>
			</el-tabs>
		</template>
		<template>
			<el-table :data="tableData" style="width: 100%" border>
				<el-table-column prop="id" label="订单id" width="80" align="center">
				</el-table-column>
				<el-table-column prop="name" label="名称">
				</el-table-column>
				<el-table-column prop="price" label="价格(¥)" width="100" align="center">
				</el-table-column>
				<el-table-column label="商品图(查看大图)" width="180" align="center">
					<template slot-scope="scope">
						<el-image class="table-td-thumb" :src="scope.row.img" :preview-src-list="[scope.row.img]">
						</el-image>
					</template>
				</el-table-column>
				<el-table-column prop="state" label="状态" align="center" width="100">
					<template slot-scope="scope">
						<el-tag
							:type="scope.row.state===3?'success':(scope.row.state===4?'danger':(scope.row.state===0?'warning':''))">
							{{scope.row.state|change}}
						</el-tag>
					</template>
				</el-table-column>
				<el-table-column prop="date" label="时间" align="center" width="180">
				</el-table-column>
				<el-table-column label="操作" align="center" width="120">
					<template slot-scope="scope">
						<el-button v-if="scope.row.state===3||scope.row.state===4" type="danger"
							@click.native.prevent="deleteRow(scope.$index, tableData, scope.row)">删除订单</el-button>
						<el-button v-else-if="scope.row.state===0||scope.row.state===1" type="warning"
							@click.native.prevent="deleteRow(scope.$index, tableData, scope.row)">取消订单</el-button>
						<el-button v-else type="success" @click="comment(scope.$index,scope.row)">去评价</el-button>
					</template>
				</el-table-column>
			</el-table>
		</template>
		<el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
			<span>
				<el-input type="textarea" placeholder="请输入内容" v-model="textarea" :autosize="{ minRows: 2, maxRows: 4}"
					maxlength="150" show-word-limit>
				</el-input>
			</span>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogok">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeName: '1',
				textarea: '',
				dialogVisible: false,
				orderid: '',
				tableData: [],
				data: [],

			};
		},
		created() {
			this.$api.get("./table.json").then(res => {
				this.data = res.list;
				this.tableData = this.data;
			})
			setTimeout(() => {
				if (this.$route.params.state) {
					this.activeName = this.$route.params.state.toString();
				}
			}, 100);

		},
		watch: {
			activeName() {
				if (this.activeName == '1') {
					this.tableData = this.data;
				}
				if (this.activeName == '2') {
					this.tableData = [];
					for (var i = 0; i < this.data.length; i++) {
						if (this.data[i].state == 0) {
							this.tableData.push(this.data[i]);
						}
					}
				}
				if (this.activeName == '3') {
					this.tableData = [];
					for (var a = 0; a < this.data.length; a++) {
						if (this.data[a].state == 1) {
							this.tableData.push(this.data[a]);
						}
					}
				}
				if (this.activeName == '4') {
					this.tableData = [];
					for (var j = 0; j < this.data.length; j++) {
						if (this.data[j].state == 2) {
							this.tableData.push(this.data[j]);
						}
					}
				}
				if (this.activeName == '5') {
					this.tableData = [];
					for (var b = 0; b < this.data.length; b++) {
						if (this.data[b].state == 4) {
							this.tableData.push(this.data[b]);
						}
					}
				}
			}
		},
		methods: {
			dialogok() {
				this.dialogVisible = false;
				this.$message({
					type: 'success',
					message: '评价成功!'
				});
				this.textarea = '';
				this.tableData[this.orderid].state = 3;
			},
			handleClose(done) {
				this.$confirm('确认关闭？')
					.then(() => {
						done();
					})
					.catch(() => {});
			},
			comment(index, row) {
				this.orderid = index;
				this.dialogVisible = true;
			},
			deleteRow(index, rows, row) {
				if (row.state > 2) {
					this.$confirm('此操作将永久删除该订单, 是否继续?', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
					}).then(() => {
						rows.splice(index, 1);
						this.$message({
							type: 'success',
							message: '删除成功!'
						});
					}).catch(() => {
						this.$message({
							type: 'info',
							message: '已取消删除'
						});
					});
				} else {
					this.$confirm('此操作将永久取消该订单, 是否继续?', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
					}).then(() => {
						rows.splice(index, 1);
						this.$message({
							type: 'success',
							message: '取消成功!'
						});
					}).catch(() => {
						this.$message({
							type: 'info',
							message: '不取消'
						});
					});
				}
			},
		},

	};
</script>
<style scoped>
	>>>.el-tabs__nav .el-tabs__item {
		font-size: 20px;
	}

	.order {
		width: 1143px;
		margin-top: 1.5rem;
	}

	.table-td-thumb {
		display: block;
		margin: auto;
		width: 50px;
		height: 50px;
	}
</style>
