<template>
    <div class="sideBar">
        <el-aside :width="tabWidth+'px'">
            <div>
                <div class="isClossTab" @click="isClossTabFun">
                    <i :class="isCollapse?'el-icon-d-arrow-right':'el-icon-d-arrow-left'" ></i>
                </div>
                <el-menu :class="'menu'"
                         default-active="1"
                         class="el-menu-vertical-demo"
                         :collapse="isCollapse"
                         @select="handleSelect"
                         background-color="#f17f5b"
                         text-color="#fff"
                         active-text-color="#fddc36"
                >
                    <el-menu-item index="1">
                        <i class="el-icon-location"></i>
                        <span slot="title">部门工作</span>
                    </el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">
                          <i class="el-icon-location"></i>
                          <span>申请工作</span>
                        </template>
                          <el-menu-item index="2-1">主持人申请</el-menu-item>
                          <el-menu-item index="2-2">礼仪队申请</el-menu-item>
                          <el-menu-item index="2-3">海报申请</el-menu-item>
                          <el-menu-item index="2-4">讲座票申请</el-menu-item>
                          <el-menu-item index="2-5">秘书部物资申请</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="3">
                        <i class="el-icon-setting"></i>
                        <span slot="title">修改信息</span>
                    </el-menu-item>
                </el-menu>
            </div>
        </el-aside>
    </div>
</template>

<script>
    export default {
        name: "SideBar",
        data() {
            return {
                isCollapse: false,
                tabWidth: 200,
                intelval: null,
            };
        },
        methods: {
            isClossTabFun(){
                clearInterval(this.intelval);
                if(!this.isCollapse){
                    this.intelval = setInterval(()=>{
                        if(this.tabWidth<= 64)
                            clearInterval(this.intelval);
                        this.tabWidth -= 4;
                    }, 1);
                }else{
                    this.tabWidth = 200;
                }
                this.isCollapse = !this.isCollapse;
            },
            handleSelect (key) {
                switch(key){
                case '1': 
                    this.$router.push('/departmentjob')
                    break
                case '2-1': 
                    this.$router.push('/hostjob')
                    break
                case '2-2': 
                    this.$router.push('/etiquettejob')
                    break
                case '2-3': 
                    this.$router.push('/postapply')
                    break
                case '2-4': 
                    this.$router.push('/lectureapply')
                    break
                case '2-5': 
                    this.$router.push('/secretaryapply')
                    break
                case '3':
                    this.$router.push('/modifyinfo')
                    break
                default: break
                }
            }
        }
    }
</script>

<style>
    *{
        padding: 0;
        margin: 0;
    }

</style>
<style scoped lang="scss">
$header-height:60px;
$background-color: #f17f5b;
$color: #FFF;

aside{
    overflow: hidden;
    height: 100%;
    background-color: $background-color;
    color: $color;

    .isClossTab{
        width: 100%;
        height: $header-height;
        cursor: pointer;
        font-size: 25px;
        text-align: center;
        line-height: $header-height;
        font-weight: bold;
        border-right: 1px solid #807c7c;
        box-sizing: border-box;
    }
    .menu {
        width: 100%;
        border-right:0;


    }

}
</style>