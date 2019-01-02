<template>
    <div>
        <div class="header">
            <!-- 折叠按钮 -->
            <div class="collapse-btn" >
                <!--<div class="el-icon-menu"></div>-->
            </div>
            <div class="logo">树知道</div>
        </div>
        <div class="login-body">
            <div class="body-left">
                树知道运营管理系统
            </div>
            <el-form ref="form" :model="form" class="login-content" label="20px">
                <h3>登录</h3>
                <div class="log-form-body">
                    <span class="form-label">账户</span>
                    <input type="text" placeholder="请输入账户/手机号" v-model="form.name">
                </div>
                <div class="log-form-body">
                    <span>密码</span>
                    <input type="text" placeholder="请输入密码" v-model="form.password">
                </div>
                <el-form-item style="margin-top: 40px">
                    <el-button type="primary" @click="submitForm('form')" style="width: 80%; height: 50px;border-radius: 4px; font-size: 18px; background: #009d6a">登录</el-button>
                </el-form-item>
                <div class="wj-password" @click="handleClick('form')">忘记密码</div>
                <!--<div class="wj-password" @click="handleClick1">忘记密码</div>-->
            </el-form>
        </div>
        <v-footer></v-footer>
    </div>
</template>
<script>
    import vFooter from '../common/Footer.vue';
export default {
    name: 'loginmanage',
    components:{
        vFooter
    },
    data (){
        return {
            form:{
                name: 'admin',
                password: '123123'
            }
        }
    },
    methods: {
        handleClick(form){
            this.$refs[form].validate((valid) => {
                if (valid) {
                    localStorage.setItem('ms_username',this.form.name);
                    this.$router.push('/passlogin');
                    console.log(valid)
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        handleClick1(){
//            this.$router.push('/passlogin');
            this.$router.push('/passlogin');
            console.log("忘记密码")
////            this.$router.push({path:'/passlogin'})
//            this.$refs[form].validate((valid) => {
//                if (valid) {
//                    localStorage.setItem('ms_username',this.form.name);
//                    this.$router.push('/passlogin');
//                    console.log(valid)
//                } else {
//                    console.log('error submit!!');
//                    return false;
//                }
//            });
        },
        submitForm(form){
            this.$refs[form].validate((valid) => {
                if (valid) {
                    localStorage.setItem('ms_username',this.form.name);
                    this.$router.push('/');
                    console.log(valid)
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
}
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        color: #fff;
        background: #fff;
    }
    .collapse-btn{
        float: left;
        padding: 0 21px;
        /*cursor: pointer;*/
        line-height: 70px;
    }
    .header .logo{
        float: left;
        width:250px;
        margin-left: 70px;
        color: #101010;
        line-height: 70px;
    }
    .btn-bell .el-icon-bell{
        color: #fff;
    }
    .user-avator img{
        display: block;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .login-body{
        width: 100%;
        height: 549px;
        position: relative;
        overflow: hidden;
        background-image: url("../../assets/timg.jpg");
        margin-bottom: 40px;
    }
    .body-left{
        font-size: 48px;
        position: absolute;
        top: 50%;
        margin-top: -24px;
        height: 71px;
        line-height: 71px;
        margin-left: 187px;
    }

    .login-content{
        width: 530px;
        height: 470px;
        background: #fff;
        position: relative;
        float: right;
        margin-right: 10%;
        /*position: absolute;*/
        /*right: 145px;*/
        margin-top: 40px;
        border-radius: 10px;
        /*top: 62px;*/
        text-align: center;
        font-size: 20px;
        /*left: 765px;*/
        line-height: 20px;
    }
    .login-content h3{
        margin-top: 44px;
        font-size: 28px;
        margin-bottom: 30px;
    }
    .log-form-body input{
        width: 350px;
        height: 40px;
        color: rgba(136, 136, 136, 1);
        font-size: 14px;
        padding-left: 10px;
        text-align: left;
        font-family: Microsoft Yahei;
        margin: 20px 0 20px 20px;
        border: 1px solid rgba(187, 187, 187, 1);
    }
   .wj-password{
        display: inline-block;
        color: rgba(229, 28, 35, 1);
        font-size: 16px;
        position: absolute;
        right: 40px;
        bottom: 40px;
        cursor: pointer;
        text-align: left;
        font-family: SourceHanSansSC-regular;
    }

</style>
