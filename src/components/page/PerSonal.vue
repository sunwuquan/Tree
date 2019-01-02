<template>
    <div class="ps-body">
        <div class="crumbs">
            <el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="title">
                <el-breadcrumb-item class="title_body">修改密码</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="ps-content">
            <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-position="left" label-width="100px" class="demo-ruleForm">
                <el-form-item label="原密码" prop="pass">
                    <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="type">
                    <el-input class="ps-input" type="text" v-model="ruleForm2.type" autocomplete="off"></el-input>
                    <el-button type="" @click="onClicksub">验证码</el-button>
                </el-form-item>
                <el-form-item label="新密码" prop="newpass">
                    <el-input type="password" v-model="ruleForm2.newpass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                    <el-button @click="resetForm('ruleForm2')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'personal',
        data: function(){
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm2.checkPass !== '') {
                        this.$refs.ruleForm2.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm2.newpass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm2: {
                    pass: '',
                    checkPass: '',
                    type: '',
                    newpass: ''
                },
                rules2: {
                    newpass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            onClicksub(){
              const type=this.ruleForm2.type
              console.log(type)
            },
            submitForm(formName) {
//                this.$refs[formName].validate((valid) => {
//                    if (valid) {
//                        alert('submit!');
//                    } else {
//                        console.log('error submit!!');
//                        return false;
//                    }
//                });
                console.dir(this.ruleForm2)
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            getDate(){
                console.log("获取数据")
            }
        },
        created(){
            this.getDate()
        }
    }
</script>
<style lang="scss">
    .ps-body{
        background: #fff;
        .title{
            font-size: 18px;
            color: #000;
            left: 250px;
            /*top: 128px;*/
            margin-top: 12px;
            /*padding-left: 20px;*/
            margin-left: 20px;
            height: 27px;
            font-weight: 900;
            text-align: left;
            font-family: SourceHanSansSC-bold;
        }

        .title_body{
            padding-top: 12px;
            left: 250px;
            top: 128px;
            height: 27px;
            color: rgba(16, 16, 16, 1);
            font-size: 18px;
            text-align: left;
            font-family: SourceHanSansSC-bold;
            .el-breadcrumb__inner{
                font-weight: 900;
            }
        }
        .ps-content{
            margin-left: 20px;
            margin-top: 30px;
            .el-form-item__label{
                font-size: 20px;
            }
            .el-input__inner{
                width: 469px;
                height: 40px;
                line-height: 40px;
                color: rgba(136, 136, 136, 1);
                font-size: 14px;
                text-align: left;
                font-family: Microsoft Yahei;
                border: 1px solid rgba(187, 187, 187, 1);
            }
            .el-input{
                width: auto;
            }
            .ps-input{
                .el-input__inner{
                    width: 349px;
                }
            }
            .el-button{
                width: 96px;
                height: 40px;
                border-radius: 4px;
                color: rgba(16, 16, 16, 1);
                font-size: 14px;
                text-align: center;
                font-family: Microsoft Yahei;
                background: #fff;
                margin-left: 22px;
                border: 1px solid rgba(187, 187, 187, 1);
            }
        }
    }

</style>
