<template>
    <div class="wish-body">
        <div class="">
            <el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="wish-cum-title">
                <el-breadcrumb-item class="wish-cum-title_body">心愿管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="wish-content">
            <div class="base-content-search">
                <i class="iconfont base-icon">&#xe633;</i>
                <input class="base-input" v-model="searchInput" type="text" placeholder="请输入访问日期/名字/手机号">
                <div class="base-button" @click="handleSearchClick">搜索</div>
                <div class="base-button" @click="handleDownClick">批量导出</div>
                <!--<div class="base-button" @click="exportTable">批量导出</div>-->
            </div>
            <div class="wish-nav">
                <span @click="handleClickAll" style="padding: 0 20px">全部</span>
                <span @click="handleClickDay">最近三天</span>
                <span @click="handleClickM">最近两周</span>
                <span @click="handleClickDate">最近一月</span>
            </div>
            <ul>
                <li v-for="item in ItemList" :key="item.id" class="wish-con-body">
                    <img class="wish-img" :src="item.img" alt="">
                    <div class="wish-con-body-conetn">
                        <div>
                            <span style="padding-top: 23px">ID:</span>
                            <span>{{item.id}}</span>
                            <span class="wish-con-title">{{item.type}}</span>
                        </div>
                        <div>
                            <span>昵称:</span><span>{{item.name}}</span>
                        </div>
                        <div>
                            <span>订单编号:</span><span>{{item.number}}</span>
                        </div>
                        <div>
                            <span>创建时间:</span><span>{{item.date}}</span>
                        </div>
                    </div>
                    <div class="wish-con-button">
                        <div @click="handleClickSel(item)">查看</div>
                        <div @click="handleClickDow" v-if="item.show">下载二维码</div>
                        <div @click="handleClickChuLi(item)" v-else>处理</div>
                    </div>
                    <img v-show="item.show"
                         style="float: right;margin-right: 50px;margin-top: 20px; display: inline-block;width: 110px;height: 110px"
                         :src="pic"
                         alt="">
                </li>
            </ul>
        </div>
        <el-dialog title="选择导出时间" :visible.sync="dialogVisible">
            <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="起始日期">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date" value-format="yyyy-MM-dd"
                                    style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="结束日期">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.todate" value-format="yyyy-MM-dd"
                                    style="width: 100%;"></el-date-picker>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button style="margin-right: 80px" @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleDialeDown()">导 出</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
//    import FileSaver from 'file-saver'
//    import XLSX from 'xlsx'
    export default {
        name: 'wishmanage',
        data() {
            return {
                searchInput: '',
                isIE:true,
                pic:'../../../src/assets/chenguihai.png',
                imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546497260&di=88d6fbdb2a2e1380b4b36a253285abb0&imgtype=jpg&er=1&src=http%3A%2F%2Fupload.mnw.cn%2F2016%2F0126%2F1453768615784.jpg',
                form: {
                    date: '',
                    todate: ''
                },
                dialogVisible: false,
                ItemList:[],
                dataList: [
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
                        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546423357&di=b054f8545ec689509e77ae4850eb88df&imgtype=jpg&er=1&src=http%3A%2F%2Fimg3.3lian.com%2F2013%2Fs1%2F51%2Fd%2F118.jpg'
                    },
                    {
                        id: 1007,
                        name: '七星高照',
                        number: 'sdfgsgsdgsdgsdg976',
                        date: '2018-7-8',
                        type: '未处理',
                        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546423357&di=b054f8545ec689509e77ae4850eb88df&imgtype=jpg&er=1&src=http%3A%2F%2Fimg3.3lian.com%2F2013%2Fs1%2F51%2Fd%2F118.jpg'
                    },
                    {
                        id: 1008,
                        name: '八点多了',
                        number: 'ertgsdgdsfa343434a',
                        date: '2018-7-4',
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
                        id: 1009,
                        name: '九九八十一难',
                        number: 'Asndddasfd9976',
                        date: '2017-1-2',
                        type: '已处理',
                        img: 'http://pic113.nipic.com/file/20161029/11606188_140619238000_2.jpg'
                    },
                ]
            }
        },
        methods: {
            // 导出
            exportTable() {
                require.ensure([], () => {
                    const { export_json_to_excel } = require('../../vendor/Export2Excel.js');
                    const tHeader = ['ID', '昵称', '订单号', '时间','状态'];
                    const filterVal = ['id', 'name', 'number', 'date','type'];
                    const list = this.dataList;
                    const data = this.formatJson(filterVal, list);
                    console.dir(data)
                    export_json_to_excel(tHeader, data, '订单列表');
                })
                console.log("=====")
            },
            formatJson(filterVal, jsonData) {
                 return jsonData.map(v => filterVal.map(j => v[j]))
            },
//   =======================================================================================
            //搜索
            handleSearchClick() {
                const list = this.dataList;
                for (var i = 0; i < list.length; i++) {
                    var item = list[i];
                    item.show = true;
                    if (item.type == "已处理") {
                        item.show = true;
                    } else {
                        item.show = false
                    }
                }
                const input=this.searchInput;
                const dataList=list;
                const getList=[];
                for(let i=0;i<dataList.length;i++){
                    if(input===dataList[i].name || input===dataList[i].date || input===dataList[i].phone){
                        getList.push(dataList[i])
                    }
                }
                this.ItemList=getList
            },
            //全部
            handleClickAll(){
                console.log("全部")
                var list=this.dataList;
                for(var i=0;i<list.length-1;i++){
                    for(var j=0;j<list.length-1-i;j++){
                        if(list[j].date>list[j+1].date){
                            var temp=list[j]
                            list[j]=list[j+1]
                            list[j+1]=temp
                        }
                    }
                }
                this.ItemList=''
                this.ItemList=list
                console.dir(this.ItemList)
            },
            //三天
            handleClickDay(){
                console.log(  this.getDay(-3));
                var date=this.getDay(-3)
                var list=this.ItemList;
                var Item=[]
                for(var i=0;i<list.length;i++){
                    if(list[i].date>date){
                        console.dir(list[i])
                    }
                }
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
            //批量导出
            handleDownClick() {
                this.dialogVisible = true;
            },
            //提交导出
            handleDialeDown() {
                console.dir(this.form)
                this.dialogVisible=false;
                this.exportTable();
            },
            //查看
            handleClickSel(item) {
                console.dir(item)
                console.log("查看")
            },
            //处理
            handleClickChuLi(item) {
                console.log("处理")
                console.dir(item)
//                this.$router.push({path:'/',query:{item:item}})
                this.$router.push({path: '/dealwish', query: {item: item}});
            },
            getDate() {
                const list = this.dataList;
                for (var i = 0; i < list.length; i++) {
                    var item = list[i];
                        item.show = true;
                    if (item.type == "已处理") {
                        item.show = true;
                    } else {
                        item.show = false
                    }
                }
                this.ItemList=list
                console.dir(list)
            },
            //下载二维码
            handleClickDow() {
                console.log("下载")
                this.downloadIamge();
            },
            //  =============================================================================================
            downloadIamge() {
                var name='chenguihai.jpg'
                var image = new Image();
                // 解决跨域 Canvas 污染问题
                image.setAttribute('crossOrigin', 'anonymous');
                image.onload = function () {
                    var canvas = document.createElement('canvas');
                    canvas.width = image.width;
                    canvas.height = image.height;
                    var context = canvas.getContext('2d');
                    context.drawImage(image, 0, 0, image.width, image.height);
                    if (this.isIE) {
                        this.saveFileForIE(canvas, name);
                    }
                    {
                        var url = canvas.toDataURL('image/png');
                        // 生成一个a元素
                        var a = document.createElement('a');
                        // 创建一个单击事件
                        var event = new MouseEvent('click');
                        a.download = name || new Date().getTime();
                        // 将生成的URL设置为a.href属性
                        a.href = url;
                        // 触发a的单击事件
                        a.dispatchEvent(event)
                    }
                };
                image.src = this.pic
                console.log("====")
            },
//            isIE() { //ie?
//                if (!!window.ActiveXObject || "ActiveXObject" in window)
//                    return true;
//                else
//                    return false;
//            },
            saveFileForIE(canvas, fileName) {
                try {
                    var blob = canvas.msToBlob();
                    navigator.msSaveBlob(blob, fileName);
                } catch (e) {
                    owlzerOBj.UTILE.alertP('Please upgrade your browser');
                }
            }
            //  =============================================================================================
        },
        created() {
            this.getDate();
        }
    }
