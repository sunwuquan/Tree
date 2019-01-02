<template>
    <div id="oeder_details">
        <div class="order">
            <div class="crumbs">
                <el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="title clearfix">
                    <el-breadcrumb-item to="/ordermanage" class="title_body">订单管理</el-breadcrumb-item>
                    <el-breadcrumb-item class="title_body">订单详情</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="details">
                <div class="details_top">
                    <div class="details_t_list">
                        <h3 class="details_t_h3">基本信息</h3>
                        <ul class="details_t_ul">
                            <li class="clearfix">
                                <p class="p1 fl">订单编号:</p>
                                <p class="p2 fl">{{information.Order_number}}</p>
                            </li>
                            <li class="clearfix">
                                <p class="p1 fl">商品名称:</p>
                                <p class="p2 fl">{{information.Trade_name}}</p>
                            </li>
                            <li class="clearfix">
                                <p class="p1 fl">购买数量:</p>
                                <p class="p2 fl"><span class="span">{{information.Purchase_quantity}}</span>
                                    <el-button @click="getGeography()">地理位置</el-button>
                                </p>
                            </li>
                            <li class="clearfix">
                                <p class="p1 fl">支付方式:</p>
                                <p class="p2 fl">{{information.Payment_method}}</p>
                            </li>
                            <li class="clearfix">
                                <p class="p1 fl">花费:</p>
                                <p class="p2 fl">{{information.spend}}</p>
                            </li>
                            <li class="clearfix">
                                <p class="p1 fl">下单时间:</p>
                                <p class="p2 fl">{{information.time}}</p>
                            </li>
                            <li class="clearfix">
                                <p class="p1 fl">用户ID:</p>
                                <p class="p2 fl">{{information.id}}</p>
                            </li>
                            <li class="clearfix">
                                <p class="p1 fl">基本名称:</p>
                                <p class="p2 fl">{{information.Basic_name}}</p>
                            </li>
                            <li class="clearfix">
                                <p class="p1 fl">订单状态:</p>
                                <p class="p2 fl"><span class="span">{{information.Order_status}}</span>
                                    <el-button @click="eDitVisib = true">修改</el-button>
                                </p>
                            </li>
                            <li class="clearfix">
                                <p class="p1 fl">物流公司:</p>
                                <p class="p2 fl">{{information.company}}</p>
                            </li>
                            <li class="clearfix">
                                <p class="p1 fl">物流编号:</p>
                                <p class="p2 fl"><span class="span">{{information.Logistics_number}}</span>
                                    <el-button @click="editVisible = true">修改</el-button>
                                </p>
                            </li>
                            <li class="clearfix">
                                <p class="p1 fl">物流状态:</p>
                                <p class="p2 fl">{{information.Logistics_status}}</p>
                            </li>
                            <li class="details_t_ul_li"><img :src="information.img" height="150" width="150" alt=""/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="details_bottom">
                    <h3 class="details_b_h3">树生长状态</h3>
                    <div class="details_b_nev">
                        <el-button @click="getDynamic">上传</el-button>
                    </div>
                    <div class="details_b_list" v-for="(item,index) in Growth_state">
                        <div class="details_b_item">
                            <p>{{item.time}}</p>
                            <p>{{item.content}}</p>
                            <div class="details_b_img"><img v-for="img_item in item.state_img" :src="img_item.img"
                                                            height="120" width="120" alt=""/></div>
                        </div>
                        <div class="details_b_button">
                            <el-button @click="ModifyState">修改</el-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog title="填写物流信息" :visible.sync="editVisible" width="30%">
            <el-form ref="form" :model="form" status-icon label-width="80px"> <!-- :rules="rules2" -->
                <el-form-item label="物流公司">
                    <el-select v-model="id" placeholder="请选择"> <!-- @change="getLabel" -->
                        <el-option :key="item.name" v-for="item in list" :label="item.name"
                                   :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="物流编号" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>

        <!--<el-dialog-->
            <!--title="状态"-->
            <!--:visible.sync="eDitVisib">-->
            <!--<el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">-->
                    <!--<el-radio-group v-model="ruleForm.resource">-->
                        <!--<el-radio :label="item.name" v-for="item in state" :key="item.id"></el-radio>-->
                        <!--&lt;!&ndash;<el-radio label="线下场地免费"></el-radio>&ndash;&gt;-->
                    <!--</el-radio-group>-->
            <!--</el-form>-->
            <!--<span slot="footer" class="dialog-footer">-->
                <!--<el-button style="margin-right: 80px" @click="eDitVisib = false">取 消</el-button>-->
                <!--<el-button type="primary" @click="handleEdeit">导 出</el-button>-->
            <!--</span>-->
        <!--</el-dialog>-->

        <el-dialog
        :title="'状态 :  '+information.Order_status"
        :visible.sync="eDitVisib">
            <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-radio-group v-model="ruleForm.resource" @change="onRadioChange">
            <el-radio label="已下单"></el-radio>
            <el-radio label="已确定"><span>已确定</span>
                <div style="display: inline-block;margin-left: 30px" v-show="show">
                    <el-select v-model="ruleForm.dregion" placeholder="请选择活动区域">
                        <el-option :label="item.name" v-for="item in region" :key="item.id" :value="item.name"></el-option>
                        <!--<el-option label="区域二" value="beijing"></el-option>-->
                    </el-select>
                </div></el-radio>
            <el-radio label="运输中"></el-radio>
            <el-radio label="种植中"></el-radio>
            <el-radio label="成长中"></el-radio>
            </el-radio-group>
            </el-form>
            <!--<br>-->
            <!--<input type="radio" name="radios" value="2"><label>two</label>-->
            <!--<br>-->
            <!--<input type="radio" name="radios" value="2"><label>three</label>-->
        <span slot="footer" class="dialog-footer">
        <el-button style="margin-right: 80px" @click="eDitVisib = false">取 消</el-button>
        <el-button type="primary" @click="handleEdeit">确 定</el-button>
        </span>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        name: 'ordermandeteail',
        data() {
            return {
                show:false,
                editVisible: false,
                stateVisible: false,
                eDitVisib: false,
                id: '2',
                title:'',
                state_id: '3',
                form: {
                    name: ''
                },
                ruleForm:{
                    dregion:'区域三',
                    resource:''
                },
                region:[
                    {name:'区域一',id:'1001'},
                    {name:'区域二',id:'1002'},
                    {name:'区域三',id:'1003'}
                ],
                state: [
                    {
                        name: '已下单',
                        id: '1'
                    },
                    {
                        name: '已确认',
                        id: '2'
                    },
                    {
                        name: '运输中',
                        id: '3'
                    },
                    {
                        name: '种植中',
                        id: '4'
                    },
                    {
                        name: '成长中',
                        id: '5'
                    }

                ],
                list: [
                    {
                        name: '中通快递',
                        id: '1'
                    },
                    {
                        name: '圆通快递',
                        id: '2'
                    },
                    {
                        name: '天天快递',
                        id: '3'
                    },
                    {
                        name: '邮政快递',
                        id: '4'
                    },
                ],
                information: {
                    Order_number: '123131121311',
                    Trade_name: '企业树',
                    Purchase_quantity: '15',
                    Payment_method: '能量',
                    spend: '999',
                    time: '2018-12-14 15:16',
                    id: '12',
                    Basic_name: '无',
                    Order_status: '已下单',
                    company: '圆通物流',
                    Logistics_number: '121213112313121',
                    Logistics_status: '已收货',
                    img: '../../../static/img/img.jpg'
                },
                Growth_state: [
                    {
                        time: '2018-12-13 16:26',
                        content: '大啊飒飒放的是广告费怪怪的非官方的多福多寿三三大大啊',
                        state_img: [
                            {
                                img: '../../../static/img/img.jpg'
                            },
                            {
                                img: '../../../static/img/img.jpg'
                            },
                            {
                                img: '../../../static/img/img.jpg'
                            },
                            {
                                img: '../../../static/img/img.jpg'
                            }
                        ]
                    },
                    {
                        time: '2018-12-13 16:26',
                        content: '大啊飒飒放的是广费尔法士大夫的发送到',
                        state_img: [
                            {
                                img: '../../../static/img/img.jpg'
                            },
                            {
                                img: '../../../static/img/img.jpg'
                            },
                            {
                                img: '../../../static/img/img.jpg'
                            },
                            {
                                img: '../../../static/img/img.jpg'
                            }
                        ]
                    }

                ]
            }
        },
        computed: {},
        methods: {
            // 地理位置
            getGeography() {
                this.$router.push({path:'/Geography'});
            },
            // 修改物流
            saveEdit() {
                this.editVisible = false;
            },
            // 修改状态
            handleEdeit() {
                console.log(this.ruleForm.resource)
                console.log(this.ruleForm.dregion)
                this.stateVisible = false;
            },
            onRadioChange(item){
                if(item==='已确定'){
                    this.show=true;
                }else {
                    this.show=false
                }
                console.dir(item)
            },
            // 上传生长状态
            getDynamic() {
                this.$router.push({path:'/Dynamic'});
            },
            // 修改生长状态
            ModifyState() {
                this.$router.push({path:'/ModifyState'});
            }
        }
    }
