<template>
	<el-container>

		<el-header class="sub-header">
			<div>
				<h2>讲座票申请表</h2>
			</div>
		</el-header>
		<el-main class="sub-main">
			<div class = 'inputElements'>
				<h4>申请部门 ： </h4><el-row class="demo-autocomplete">
				<el-col :span="12">
					<el-autocomplete
							class="inline-input"
							v-model="state1"
							:fetch-suggestions="querySearch1"
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
				<h4>申请张数 ： </h4>
				<el-input class="inputBox"
						  placeholder="请输入内容"
						  v-model="input3"
						  clearable>
				</el-input>
			</div>

			<div class="inputElements">
				<h4>德育/创新： </h4><el-row class="demo-autocomplete">
				<el-col :span="12">
					<el-autocomplete
							class="inline-input"
							v-model="state2"
							:fetch-suggestions="querySearch2"
							placeholder="请输入内容"
							@select="handleSelect"
					></el-autocomplete>
				</el-col>
			</el-row>

			</div>
			<div class = 'inputElements'>
				<h4>分数要求 ： </h4>
				<el-input class="inputBox"
						  placeholder="请输入内容"
						  v-model="input4"
						  clearable>
				</el-input>
			</div>
			<div class="inputElements">
				<h4>文字要求： </h4>
				<el-input class ="textarea"
						  type="textarea"
						  :autosize="{ minRows: 2, maxRows: 4}"
						  placeholder="请输入内容"
						  v-model="textarea1">
				</el-input>
			</div>
			<div class = 'inputElements'>
				<h4>截止时间 ： </h4>
				<el-date-picker class="inputBox"
								v-model="value2"
								type="datetime"
								placeholder="选择日期时间">
				</el-date-picker>
			</div>
		</el-main>


	</el-container>
</template>




<script>
    export default {
        name:'LectureApply',
        data() {
            return {
                restaurants: [],
                state1: '',
                input1: '',
                value1: '',
                input2: '',
                input3: '',
				lectureType: [],
				state2: '',
				input4: '',
				textarea1: '',
				value2: ''
            };
        },
        methods: {
            querySearch1(queryString, cb) {
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            querySearch2(queryString, cb) {
                var lectureType = this.lectureType;
                var results = queryString ? lectureType.filter(this.createFilter(queryString)) : lectureType;
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            createFilter(queryString) {
                return (restaurant) => {
                    return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            loadAll1() {
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
            loadAll2() {
                return [
                    { "value": "德育分" },
                    { "value": "创新分" }
                ];
            },
            handleSelect(item) {
                console.log(item);
            }
        },
        mounted() {
            this.restaurants = this.loadAll1();
            this.lectureType = this.loadAll2()
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
	.textarea{
		height: 100px;
		width: 400px;
	}
</style>