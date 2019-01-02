<template>
    <div id="Geography">
        <div class="order">
            <div class="crumbs">
                <el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="title clearfix">
                    <el-breadcrumb-item to="/ordermanage" class="title_body">订单管理</el-breadcrumb-item>
                    <el-breadcrumb-item to="/ordermandeteail" class="title_body">订单详情</el-breadcrumb-item>
                    <el-breadcrumb-item class="title_body">修改地理位置</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="Geography_item">
                <div class="Geography_list clearfix">
                    <div class="Geography_li fl" v-for="(item,index) in Geography_item">
                        <ul class="Geography_l_ul">
                            <li class="clearfix">
                                <p class="p1 fl">编号:</p>
                                <p class="p2 fl">{{item.Order_number}}</p>
                            </li>
                            <li class="clearfix">
                                <p class="p1 fl">树种:</p>
                                <p class="p2 fl">{{item.Trade_name}}</p>
                            </li>
                            <li class="clearfix">
                                <p class="p1 fl">地理位置:</p>
                                <div class="p2 fl">
                                    <span v-if="item.showModify">{{item.longitude}},{{item.latitude}}</span>
                                    <div v-else class="clearfix">
                                        <div class="Geography_span fl clearfix"><span class="fl">经度</span><el-input class="fl" v-model="item.longitude" placeholder="请输入内容"></el-input></div>
                                        <div class="Geography_span fl clearfix"><span class="fl">纬度</span><el-input class="fl" v-model="item.latitude" placeholder="请输入内容"></el-input></div>
                                    </div>
                                </div>
                            </li>
                            <li class="position_li"><el-button v-if="item.showModify" @click="item.showModify = false">修改</el-button ><el-button v-else @click="modifySure(index)">确定</el-button></li>
                        </ul>
                    </div>


                </div>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        name: 'ordermanage',
        data(){
            return {
                editVisible: true,

                Geography_item:[
                    {
                        id:'1',
                        Order_number:'78979131121311',
                        Trade_name:'企业树',
                        longitude:'12.54646456',
                        latitude:'45.454654665',
                        showModify: true
                    },
                    {
                        id:'1',
                        Order_number:'65465131121311',
                        Trade_name:'企业树',
                        longitude:'12.54646456',
                        latitude:'45.454654665',
                        showModify: true

                    },
                    {
                        id:'1',
                        Order_number:'54462131121311',
                        Trade_name:'企业树',
                        longitude:'12.54646456',
                        latitude:'45.454654665',
                        showModify: true

                    },
                    {
                        id:'1',
                        Order_number:'12313564561121311',
                        Trade_name:'企业树',
                        longitude:'12.54646456',
                        latitude:'45.454654665',
                        showModify: true

                    }

                ]

            }
        },
        computed:{

        },
        methods:{
            modifySure(index){
                console.dir(index);
                const item = this.Geography_item[index];
                console.dir(item);
                item.showModify = true;

            }
        }
    }
</script>
<style lang="scss">
    #Geography{
        background: #fff;
        .order{
            padding:0 20px;
        }
        .title{
            font-size: 18px;
            color: #000;
            height: 27px;
            text-align: left;
            padding:10px 0px;
        }
        .title_body{
            line-height: 27px;
            color: rgba(16, 16, 16, 1);
            font-size: 18px;
            text-align: left;
            font-family: SourceHanSansSC-bold;
        }
        .Geography_item{
            width: 100%;
            overflow: hidden;

            .Geography_list{
                margin-right: -3%;
                .Geography_li{
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    -ms-box-sizing: border-box;
                    box-sizing: border-box;
                    width: 47.5%;
                    margin-right: 2%;
                    border: 1px solid #bbb;
                    margin-bottom: 20px;
                    padding:10px 10px 0px 15px;
                    .Geography_l_ul{
                        position: relative;
                        padding-top: 10px;
                        .position_li{
                            position: absolute;
                            top: 0;
                            right: 0;
                            .el-button--small, .el-button--small.is-round{
                                padding: 6px 15px;
                                border: 1px solid #bbb;
                                border-radius: 3px;
                            }
                            .el-button--small, .el-button--small.is-round:hover{
                                color:#000;
                                background-color: #fff;
                            }
                        }
                        li{
                            font-family: SourceHanSansSC;
                            font-weight: 400;
                            font-size: 18px;
                            color: rgb(16, 16, 16);
                            font-style: normal;
                            letter-spacing: 0px;
                            line-height: 27px;
                            margin-bottom: 10px;
                            .p1{
                                margin-right: 20px;
                            }
                            .Geography_span{
                                margin-right: 30px;
                                span{
                                    margin-right: 10px;
                                }
                                .el-input{
                                    width: 180px;
                                    .el-input__inner{
                                        line-height: 25px;
                                        height: 25px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

</style>
