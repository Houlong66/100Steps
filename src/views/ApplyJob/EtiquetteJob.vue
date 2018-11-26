<template>
	<el-container>

	<el-header class="sub-header">
		<div>
			<h2>礼仪队申请表</h2>
		</div>
	</el-header>
		<el-main class="sub-main">
			<div class = 'inputElements'>
			<h4>申请部门 ： </h4><el-row class="demo-autocomplete">
				<el-col :span="12">
					<el-autocomplete
							class="inputBox"
							v-model="state1"
							:fetch-suggestions="querySearch"
							placeholder="请输入内容"
							@select="handleSelect"
					></el-autocomplete>
				</el-col>
			</el-row>
			</div >

			<div class = 'inputElements'>
				<h4>申请人 ： </h4>
				<el-input class="inputBox"
					placeholder="请输入内容"
					v-model="input1"
					clearable>
				</el-input>
			</div>

			<div class = 'inputElements'>
				<h4>活动时间 ： </h4><div class="inputBox">
					<el-date-picker
							v-model="value1"
							type="datetime"
							placeholder="选择日期时间">
					</el-date-picker>
				</div>
			</div>

			<div class = 'inputElements'>
			<h4>活动地点 ： </h4><el-input class="inputBox"
				placeholder="请输入内容"
				v-model="input2"
				clearable>
			</el-input>
			</div>
			<div class = 'inputElements'>
			<h4>申请人数 ： </h4>
			<el-input class="inputBox"
				placeholder="请输入内容"
				v-model="input3"
				clearable>
			</el-input>
			</div>
		</el-main>

	</el-container>
</template>




<script>
    export default {
        name:'EtiquetteJob',
        data() {
            return {
                restaurants: [],
                state1: '',
				input1: '',
                value1: '',
				input2: '',
				input3: ''
            };
        },
        methods: {
            querySearch(queryString, cb) {
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            createFilter(queryString) {
                return (restaurant) => {
                    return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            loadAll() {
                return [
                    { "value": "秘书部" },
                    { "value": "文艺部" },
                    { "value": "宣传部" },
                    { "value": "体育部" },
                    { "value": "新媒体中心" },
                    { "value": "志愿者" },
                    { "value": "调研部" },
                    { "value": "生活部" },
                    { "value": "素拓部" },
                    { "value": "学术部" },
                    { "value": "组织部" }
                ];
            },
            handleSelect(item) {
                // console.log(item);
            }
        },
        mounted() {
            this.restaurants = this.loadAll();
        }
    }
</script>


<style scoped lang="scss">
	.sub-header{
	border: coral;
	border-bottom-style: solid;
		margin: 0 auto;
	}
	.inputBox{
		height: 50px;
		width: 400px;
	}
	.inputElements{
		float: bottom;
	}
	.inputElements h4{
		float: left;
		height: 50px;
		width: 100px;
	}

</style>