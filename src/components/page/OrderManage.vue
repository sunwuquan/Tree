<template>
    <div id="oeder">
        <div class="order">
            <div class="crumbs">
                <el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="title clearfix">
                    <!-- <el-breadcrumb-item class="title_body">订单</el-breadcrumb-item> -->
                    <el-breadcrumb-item class="title_body">订单管理</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="oeder_E">
                <div class="order_search">
                    <i class="el-icon-search search_i"></i>
                    <el-input  placeholder="筛选关键词" class="handle-input mr10"></el-input>
                    <el-button type="primary" icon="search" @click="search">搜索</el-button>
                </div>
            </div>
            <div class="oeder_shu">

                <el-tabs v-model="select_cate" @tab-click="handleChangGroupById">
                    <el-tab-pane :key="item.id" v-for="item in grouplist" :label="item.name" ></el-tab-pane>
                </el-tabs>
                <ul class="oeder_list">
                    <li v-for="(item,index) in oeder_details" class="clearfix">
                        <div class="oeder_li_img fl"><img :src="item.Order_img" height="84" width="84" alt="" /></div>
                        <div class="oeder_details fl">
                            <p><span class="oeder_details_span">名称：{{item.name}}</span><span>订单编号：{{item.Order_number}}</span></p>
                            <p><span class="oeder_details_span">数量：X{{item.number}}</span><span class="oeder_details_span">支付方式：{{item.Payment_method}}</span><span>交易金额：￥{{item.Transaction_amount}}</span></p>
                            <p>下单时间：{{item.Order_time}}</p>
                            <span class="oeder_sign">{{item.Order_classification}}</span>
                        </div>
                        <div class="oeder_modify fr">
                            <el-row>
                                <el-button>填写物流</el-button>
                                <el-button>修改状态</el-button>
                                <el-button @click="gteDetails(index)">查看</el-button>
                            </el-row>
                        </div>

                    </li>
                </ul>
            </div>
        </div>


        <!-- <div @click="gteDetails">sadsadsa</div> -->
    </div>
