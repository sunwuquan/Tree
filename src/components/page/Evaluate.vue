<template>
    <div class="evaluate-body">
        <div class="">
            <el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="evaluate-crumb-title">
                <el-breadcrumb-item class="evaluate-crumb-title_body">评价管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="evaluate-content">
            <div class="evaluate-content-search">
                <i class="iconfont base-icon">&#xe633;</i>
                <input class="evaluate-input" v-model="searchInput" type="text" placeholder="请输入访问日期/名字/手机号">
                <div class="evaluate-button" @click="handleSearchClick">搜索</div>
            </div>
            <div class="evaluate-nav">
                <span @click="handleClickAll" style="padding: 0 20px">全部</span>
                <span @click="handleClickDay">最近三天</span>
                <span @click="handleClickM">最近两周</span>
                <span @click="handleClickDate">最近一月</span>
            </div>
            <ul>
                <li v-for="item in dataList" :key="item.id" class="evaluate-li" >
                    <img :src="item.img" alt="" class="evaluate-img">
                    <div style="display: inline-block;margin-left: 15px;">
                        <div>
                            <span class="evaluate-span" style="">ID:</span><span class="evaluate-span" >{{item.id}}</span>
                        </div>
                        <div>
                            <span class="evaluate-span" style="margin-top:0;">昵称:</span><span class="evaluate-span" style="margin-top: 10px;" >{{item.name}}</span>
                        </div>
                    </div>
                    <div class="evaluate-delete" @click="handleDeleteClick(item.id)">删除</div>
                    <p class="evaluate-content">{{item.hisstory}}</p>
                    <div class="evaluate-bottom">
                        <div>
                            <span>订单号:</span>
                            <span>{{item.number}}</span>
                        </div>
                        <div><span>时间:</span>
                            <span>{{item.date}}</span></div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'evaluate',
        data(){
            return{
                searchInput:'',
                allList:[
                    {
                        phone:'15064777789',
                        wechart:'15166789057',
                        treetype:'爱情树',
                        treename:'一望无际',
                        hisstory:'她和他的相识只是一种偶然。她所在的单位与酒厂关系很密切，然后她又是经办企业报表这块工作，那天，当他替他父亲到经贸委协调有关酒业方面的数据时，他遇见了她。这一见，就让他着了魔，他第一步就请他的父亲打听她是否名花有主，待知道她还是一人时开始对她展开了进攻，几番下来，她感动于他的用心，但在她的心里总有一个疑问，她问他：你家在城里，我家在乡下，门不当，户不对，我们会有共同语言吗？',
                        hiswish:'我不知道洛是否做了一颗流星，是否完成了他的心愿。',
                        id: 1001,
                        name: '一叶知秋',
                        number: 'Asndddss889976',
                        date: '2018-7-2',
                        type: '未处理',
                        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546423357&di=b054f8545ec689509e77ae4850eb88df&imgtype=jpg&er=1&src=http%3A%2F%2Fimg3.3lian.com%2F2013%2Fs1%2F51%2Fd%2F118.jpg'
                    },
                    {
                        phone:'17789990087',
                        wechart:'1592083838',
                        treetype:'友情树',
                        treename:'海枯石烂',
                        hisstory:'那天，当他替他父亲到经贸委协调有关酒业方面的数据时，他遇见了她。这一见，就让他着了魔，他第一步就请他的父亲打听她是否名花有主，待知道她还是一人时开始对她展开了进攻，几番下来，她感动于他的用心，但在她的心里总有一个疑问，她问他：你家在城里，我家在乡下，门不当，户不对，我们会有共同语言吗？',
                        hiswish:'我不知道洛是否做了一颗流星，是否完成了他的心愿。',
                        id: 1002,
                        name: '两情相悦',
                        number: 'Asndddasfd9976',
                        date: '2017-1-2',
                        type: '已处理',
                        img: 'http://pic113.nipic.com/file/20161029/11606188_140619238000_2.jpg'
                    },
                    {
                        phone:'17009876087',
                        wechart:'15922323838',
                        treetype:'心愿树',
                        treename:'美梦成真',
                        hisstory:'这一见，就让他着了魔，他第一步就请他的父亲打听她是否名花有主，待知道她还是一人时开始对她展开了进攻，几番下来，她感动于他的用心，但在她的心里总有一个疑问，她问他：你家在城里，我家在乡下，门不当，户不对，我们会有共同语言吗？',
                        hiswish:'我不知道洛是否做了一颗流星，是否完成了他的心愿。',
                        id: 1003,
                        name: '三生有幸',
                        number: 'Asndasaa89976',
                        date: '2018-3-4',
                        type: '已处理',
                        img: 'http://www.qqpk.cn/Article/UploadFiles/beiying_touxiang/3.jpg'
                    },
                    {
                        phone:'18273746087',
                        wechart:'1592083838',
                        treetype:'友情树',
                        treename:'海枯石烂',
                        hisstory:'他第一步就请他的父亲打听她是否名花有主，待知道她还是一人时开始对她展开了进攻，几番下来，她感动于他的用心，但在她的心里总有一个疑问，她问他：你家在城里，我家在乡下，门不当，户不对，我们会有共同语言吗？',
                        hiswish:'我不知道洛是否做了一颗流星，是否完成了他的心愿。',
                        id: 1004,
                        name: '四季如春',
                        number: 'asfadsfafdaas6',
                        date: '2018-5-2',
                        type: '未处理',
                        img: 'http://img5.duitang.com/uploads/item/201408/21/20140821152617_VZvmZ.gif'
                    },
                    {
                        id: 1005,
                        name: '五福临门',
                        number: 'adfffasdfvxcv976',
                        date: '2018-6-2',
                        type: '未处理',
                        img: 'http://www.36588.com.cn:8080/ImageResourceMongo/UploadedFile/dimension/big/68615c48-8f4c-4341-b39d-cfae71719434.png'
                    },
                    {
                        id: 1006,
                        name: '溜得出奇',
                        number: 'Aasdfafdssadfa976',
                        date: '2018-7-5',
                        type: '已处理',
                        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547115512&di=56b4c2c6c0c9f7ba455f43f8ca7cfd68&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.touxiangdaquan.net%2Fuploads%2Fallimg%2Fc150624%2F1435093CZ50-24943.jpg'
                    },
                    {
                        id: 1007,
                        name: '七星高照',
                        number: 'sdfgsgsdgsdgsdg976',
                        date: '2018-7-8',
                        type: '未处理',
                        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546520855018&di=97440b09d77d57e8d006c588f0efad78&imgtype=0&src=http%3A%2F%2Ffile.qqkj.cn%2Fupload%2Favatar%2F201410%2F29%2F21%2F11%2F54432855c9c14351.jpg%2521200x200.jpg'
                    },
                    {
                        id: 1008,
                        name: '八点多了',
                        number: 'ertgsdgdsfa343434a',
                        date: '2018-7-4',
                        type: '未处理',
                        img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3383827824,2002324107&fm=26&gp=0.jpg'
                    }
                ],
                dataList: []
            }
        },
        created(){
            this.getDate()
        },
        methods:{
            //全部
            handleClickAll(){
                console.log("全部")
                this.dataList=this.allList
            },
            //三天
            handleClickDay(){
                console.log(  this.getDay(-3));
            },
            getDay(AddDayCount){
                var dd = new Date();
                dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
                var y = dd.getFullYear();
                var m = dd.getMonth()+1;//获取当前月份的日期
                var d = dd.getDate();
                return y+"-"+m+"-"+d;
            },
            //两周
            handleClickM(){
                console.log(  this.getDay(-14));
                console.log("两周")
            },
            //月
            handleClickDate() {
                console.log("月")
                var dd = new Date();
                dd.setMonth(dd.getMonth()-1);
                var y = dd.getFullYear();
                var m = dd.getMonth()+1;//获取当前月份的日期
                var d = dd.getDate();
                console.log(y+"-"+m+"-"+d)
            },
            //删除
            handleDeleteClick(item){
                console.log("删除"+item)
            },
            //初始获取数据
            getDate(){
                console.log("评价管理获取")
                this.dataList=this.allList
            },
            //搜索
            handleSearchClick(){
                console.log(this.searchInput);
//                this.dataList=this.searchList
                const allList=this.allList;
                const input=this.searchInput;
                const list=[];
                for(let i=0;i<allList.length;i++){
                    if(input===allList[i].name || input===allList[i].phone || input===allList[i].date){
                        list.push(allList[i])
                    }
                }
                this.dataList=list
            }
        }
    }
