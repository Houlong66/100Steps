<template>
  <el-container class="main">
    <SideBar></SideBar>
    <el-container>
        <el-header class="main-header">
            <p class="main-footer">软件学院团学管理系统</p>
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    <div style="display: inline-block;color:white">
                      <p>宣传部</p>
                      <p>韩梅梅</p>
                    </div>
                    <img src="../..//public/header.jpg" alt="">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="logOut">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-header>
        <el-main>
            <div>
                <router-view></router-view>
            </div>
        </el-main>
<!--         <el-footer class="main-footer" height="50px">
            <p>软件学院团学管理系统</p>
        </el-footer> -->
    </el-container>
  </el-container>
</template>

<script>
import SideBar from "../components/SideBar.vue"

export default {
  name: 'Home',
  components: {
    SideBar
  },
  methods: {
    handleCommand (command) {
      switch(command){
      case 'logOut':
        this.$router.push('/')
        break;
      default: break
      }
    }
  }
}
</script>

<style scoped lang="scss">
$header-height:60px;
$background-color: #373d41;
$color: #FFF;

*{
  padding: 0;
  margin: 0;
}

.main{
    height: 100vh;
    min-width: 800px;
    min-height: 600px;
    overflow: hidden;

    .main-header {
        background-color: $background-color;
        color: $color;

        .el-dropdown{
            cursor: pointer;
            float: right;
        }
        .el-dropdown-link{

            img{
                $imgMargin: (($header-height - 50)/2);
                display:inline-block;
                width:50px;
                height: 50px;
                border-radius: 25px;
                background-color: #FFF;
                margin-top: $imgMargin;
                margin-left: 5px;
            }
        }
    }

    .crumbs {
        margin-bottom: 20px;
    }

    .main-footer{
        text-align: center;
        background-color: $background-color;
        color: $color;
        line-height: $header-height;
        width: 80%;
        display: inline-block;
    }

}

</style>
