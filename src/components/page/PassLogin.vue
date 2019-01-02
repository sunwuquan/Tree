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
            <el-form ref="form" :model="form" :rules="rule2" class="login-content" label="20px">
                <h3>找回密码</h3>

                <div class="pass-form-boyd">
                    <div class="pass-form-title">账&nbsp;&nbsp;&nbsp;&nbsp;户</div>
                    <!--<input type="text" class="pass-form-input" v-model="form.name" placeholder="请输入账户名/手机号">-->
                    <el-input v-model="form.name" style="width: 350px;margin-left:15px;height: 40px;line-height: 40px;color: rgba(136,136,136,1);font-size: 14px;" placeholder="请输入账户名/手机号" ></el-input>
                </div>
                <div class="pass-form-boyd" style="margin-top: 20px;margin-bottom: 20px">
                    <div class="pass-form-title">验证码</div>
                    <el-input v-model="form.number" style="width: 224px;margin-left:15px;height: 40px;line-height: 40px;color: rgba(136,136,136,1);font-size: 14px;" placeholder="输入验证码" ></el-input>
                    <!--<input class="pass-form-input"  style="width: 224px" v-model="form.number" type="text" placeholder="输入验证码">-->
                    <div class="pass-form-buttom" @click="handleClick">验证码</div>
                </div>
                <div class="pass-form-boyd">
                    <div class="pass-form-title">新密码</div>
                    <el-form-item prop="pass" style="width: 350px;display: inline-block;margin-left: 15px">
                        <el-input type="password" v-model="form.pass" placeholder="输入密码" autocomplete="off" style="width: 350px;height: 40px;line-height: 40px;color: rgba(136,136,136,1);font-size: 14px;"></el-input>
                    </el-form-item>
                </div>
                <div class="pass-form-boyd">
                    <div class="pass-form-title">密&nbsp;&nbsp;&nbsp;&nbsp;码</div>
                    <el-form-item prop="checkPass" style="width: 350px;display: inline-block;margin-left: 15px">
                        <el-input type="password" style="width: 350px;height: 40px;line-height: 40px;color: rgba(136,136,136,1);font-size: 14px;"  v-model="form.checkPass" placeholder="再次输入密码" autocomplete="off"></el-input>
                    </el-form-item>
                </div>


                <el-form-item style="margin-top: 40px;text-align: center">
                    <el-button type="primary" @click="submitForm('form')" style="width: 80%; height: 50px;border-radius: 4px; font-size: 18px; background: #009d6a">确定</el-button>
                </el-form-item>
            </el-form>
        </div>
        <v-footer></v-footer>
    </div>
</template>
<script>
    import vFooter from '../common/Footer.vue';
    export default {
        name: 'passlogin',
        components:{
            vFooter
        },
        data (){
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.form.checkPass !== '') {
                        this.$refs.form.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.form.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                form:{
                    name: '',
                    pass: '',
                    number:'',
                    checkPass:''
                },
                rule2:{
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                }
            }
        },
        methods: {
            handleClick(){
                var reg=11&& /^((13|14|15|17|18)[0-9]{1}\d{8})$/;//手机号正则验证
                var name=this.form.name;
                if(!reg.test(name)){//手机号不合法
                    console.log("您输入的手机号码不合法，请重新输入");
                }
                console.log("获取验证码")
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
                console.dir(this.form)
            }
        }
    }
</script>
<style scoped >
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
    .login-body{
        width: 100%;
        height: 549px;
        position: relative;
        overflow: hidden;
        background-image: url("../../assets/timg.jpg");
        margin-bottom: 40px;
    }
    .login-content{
        width: 530px;
        height: 470px;
        background: #fff;
        position: absolute;
        /*right: 145px;*/
        border-radius: 10px;
        top: 62px;
        margin-left: 50%;
        left: -275px;
        /*text-align: center;*/
        font-size: 20px;
        /*left: 765px;*/
        line-height: 20px;
    }
    .login-content h3{
        margin-top: 44px;
        font-size: 28px;
        text-align: center;
        margin-bottom: 34px;
    }
        .pass-form-boyd{
            width: 100%;
        }
        .pass-form-title{
            font-size: 20px;
            display: inline-block;
            margin-left: 35px;
        }
        .pass-form-input{
            width: 350px;
            height: 32px;
            border-radius: 4px;
            color: rgba(136, 136, 136, 1);
            font-size: 14px;
            margin-left: 15px;
            padding-left: 10px;
            text-align: left;
            font-family: Microsoft Yahei;
            border:1px solid #dcdfe6;
        }
            .el-input__inner{
                height: 40px !important;
            }
        .pass-form-buttom{
            width: 96px;
            height: 40px;
            cursor: pointer;
            border-radius: 4px;
            color: rgba(16, 16, 16, 1);
            font-size: 14px;
            text-align: center;
            line-height: 40px;
            display: inline-block;
            margin-left: 15px;
            font-family: Microsoft Yahei;
            border: 1px solid rgba(187, 187, 187, 1);

        }

</style>

