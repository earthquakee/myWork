<template>
    <div class="admin">
        <div style="margin-bottom: 1rem;">
			<el-tag>景区管理</el-tag>
		</div>
		<el-table style="width: 100%" height="450">
			<el-table-column prop="id" label="ID" width="80">
			</el-table-column>
			<el-table-column prop="name" label="名称" width="180">
			</el-table-column>
			<el-table-column prop="address" label="地址" width="100">
			</el-table-column>
			<el-table-column prop="DetailedAddress" label="详细地址" width="180">
			</el-table-column>
			<el-table-column prop="ntroduce" label="介绍">
			</el-table-column>
			<el-table-column  label="操作" width="180" align="center">
				<el-button>编辑</el-button>
				<el-button type="danger">删除</el-button>
			</el-table-column>
		</el-table>
		<div style="text-align: center; padding: 1rem;">
			<el-button type="primary">添加</el-button>
		</div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .admin {
		width: 100%;
		margin: 1rem;
	}
</style>