</template>
<script>
    export default {
        name: 'ordermanage',
        data(){
            return {
                grouplist:[
                    {
                        name:'已下单',
                        id:'1'
                    },
                    {
                        name:'已确认',
                        id:'2'
                    },
                    {
                        name:'选树种',
                        id:'3'
                    },
                    {
                        name:'运往基地',
                        id:'4'
                    },
                    {
                        name:'种植中',
                        id:'5'
                    },
                    {
                        name:'成长中',
                        id:'6'
                    },
                ],
                select_cate: '',
                oeder_details:[
                    {
                        Order_img:'../../../static/img/img.jpg',
                        name:'企业树1',
                        Order_number:'0111100033556654664',
                        number:'13',
                        Payment_method:'人民币',
                        Transaction_amount:'1340',
                        Order_time:'2018-12-18 13:38',
                        Order_classification:'已下单'
                    },
                    {
                        Order_img:'../../../static/img/img.jpg',
                        name:'企业树2',
                        Order_number:'011110003355666',
                        number:'18',
                        Payment_method:'美元',
                        Transaction_amount:'1340',
                        Order_time:'2018-12-18 13:38',
                        Order_classification:'已下单'

                    },
                    {
                        Order_img:'../../../static/img/img.jpg',
                        name:'企业树3',
                        Order_number:'01111000335566546546',
                        number:'14',
                        Payment_method:'人民币',
                        Transaction_amount:'1340',
                        Order_time:'2018-12-18 13:38',
                        Order_classification:'已下单'

                    }
                ],
                oeder_list:[
                    {
                        name:'已下单',
                        id:'1',
                        customerList:[
                            {
                                Order_img:'../../../static/img/img.jpg',
                                name:'企业树1',
                                Order_number:'01111000335566546546',
                                number:'14',
                                Payment_method:'人民币',
                                Transaction_amount:'1340',
                                Order_time:'2018-12-18 13:38'
                            },
                            {
                                Order_img:'../../../static/img/img.jpg',
                                name:'企业树3',
                                Order_number:'01111000335566546546',
                                number:'14',
                                Payment_method:'人民币',
                                Transaction_amount:'1340',
                                Order_time:'2018-12-18 13:38'
                            },
                            {
                                Order_img:'../../../static/img/img.jpg',
                                name:'企业树3',
                                Order_number:'01111000335566546546',
                                number:'14',
                                Payment_method:'人民币',
                                Transaction_amount:'1340',
                                Order_time:'2018-12-18 13:38'
                            }
                        ]
                    },
                    {
                        name:'已下单',
                        id:'2',
                        customerList:[
                            {
                                Order_img:'../../../static/img/img.jpg',
                                name:'企业树2',
                                Order_number:'01111000335566546546',
                                number:'14',
                                Payment_method:'人民币',
                                Transaction_amount:'1340',
                                Order_time:'2018-12-18 13:38'

                            },
                            {
                                Order_img:'../../../static/img/img.jpg',
                                name:'企业树3',
                                Order_number:'01111000335566546546',
                                number:'14',
                                Payment_method:'人民币',
                                Transaction_amount:'1340',
                                Order_time:'2018-12-18 13:38'
                            },
                            {
                                Order_img:'../../../static/img/img.jpg',
                                name:'企业树3',
                                Order_number:'01111000335566546546',
                                number:'14',
                                Payment_method:'人民币',
                                Transaction_amount:'1340',
                                Order_time:'2018-12-18 13:38'
                            }
                        ]
                    },
                    {
                        name:'已下单',
                        id:'3',
                        customerList:[
                            {
                                Order_img:'../../../static/img/img.jpg',
                                name:'企业树3',
                                Order_number:'01111000335566546546',
                                number:'14',
                                Payment_method:'人民币',
                                Transaction_amount:'1340',
                                Order_time:'2018-12-18 13:38'
                            },
                            {
                                Order_img:'../../../static/img/img.jpg',
                                name:'企业树4',
                                Order_number:'01111000335566546546',
                                number:'14',
                                Payment_method:'人民币',
                                Transaction_amount:'1340',
                                Order_time:'2018-12-18 13:38'
                            },
                            {
                                Order_img:'../../../static/img/img.jpg',
                                name:'企业树5',
                                Order_number:'01111000335566546546',
                                number:'14',
                                Payment_method:'人民币',
                                Transaction_amount:'1340',
                                Order_time:'2018-12-18 13:38'
                            }
                        ]
                    },
                    {
                        name:'已下单',
                        id:'4',
                        customerList:[
                            {
                                Order_img:'../../../static/img/img.jpg',
                                name:'企业树4',
                                Order_number:'01111000335566546546',
                                number:'14',
                                Payment_method:'人民币',
                                Transaction_amount:'1340',
                                Order_time:'2018-12-18 13:38'
                            },
                            {
                                Order_img:'../../../static/img/img.jpg',
                                name:'企业树3',
                                Order_number:'01111000335566546546',
                                number:'14',
                                Payment_method:'人民币',
                                Transaction_amount:'1340',
                                Order_time:'2018-12-18 13:38'
                            },
                            {
                                Order_img:'../../../static/img/img.jpg',
                                name:'企业树3',
                                Order_number:'01111000335566546546',
                                number:'14',
                                Payment_method:'人民币',
                                Transaction_amount:'1340',
                                Order_time:'2018-12-18 13:38'
                            }
                        ]
                    },
                    {
                        name:'已下单',
                        id:'5',
                        customerList:[
                            {
                                Order_img:'../../../static/img/img.jpg',
                                name:'企业树5',
                                Order_number:'01111000335566546546',
                                number:'14',
                                Payment_method:'人民币',
                                Transaction_amount:'1340',
                                Order_time:'2018-12-18 13:38'
                            },
                            {
                                Order_img:'../../../static/img/img.jpg',
                                name:'企业树3',
                                Order_number:'01111000335566546546',
                                number:'14',
                                Payment_method:'人民币',
                                Transaction_amount:'1340',
                                Order_time:'2018-12-18 13:38'
                            },
                            {
                                Order_img:'../../../static/img/img.jpg',
                                name:'企业树3',
                                Order_number:'01111000335566546546',
                                number:'14',
                                Payment_method:'人民币',
                                Transaction_amount:'1340',
                                Order_time:'2018-12-18 13:38'
                            }
                        ]
                    },
                    {
                        name:'已下单',
                        id:'6',
                        customerList:[
                            {
                                Order_img:'../../../static/img/img.jpg',
                                name:'企业树6',
                                Order_number:'01111000335566546546',
                                number:'14',
                                Payment_method:'人民币',
                                Transaction_amount:'1340',
                                Order_time:'2018-12-18 13:38'
                            },
                            {
                                Order_img:'../../../static/img/img.jpg',
                                name:'企业树3',
                                Order_number:'01111000335566546546',
                                number:'14',
                                Payment_method:'人民币',
                                Transaction_amount:'1340',
                                Order_time:'2018-12-18 13:38'
                            },
                            {
                                Order_img:'../../../static/img/img.jpg',
                                name:'企业树3',
                                Order_number:'01111000335566546546',
                                number:'14',
                                Payment_method:'人民币',
                                Transaction_amount:'1340',
                                Order_time:'2018-12-18 13:38'
                            }
                        ]
                    }
                ]
            }
        },
        computed:{

        },
        methods:{

            search(){
                console.dir('456');
            },
            gteDetails(index){
                this.$router.push({path:'/ordermandeteail'});
                // this.idx = index;
                const item = this.oeder_details[index];
                console.dir(item);
            },
            handleChangGroupById(){

                // console.dir(this.select_cate)
                var cate = this.select_cate;
                var _tableList = [];
                var oederList = this.oeder_list;
                console.dir(oederList);
                for (var i = oederList.length - 1; i >= 0; i--) {
                    var _item = oederList[i];
                    var _groupid = _item.id;
                    var _groupname = _item.name;
                    if ((_groupid -1) == cate) {
                        var Order_classification = _item.name;
                        console.dir(Order_classification);
                        var _itemList = _item.customerList;


                        for (var j = _itemList.length - 1; j >= 0; j--) {
                            var item_list = _itemList[j];
                            // item_list.push(Order_classification);
                            item_list.Order_classification = Order_classification;
                            console.dir(item_list);
                            _tableList.push(item_list);
                        };


                    }
                };
                console.dir(_tableList);
                this.oeder_details = _tableList;

            }
        }
    }
