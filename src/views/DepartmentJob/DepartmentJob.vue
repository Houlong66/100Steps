<template>
	<el-container>
		<el-row class="progress_title">
			<h2>工作进度</h2>
		</el-row>
		<el-row class="circle_progress" :gutter="60">
			<el-col :span="6">
				<el-progress type="circle" :percentage="25" color="#09c"></el-progress><br>
				<div class="progress_text"><span>迎新晚会</span></div>
			</el-col>
			<el-col :span="6">
				<el-progress type="circle" :percentage="0" color="#09c"></el-progress>
				<div class="progress_text"><span>迎新晚会</span></div>
			</el-col>
			<el-col :span="6">
				<el-progress type="circle" :percentage="55" color="#09c"></el-progress>
				<div class="progress_text"><span>迎新晚会</span></div>
			</el-col>
			<el-col :span="6">
				<el-progress type="circle" :percentage="75" color="#09c"></el-progress>
				<div class="progress_text"><span>迎新晚会</span></div>
			</el-col>
		</el-row>
		<el-row class="member_card_row">
			<el-card shadow="hover" class="member_card">
				<div slot="header">
					<span>部门成员</span>
					<el-button style="float: right; padding: 3px 0" type="text">增加部员</el-button>
				</div>
				<el-tree :data="members" :props="defaultProps"></el-tree>
			</el-card>
		</el-row>
	</el-container>
</template>

<script>
export default {
	name: "DepartmentJob",
	data () {
		return {
			members: [
				{
					label: '部长',
					children: [
						{
							label: '张三'
						},
						{
							label: '李四'
						}
					]
				},
				{
					label: '部员',
					children: [
						{
							label: '王八'
						},
						{
							label: '陈留'
						}
					]
				}
			],
			defaultProps: {
				children: 'children',
				label: 'label'
			}
		}
	}	
}
</script>

<style scoped lang="scss">
	.circle_progress {
		margin-top: 5%;
	}
	.progress_title {
		margin-left: 3%;
		margin-top: 2%;
		color: #373d41;
	}
	.progress_text {
		margin-top: 6%;
		margin-left: 20%;
		font-size: large;
		font-weight: 550;
		color: #09c;
	}
	.member_card_row {
		margin-top: 2%;
		margin-left: 13%;
	}
	.member_card {
		width: 250px;
		height: 300px;
	}
</style>