</script>
<style lang="scss">
    .wish-body {
        background: #fff;
        .wish-cum-title {
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
        .wish-cum-title_body {
            left: 250px;
            top: 128px;
            height: 27px;
            overflow: hidden;
            color: rgba(16, 16, 16, 1);
            font-size: 20px;
            text-align: left;
            font-family: SourceHanSansSC-bold;
        }
        .wish-content {
            margin-left: 20px;
            padding: 0;
            margin-top: 35px;
            .base-content-search {
                position: relative;
                .base-input {
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
                .base-button {
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
            .wish-nav {
                margin-top: 20px;
                margin-bottom: 30px;
            }
            .wish-nav span {
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
            .wish-con-body {
                width: 98%;
                height: 189px;
                line-height: 20px;
                color: rgba(16, 16, 16, 1);
                font-size: 14px;
                font-family: Roboto;
                margin-bottom: 20px;
                border: 1px solid rgba(187, 187, 187, 1);
                .wish-img {
                    width: 78px;
                    height: 78px;
                    margin-top: 16px;
                    float: left;
                    display: inline-block;
                    border-radius: 39px;
                    margin-left: 20px;
                }
                .wish-con-body-conetn {
                    display: inline-block;
                    margin-left: 10px;
                }
                .wish-con-body-conetn span {
                    display: inline-block;
                    height: 27px;
                    margin-bottom: 10px;
                    font-size: 18px;
                    font-family: SourceHanSansSC-regular;
                }
                .wish-con-button {
                    display: inline-block;
                    float: right;
                }
                .wish-con-title {
                    width: 80px;
                    height: 32px;
                    display: inline-block;
                    margin-left: 33px;
                    line-height: 27px;
                    border-radius: 16px;
                    background-color: rgba(255, 152, 0, 1);
                    color: rgba(255, 255, 255, 1);
                    font-size: 14px;
                    color: #fff;
                    text-align: center;
                    font-family: Roboto;
                }
                .wish-con-button div {
                    width: 93px;
                    height: 30px;
                    margin-top: 20px;
                    margin-right: 20px;
                    line-height: 30px;
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
        .el-dialog {
            width: 623px;
            height: 361px;
            line-height: 20px;
            border-radius: 10px;
            border: 1px solid rgba(187, 187, 187, 1);
        }
        .el-dialog__title {
            font-size: 20px;
            color: rgba(255, 152, 0, 1);
        }
        .el-form-item__label {
            font-size: 20px;
            line-height: 40px;
        }
        .el-input__inner {
            height: 40px;
            line-height: 40px;
            width: 80%;
        }
        .dialog-footer {
            display: block;
            text-align: center;
        }
    }

</style>