</script>
<style lang="scss">
    #oeder{
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
        .order_search{
            position: relative;

            .handle-input{
                width: 500px;
                height: 45px;
                line-height: 45px;
                margin-right: 30px;
                .el-input__inner{
                    height: 45px;
                    line-height: 45px;
                    border-radius: 20px;
                    padding-left: 30px;
                    font-size: 16px;
                }
            }
            .el-icon-search{
                position: absolute;
                left: 7px;
                top: 15px;
                z-index: 100;

            }

            .el-button{
                padding:13px 20px;
                background-color: #fff;
                color:#000;
                border: 2px solid #bbb;
                font-size: 14px;
            }
        }
        .oeder_shu{
            .el-tabs__header{
                margin: 20px 0;
            }
            .el-tabs__nav-wrap::after{
                background: none;

            }
            .el-tabs__active-bar{
                display: none;
            }
            .el-tabs__item.is-top:nth-child(2){
                padding-left: 17px;
            }
            .el-tabs__item.is-top:last-child{
                padding-right: 17px;
            }
            .el-tabs__item{
                height: 32px;
                line-height: 32px;
                border: 1px solid #bbb;
                text-align: center;
                margin-right: 20px;
                border-radius: 18px;
                padding:0 17px;
            }
            .oeder_list li{
                border: 1px solid #bbb;
                height: 84px;
                padding-right: 10px;
                margin-bottom: 10px;
            }
            .oeder_li_img{
                margin-right: 20px;
                height: 84px;
            }
            .oeder_details{
                width: 400px;
                margin-top: 6px;
                position: relative;
                .oeder_details_span{
                    margin-right: 20px;
                }
                .oeder_sign{
                    width: 73px;
                    height: 29px;
                    color:#fff;
                    background-color: rgb(255, 152, 0);
                    border-radius: 21px;
                    position: absolute;
                    top: 0;
                    right: -73px;
                    line-height: 29px;
                    font-size: 14px;
                    text-align: center;
                }
                p{
                    line-height: 24px;
                    font-size: 14px;
                }
            }

            .oeder_modify{
                width: 165px;
                padding-top: 10px;
                margin-right: -10px;

                .el-button--small, .el-button--small.is-round{
                    padding:7px 0;
                    width: 70px;
                    margin-left: 0;
                    margin-right: 10px;
                    margin-bottom: 10px;
                    text-align: center;
                    color: #101010;
                    border-radius: 4px;
                }

            }
        }
    }

</style>