</script>
<style lang="scss">
    .evaluate-body {
        .evaluate-crumb-title {
            font-size: 18px;
            color: #000;
            left: 250px;
            margin-top: 25px;
            padding-left: 20px;
            overflow: hidden;
            height: 27px;
            text-align: left;
            font-family: SourceHanSansSC-bold;
        }
        .evaluate-crumb-title_body {
            left: 250px;
            top: 128px;
            height: 27px;
            overflow: hidden;
            color: rgba(16, 16, 16, 1);
            font-size: 18px;
            text-align: left;
            font-family: SourceHanSansSC-bold;
            .el-breadcrumb__inner{
                font-weight: 900;
            }
        }
        .evaluate-content{
            margin-left: 20px;
            margin-top: 20px;
            .evaluate-content-search {
                position: relative;
                .evaluate-input {
                    width: 661px;
                    height: 45px;
                    line-height: 20px;
                    border-radius: 23px;
                    outline: none;
                    color: rgba(16, 16, 16, 1);
                    font-size: 14px;
                    padding-left: 45px;
                    font-family: Roboto;
                    border: 1px solid rgba(187, 187, 187, 1);
                }
                .base-icon {
                    position: absolute;
                    left: 15px;
                    font-size: 25px;
                    color: rgba(0, 150, 136, 1);
                    height: 45px;
                    line-height: 45px;
                    font-weight: 700;
                }
                .evaluate-button {
                    width: 80px;
                    height: 46px;
                    line-height: 46px;
                    cursor: pointer;
                    border-radius: 4px;
                    color: rgba(16, 16, 16, 1);
                    font-size: 14px;
                    text-align: center;
                    font-family: Microsoft Yahei;
                    border: 1px solid rgba(187, 187, 187, 1);
                    display: inline-block;
                    margin-left: 20px;
                }
            }
            .evaluate-nav {
                margin-top: 20px;
                margin-bottom: 30px;
            }
            .evaluate-nav span {
                height: 40px;
                line-height: 40px;
                border-radius: 20px;
                background-color: rgba(0, 0, 0, 0.3);
                color: rgba(255, 255, 255, 1);
                font-size: 14px;
                padding: 0 15px;
                margin-right: 25px;
                text-align: center;
                font-family: Roboto;
                cursor: pointer;
                display: inline-block;
            }
            .evaluate-li{
                width: 98%;
                /*height: 249px;*/
                line-height: 20px;
                color: rgba(16, 16, 16, 1);
                font-size: 14px;
                margin-bottom: 20px;
                font-family: Roboto;
                border: 1px solid rgba(187, 187, 187, 1);
                .evaluate-img{
                    margin-left: 22px;
                    margin-top: 16px;
                    vertical-align: top;
                    display: inline-block;
                    width: 78px;
                    height: 78px;
                    border-radius: 39px;
                }
                .evaluate-span{
                    margin-top: 30px;
                    display: inline-block;
                    height: 27px;
                    color: rgba(16, 16, 16, 1);
                    font-size: 18px;
                    margin-right: 15px;
                    text-align: left;
                    font-family: SourceHanSansSC-regular;
                }
                .evaluate-delete{
                    width: 80px;
                    height: 30px;
                    line-height: 30px;
                    border-radius: 4px;
                    color: rgba(16, 16, 16, 1);
                    font-size: 14px;
                    text-align: center;
                    font-family: Microsoft Yahei;
                    border: 1px solid rgba(187, 187, 187, 1);
                    display: inline-block;
                    cursor: pointer;
                    margin-top: 20px;
                    margin-right: 35px;
                    float: right;
                }
                .evaluate-content{
                    color: rgba(0, 0, 0, 1);
                    font-size: 18px;
                    text-align: left;
                    padding-right:20px;
                    line-height: 25px;
                    font-family: SourceHanSansSC-regular;
                }
                .evaluate-bottom{
                    margin-top: 20px;
                    margin-left: 20px;
                    margin-bottom: 30px;
                }
                .evaluate-bottom div{
                    display: inline-block;
                    margin-right: 40px;
                }
                .evaluate-bottom span{
                    display: inline-block;
                    color: rgba(0, 0, 0, 0.5);
                    font-size: 18px;
                    text-align: left;
                    font-family: SourceHanSansSC-regular;
                    margin-right: 10px;
                }
            }
        }
    }

</style>