</script>
<style lang="scss">
    #oeder_details {
        background: #fff;
        .order {
            padding: 0 20px;
        }
        .title {
            font-size: 18px;
            color: #000;
            height: 27px;
            text-align: left;
            padding: 10px 0;
        }
        .title_body {
            line-height: 27px;
            color: rgba(16, 16, 16, 1);
            font-size: 18px;
            text-align: left;
            font-family: SourceHanSansSC-bold;
        }
        .details_top {
            padding-right: 15px;
            margin-bottom: 50px;
            .details_t_list {
                border-bottom: 1px solid rgb(187, 187, 187);
                padding-bottom: 30px;
            }
        }
        .details_t_h3 {
            font-family: SourceHanSansSC;
            font-weight: 400;
            font-size: 20px;
            color: rgba(6, 155, 101, 1);
            font-style: normal;
            letter-spacing: 0;
            line-height: 29px;
            margin-bottom: 15px;
        }
        .details_t_ul {
            position: relative;
            .details_t_ul_li {
                position: absolute;
                right: 0;
                top: 20px;
            }
        }
        .details_t_ul li {
            font-family: SourceHanSansSC;
            font-weight: 400;
            font-size: 16px;
            color: rgb(16, 16, 16);
            font-style: normal;
            letter-spacing: 0;
            line-height: 27px;
            margin-bottom: 15px;
            .p1 {
                width: 90px;
            }
            .p2 {
                .span {
                    margin-right: 15px;
                }
                .el-button--small, .el-button--small.is-round {
                    padding: 6px 15px;
                    border: 1px solid #bbb;
                    border-radius: 3px;
                }
                .el-button--small, .el-button--small.is-round:hover {
                    color: #000;
                    background-color: #fff;
                }
            }
        }
        .details_bottom {
            padding-right: 15px;
            .details_b_h3 {
                font-family: SourceHanSansSC;
                font-weight: 400;
                font-size: 20px;
                color: rgba(6, 155, 101, 1);
                font-style: normal;
                letter-spacing: 0;
                line-height: 29px;
                margin-bottom: 15px;
            }
            .details_b_nev {
                margin-bottom: 20px;
                .el-button--small, .el-button--small.is-round {
                    padding: 6px 20px;
                    border: 1px solid #bbb;
                    border-radius: 3px;
                }
                .el-button--small, .el-button--small.is-round:hover {
                    color: #000;
                    background-color: #fff;
                }
            }
            .details_b_list {
                position: relative;
                border: 1px solid #bbb;
                padding: 20px 20px 15px 20px;
                margin-bottom: 20px;
                p {
                    font-size: 16px;
                    line-height: 27px;
                    margin-bottom: 10px;

                }
                .details_b_img img {
                    width: 100px;
                    height: 100px;
                    margin-right: 20px;
                }
                .details_b_button {
                    position: absolute;
                    top: 15px;
                    right: 10px;
                    .el-button--small, .el-button--small.is-round {
                        padding: 6px 20px;
                        border: 1px solid #bbb;
                        border-radius: 3px;
                    }
                    .el-button--small, .el-button--small.is-round:hover {
                        color: #000;
                        background-color: #fff;
                    }
                }
            }
        }
        .el-dialog{
            width: 50%;
            height: 380px;
            .el-dialog__title{
                font-size: 22px;
            }
            .demo-ruleForm{
                .el-radio{
                    display: block;
                    font-size: 20px;
                    line-height: 30px;
                    .el-radio__input{
                        font-size: 20px;
                    }
                    .el-radio__label{
                        font-size: 20px;
                    }
                }
                .el-radio+.el-radio{
                    margin-left: 0;
                }
            }
        }

        .el-dialog {
            padding: 15px 30px;
            border-radius: 10px;
        }
        .el-select {
            width: 100%;
        }
    }
</style>
