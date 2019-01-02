<template>
    <div class="body">
        <div class="top clearfix">
            <p class="p1">早上好，管理员</p>
            <p class="p2">当前登录账户：{{name}}</p>
        </div>
        <div class="board">
            <div class="board_h3">
                <p>总用户102W,实体树总交易额2000W</p>
            </div>
            <div class="board_list">
                <ul class="board_ul">
                    <li v-for="item in dd_list">
                        <p><i class="el-icon-tickets"></i>{{item.value}}</p>
                        <dl class="clearfix">
                            <dd v-for="subItem in item.children" v-bind:style="{ backgroundColor: subItem.backgroundColor}">
                                <div class="board_ul_dd" >
                                    <p class="board_p1">{{subItem.value}}</p>
                                    <p class="board_p2">{{subItem.label<10000?subItem.label:((subItem.label/10000).toFixed(1) + 'W')}}</p>
                                </div>
                            </dd>
                        </dl>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Schart from 'vue-schart';
    import bus from '../common/bus';
    export default {
        name: 'dashboard',
        data() {
            return {
                name: localStorage.getItem('ms_username'),
                dd_list:[{
                    value:'用户',
                    children: [
                        {
                            value:'当天新增数',
                            backgroundColor:'rgb(255, 64, 129)',
                            label:'12'
                        },
                        {
                            value:'活跃用户数',
                            backgroundColor:'rgb(63, 81, 181)',
                            label:'16'
                        },
                        {
                            value:'启动次数',
                            backgroundColor:'rgb(0, 150, 136)',
                            label:'12000'
                        },
                        {
                            value:'累计用户',
                            backgroundColor:'rgb(255, 152, 0)',
                            label:'999'
                        }
                    ]
                },{
                    value:'商城',
                    children: [
                        {
                            value:'当天订单数',
                            backgroundColor:'rgb(255, 64, 129)',
                            label:'12'
                        },
                        {
                            value:'当天成交订单',
                            backgroundColor:'rgb(63, 81, 181)',
                            label:'16'
                        },
                        {
                            value:'订单总数',
                            backgroundColor:'rgb(0, 150, 136)',
                            label:'12000'
                        },
                        {
                            value:'总订单成交数',
                            backgroundColor:'rgb(255, 152, 0)',
                            label:'999'
                        },
                        {
                            value:'订单评价数',
                            backgroundColor:'rgb(0, 150, 136)',
                            label:'12000'
                        },
                        {
                            value:'当天成交额',
                            backgroundColor:'rgb(255, 152, 0)',
                            label:'999'
                        }
                    ]
                },
                    {
                        value:'社交',
                        children: [
                            {
                                value:'当天文章数',
                                backgroundColor:'rgb(255, 64, 129)',
                                label:'12'
                            },
                            {
                                value:'总文章数',
                                backgroundColor:'rgb(63, 81, 181)',
                                label:'16'
                            },
                            {
                                value:'当天动态数',
                                backgroundColor:'rgb(0, 150, 136)',
                                label:'2002520'
                            },
                            {
                                value:'总动态数',
                                backgroundColor:'rgb(255, 152, 0)',
                                label:'999'
                            },
                            {
                                value:'订单评价数',
                                backgroundColor:'rgb(0, 150, 136)',
                                label:'150000'
                            },
                            {
                                value:'当天成交额',
                                backgroundColor:'rgb(255, 152, 0)',
                                label:'999'
                            }
                        ]
                    }
                ]

            }
        },
        components: {
            Schart
        },
        computed: {
            role() {
                return this.name === 'admin' ? '超级管理员' : '普通用户';
            }
        },
        created(){
            this.handleListener();
            this.changeDate();
        },
        activated(){
            this.handleListener();
        },
        deactivated(){
            window.removeEventListener('resize', this.renderChart);
            bus.$off('collapse', this.handleBus);
        },
        methods: {
            changeDate(){
                const now = new Date().getTime();
                this.data.forEach((item, index) => {
                    const date = new Date(now - (6 - index) * 86400000);
                    item.name = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`
                })
            },
            handleListener(){
                bus.$on('collapse', this.handleBus);
                // 调用renderChart方法对图表进行重新渲染
                window.addEventListener('resize', this.renderChart)
            },
            handleBus(msg){
                setTimeout(() => {
                    this.renderChart()
                }, 300);
            },
            renderChart(){
                this.$refs.bar.renderChart();
                this.$refs.line.renderChart();
            }
        }
    }

</script>


<style scoped>
    .top{
        padding: 20px 0 20px 15px;
        border-bottom: 1px solid #bbb;
        margin-bottom: 20px;
    }
    .p1{
        float: left;
        margin-right: 30px;
    }
    .p2{
        float: left;
    }
    .board{
        margin: 0 30px;
    }
    .board_h3 p{
        width: 100%;
        height: 54px;
        line-height: 54px;
        background-color: rgb(255, 152, 0);
        border-radius: 27px;
        text-align: center;
        color:#fff;
        margin-bottom: 15px;
    }
    .board_ul li>p{
        font-size: 16px;
        line-height: 34px;
        margin-bottom: 15px;
    }
    .board_ul li dl dd{
        width: 150px;
        height: 150px;
        float: left;
        margin-right: 20px;
        margin-bottom: 20px;
        text-align: center;


    }
    .board_ul_dd{
        padding-top: 30px;
        color:#fff;
    }
    .board_p1{
        font-size: 14px;
        line-height: 24px;
        margin-bottom: 10px;
    }
    .board_p2{
        font-size: 36px;
    }

</style>
