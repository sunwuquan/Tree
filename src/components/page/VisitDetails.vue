<template>
    <div class="vide-body">
        <div class="">
            <el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="vide-b-title">
                <el-breadcrumb-item to="/visitapplacation" class="visi-b-title_body">参观申请</el-breadcrumb-item>
                <el-breadcrumb-item class="vide-b-title_body">详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="vide-content">
            <div class="vide-title">个人信息</div>
            <div class="vide-con-right" v-show="show">{{list.type}}</div>
            <div class="vide-con">
                <div>
                    <div class="vide-con-text">姓名:</div><div class="vide-con-body">{{list.name}}</div>
                </div>
                <div>
                    <div class="vide-con-text">手机号:</div><div class="vide-con-body">{{list.phone}}</div>
                </div>
                <div>
                    <div class="vide-con-text">身份证:</div><div class="vide-con-body">{{list.carid}}</div>
                </div>

            </div>
            <div class="vide-title">日程安排</div>
            <div class="vide-con">
                <div>
                    <div class="vide-con-text">出发日期:</div><div class="vide-con-body">{{list.date}}</div>
                </div>
                <div>
                    <div class="vide-con-text">参观天数:</div><div class="vide-con-body">2天</div>
                </div>
                <div>
                    <div class="vide-con-text">返回日期:</div><div class="vide-con-body">2018-12-11</div>
                </div>
                <div>
                    <div class="vide-con-text">出行方式:</div><div class="vide-con-body">服务公司安排</div>
                </div>
            </div>
            <router-link tag="div" to="/visitapplacation" class="vide-back">返回</router-link>
            <div class="vide-footer" v-show="footer">
                <div class="vide-footer-title">我要拒绝</div>
                <el-input
                    type="textarea"
                    :autosize="{ minRows: 10, maxRows: 20}"
                    placeholder="请输入内容"
                    v-model="textarea3">
                </el-input>
                <div class="vide-footer-button" @click="handleClick">拒绝</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'visidetails',
        data(){
            return{
                textarea3:'',
                list:{
                    id: '',
                    name: '',
                    phone: '',
                    carid: '',
                    date: '',
                    type: ''
                },
                type:'',
                show:true,
                footer:false
            }
        },
        created(){
            this.getDate()
//            console.log(this.list)
//            console.log(this.type)
        },
        methods:{
            handleClick(){
                console.log(this.textarea3)
            },
            getDate(){
                console.log("==========")
                this.list = this.$route.query.item
                console.log(this.list.type)
                if(this.list.type==="未过期"){
                    this.show=false;
                    this.footer=true;
                }
                console.log("获取数据")
            }
        }
    }
</script>
<style lang="scss">
    .vide-body{
        .vide-b-title{
            font-size: 18px;
            color: #000;
            margin-top: 16px;
            padding-left: 20px;
            height: 27px;
            text-align: left;
            font-family: SourceHanSansSC-bold;
        }
        .vide-b-title_body{
            height: 27px;
            color: rgba(16, 16, 16, 1);
            font-size: 18px;
            font-weight: 900;
            text-align: left;
            font-family: SourceHanSansSC-bold;
            .el-breadcrumb__inner{
                font-weight: 900;
            }
        }
        .vide-content{
            margin-left: 20px;
            position: relative;
            .vide-title{
                height: 29px;
                margin-top: 30px;
                color: rgba(16, 16, 16, 1);
                font-size: 20px;
                margin-bottom: 22px;
                text-align: left;
                font-family: SourceHanSansSC-regular;
            }
            .vide-con-right{
                display: inline-block;
                float: right;
                width: 98px;
                text-align: center;
                color: #fff;
                font-size: 18px;
                height: 98px;
                line-height: 98px;
                background-color: rgba(0, 150, 136, 1);

            }
            .vide-con{
                padding-bottom: 35px;
                border-bottom: 1px solid #bbb;
                .vide-con-text{
                    width: 90px;
                    height: 27px;
                    color: rgba(16, 16, 16, 1);
                    font-size: 18px;
                    margin-right: 13px;
                    margin-top: 20px;
                    display: inline-block;
                    text-align: left;
                    font-family: SourceHanSansSC-regular;
                }
                .vide-con-body{
                    height: 27px;
                    color: rgba(16, 16, 16, 1);
                    font-size: 18px;
                    text-align: left;
                    display: inline-block;
                }
            }
            .vide-back{
                width: 80px;
                height: 30px;
                line-height: 30px;
                border-radius: 4px;
                color: rgba(16, 16, 16, 1);
                font-size: 14px;
                margin-top: 30px;
                float: right;
                margin-right: 30px;
                cursor: pointer;
                text-align: center;
                font-family: Microsoft Yahei;
                border: 1px solid rgba(187, 187, 187, 1);
                display: block;
            }
            .vide-footer{
                margin-top: 100px;
                .vide-footer-title{
                    width: 80px;
                    height: 29px;
                    color: rgba(229, 28, 35, 1);
                    font-size: 20px;
                    text-align: left;
                    margin-bottom: 30px;
                    font-family: SourceHanSansSC-regular;
                }
                .el-textarea__inner{
                    height: 200px;
                    font-size: 18px;
                }
                .vide-footer-button{
                    width: 80px;
                    height: 30px;
                    line-height: 30px;
                    display: inline-block;
                    float: right;
                    margin-right: 30px;
                    margin-top: 30px;
                    margin-bottom: 50px;
                    cursor: pointer;
                    border-radius: 4px;
                    color: rgba(16, 16, 16, 1);
                    font-size: 14px;
                    text-align: center;
                    font-family: Microsoft Yahei;
                    border: 1px solid rgba(187, 187, 187, 1);

                }
            }
        }
    }
</style>
