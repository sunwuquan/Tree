<template>
    <div class="body">
        <div class="crumbs">
            <el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="title">
                <el-breadcrumb-item class="title_body">商品管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="centent">
            <div class="content_title">
                <span @click="handleClicShow" :class="{'active':classShow===1}" class="title_all">全部</span>
                <span @click="handleClicElse" :class="{'active':classShow===2}" class="title_classification">分类</span>
            </div>

            <div class="content_body">
                <!--全部内容显示-->
                <div v-if="show" class="content_all">
                    <div class="con-title">
                        <i class="iconfont">&#xe633;</i>
                        <input type="text" placeholder=" 输入树的编号/树名字" v-model="SearchInput" prefix-icon="el-icon-search"
                               class="searchinput">
                        <button type="button" @click="handleSearchClick" class="button-search">搜索</button>
                    </div>
                    <div class="con-body">
                        <ul>
                            <li v-for="item in getDateList" :key="item.id" class="body-content">
                                <img :src="item.img" alt="" class="cont-img">
                                <p class="con-top-left">{{item.text}}</p>
                                <p class="body-title">{{item.title}}</p>
                                <p class="body-number">编号:{{item.id}}</p>
                                <p class="body-price">{{item.kg}}/{{item.price}}</p>
                                <div class="body-bottom">
                                    <p @click="handleUpClick(item.id)">上架</p>
                                    <p @click="handleDownClick(item.id)">下架</p>
                                    <p @click="handleSelectClick(item)">查看</p>
                                </div>
                            </li>
                        </ul>
                    </div>


                </div>
                <!--分类内容显示-->
                <div class="content_sification" v-else>
                    <div class="sifi-title">
                        <div class="sifi-left">分类</div>
                        <router-link tag="div" to="/manageeparate" class="sifi-right">管理分类</router-link>
                    </div>
                    <el-tabs style="margin-top: 28px" v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane :label="item.title" v-for="item in dataList" :name="item.title" :key="item.id">
                            <ul>
                                <li v-for="item in item.desc" :key="item.id" class="body-content">
                                    <img :src="item.img" alt="" class="cont-img">
                                    <p class="con-top-left">{{item.text}}</p>
                                    <p class="body-title">{{item.title}}</p>
                                    <p class="body-number">编号:{{item.id}}</p>
                                    <p class="body-price">{{item.kg}}/{{item.price}}</p>
                                    <div class="body-bottom">
                                        <p @click="handleUpClick(item.id)">上架</p>
                                        <p @click="handleDownClick(item.id)">下架</p>
                                        <p @click="handleSelectClick(item)">查看</p>
                                    </div>
                                </li>
                            </ul>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'baseform',
        data: function () {
            return {
                show: true,
                SearchInput: '',
                activeName: '爱情树',
                classShow: 1,
                Text: '上架',
                getDateList: [],
                dataList: [
                    {
                        id: 1001, title: '爱情树',
                        desc: [{
                            id: 1001,
                            title: '爱情树',
                            price: '999.0',
                            kg: '22647g',
                            imglist: [{
                                name: 'food.jpeg',
                                url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg'
                            }, {
                                name: 'food2.jpeg',
                                url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg'
                            }, {
                                name: "3232",
                                url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4188084997,2513755353&fm=26&gp=0.jpg"
                            }, {
                                name: "3232",
                                url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4188084997,2513755353&fm=26&gp=0.jpg"
                            }],
                            img: 'https://img.alicdn.com/imgextra/i1/1113401174/TB2ZOLQpSYTBKNjSZKbXXXJ8pXa_!!1113401174.jpg_430x430q90.jpg',
                            text: '已上架'
                        },
                            {
                                id: 1002,
                                title: '爱情树',
                                price: '339.0',
                                kg: '22647g',
                                imglist: [{
                                    name: 'food.jpeg',
                                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg'
                                }, {
                                    name: 'food2.jpeg',
                                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg'
                                }, {
                                    name: "3232",
                                    url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4188084997,2513755353&fm=26&gp=0.jpg"
                                }, {
                                    name: "3232",
                                    url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4188084997,2513755353&fm=26&gp=0.jpg"
                                }],
                                img: 'https://img.alicdn.com/imgextra/i1/1113401174/TB2ZOLQpSYTBKNjSZKbXXXJ8pXa_!!1113401174.jpg_430x430q90.jpg',
                                text: '已上架'
                            },
                            {
                                id: 1003,
                                title: '爱情树',
                                price: '292.0',
                                kg: '22217g',
                                imglist: [{
                                    name: 'food.jpeg',
                                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg'
                                }, {
                                    name: 'food2.jpeg',
                                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg'
                                }, {
                                    name: "3232",
                                    url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4188084997,2513755353&fm=26&gp=0.jpg"
                                }, {
                                    name: "3232",
                                    url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4188084997,2513755353&fm=26&gp=0.jpg"
                                }],
                                img: 'https://img.alicdn.com/imgextra/i1/1113401174/TB2ZOLQpSYTBKNjSZKbXXXJ8pXa_!!1113401174.jpg_430x430q90.jpg',
                                text: '已下架'
                            }]
                    },
                    {
                        id: 1002, title: '亲情树', desc:
                        [{
                            id: 1004,
                            title: '亲情树',
                            price: '999.0',
                            kg: '22647g',
                            img: 'https://img.alicdn.com/imgextra/i1/1113401174/TB2ZOLQpSYTBKNjSZKbXXXJ8pXa_!!1113401174.jpg_430x430q90.jpg',
                            text: '已上架'
                        },
                            {
                                id: 1005,
                                title: '亲情树',
                                price: '339.0',
                                kg: '22647g',
                                img: 'https://img.alicdn.com/imgextra/i1/1113401174/TB2ZOLQpSYTBKNjSZKbXXXJ8pXa_!!1113401174.jpg_430x430q90.jpg',
                                text: '已上架'
                            },
                            {
                                id: 1006,
                                title: '亲情树',
                                price: '292.0',
                                kg: '22217g',
                                img: 'https://img.alicdn.com/imgextra/i1/1113401174/TB2ZOLQpSYTBKNjSZKbXXXJ8pXa_!!1113401174.jpg_430x430q90.jpg',
                                text: '已下架'
                            }]
                    },
                    {
                        id: 1003, title: '友情树', desc: [{
                        id: 1007,
                        title: '友情树',
                        price: '999.0',
                        kg: '22647g',
                        img: 'https://img.alicdn.com/imgextra/i1/1113401174/TB2ZOLQpSYTBKNjSZKbXXXJ8pXa_!!1113401174.jpg_430x430q90.jpg',
                        text: '已上架'
                    },
                        {
                            id: 1008,
                            title: '友情树',
                            price: '339.0',
                            kg: '22647g',
                            img: 'https://img.alicdn.com/imgextra/i1/1113401174/TB2ZOLQpSYTBKNjSZKbXXXJ8pXa_!!1113401174.jpg_430x430q90.jpg',
                            text: '已上架'
                        },
                        {
                            id: 1009,
                            title: '友情树',
                            price: '292.0',
                            kg: '22217g',
                            img: 'https://img.alicdn.com/imgextra/i1/1113401174/TB2ZOLQpSYTBKNjSZKbXXXJ8pXa_!!1113401174.jpg_430x430q90.jpg',
                            text: '已下架'
                        }]
                    },
                    {
                        id: 1004, title: '偶像树', desc: [{
                        id: 1010,
                        title: '偶像树',
                        price: '999.0',
                        kg: '22647g',
                        img: 'https://img.alicdn.com/imgextra/i1/1113401174/TB2ZOLQpSYTBKNjSZKbXXXJ8pXa_!!1113401174.jpg_430x430q90.jpg',
                        text: '已上架'
                    },
                        {
                            id: 1011,
                            title: '偶像树',
                            price: '339.0',
                            kg: '22647g',
                            img: 'https://img.alicdn.com/imgextra/i1/1113401174/TB2ZOLQpSYTBKNjSZKbXXXJ8pXa_!!1113401174.jpg_430x430q90.jpg',
                            text: '已上架'
                        },
                        {
                            id: 1012,
                            title: '偶像树',
                            price: '292.0',
                            kg: '22217g',
                            img: 'https://img.alicdn.com/imgextra/i1/1113401174/TB2ZOLQpSYTBKNjSZKbXXXJ8pXa_!!1113401174.jpg_430x430q90.jpg',
                            text: '已下架'
                        }]
                    },
                    {id: 1005, title: '学业树', desc: []},
                    {id: 1006, title: '祈福树', desc: []},
                    {id: 1007, title: '工艺树', desc: []}
                ]
            }
        },
        methods: {
            //搜索
            handleSearchClick() {
                var list = this.dataList
                const itme = []
                for (var i = 0; i < list.length; i++) {
                    var body = list[i].desc
                    for (var j = 0; j < body.length; j++) {
                        itme.push(body[j])
                    }
                }
                var input = this.SearchInput;
                    var getList = itme;
                    var getItem = []
                    for (let i = 0; i < getList.length; i++) {
                        if (parseInt(input) === getList[i].id || input === getList[i].title) {
                            getItem.push(getList[i])
                        }
                    }
                    this.getDateList = getItem
            },
//            全部
            handleClicShow() {
                this.show = true;
                this.classShow = 1
            },
            // 分类
            handleClicElse() {
                this.show = false
                this.classShow = 2
            },
            //上架
            handleUpClick(itemId) {
                var List = this.getDateList;
                for (var i = 0; i < List.length; i++) {
                    var item = List[i];
                    if (itemId === item.id) {
                        item.text = '已上架'
                        console.dir(item)
                    }
                }
                console.log("上架")
            },
            //下架
            handleDownClick(itemId) {
                var List = this.getDateList;
                for (var i = 0; i < List.length; i++) {
                    var item = List[i];
                    if (itemId === item.id) {
                        item.text = '已下架'
                        console.dir(item)
                    }
                }
                console.log("下架")
            },
            //查看
            handleSelectClick(item) {
//                console.dir(item)
//                console.log("查看"+item.id)
                var id = item.id
                this.$router.push({path: '/comdetaile', query: {item: item}});
//                this.$router.push({ path: '/demotext', query: { item:item }});
            },
            handleClick(tab, event) {
                console.log(tab, event);
            },
            getDate() {
                console.log("获取数据")
                var list = this.dataList
                const itme = []
                for (var i = 0; i < list.length; i++) {
                    var body = list[i].desc
                    for (var j = 0; j < body.length; j++) {
                        itme.push(body[j])
                    }
                }
                this.getDateList = itme
            }
        },
        created() {
            this.getDate()
        }
    }
</script>
<style lang="scss">
    .body {
        background: #fff;
    }

    .title {
        font-size: 18px;
        margin-left: 20px;
        margin-top: 12px;
    }

    .title_body {
        height: 27px;
        color: rgba(16, 16, 16, 1);
        font-size: 18px;
        text-align: left;
        font-family: SourceHanSansSC-bold;
        .el-breadcrumb__inner {
            font-weight: 900;
        }
    }

    .centent {
        width: 100%;
        margin-top: 52px;
    }

    .content_title {
        width: 270px;
        margin: 0 auto;
        text-align: center;
        overflow: hidden;

    }

    .content_title span {
        display: inline-block;
        text-align: center;
        margin: 0 auto;
        cursor: pointer;
        float: left;
        padding: 0;
        width: 127px;
        border: 1px solid rgba(187, 187, 187, 1);
        font-size: 14px;
        height: 30px;
        line-height: 30px;

    }

    .title_all {
        border-radius: 4px 0 0 4px;
    }

    .active {
        background: #009688 100%;
        color: #fff;
    }

    .title_classification {
        border-radius: 0 4px 4px 0;
    }

    .content_body {
        margin-top: 30px;
        width: 100%;
        height: auto;
        overflow: hidden;
        margin-left: 25px;
    }

    .content_all {

    }

    .con-title {
        width: 100%;
        position: relative;
        height: 45px;
        line-height: 45px;
    }

    .con-body {
        width: auto;
        height: auto;
        overflow: hidden;
        margin-top: 34px;
        display: inline-block;
    }

    .searchinput {
        width: 55%;
        height: 45px;
        line-height: 20px;
        border-radius: 23px;
        color: rgba(16, 16, 16, 1);
        font-size: 14px;
        padding-left: 38px;
        text-align: left;
        font-family: Roboto;
        border: 1px solid rgba(187, 187, 187, 1);
    }

    .iconfont {
        position: absolute;
        left: 10px;
        line-height: 45px;
        z-index: 99;
        font-size: 28px;
        color: rgba(0, 150, 136, 1);
    }

    .button-search {
        margin-left: 20px;
        width: 80px;
        height: 46px;
        border-radius: 4px;
        color: rgba(16, 16, 16, 1);
        font-size: 14px;
        text-align: center;
        font-family: Microsoft Yahei;
        border: 1px solid rgba(187, 187, 187, 1);

    }

    .body ul > li {
        padding: 0;
        /*margin: 0;*/
        float: left;
        list-style: none;
        margin-right: 28px;
    }

    .body-content {
        width: 301px;
        height: 413px;
        overflow: hidden;
        line-height: 20px;
        position: relative;
        color: rgba(16, 16, 16, 1);
        margin-top: 30px;
        font-size: 14px;
        /*text-align: center;*/
        font-family: Roboto;
        border: 1px solid rgba(187, 187, 187, 1);

    }

    .con-top-left {
        position: absolute;
        right: 10px;
        top: 10px;
        width: 73px;
        height: 30px;
        line-height: 30px;
        border-radius: 15px;
        background-color: rgba(255, 152, 0, 1);
        color: rgba(255, 255, 255, 1);
        font-size: 14px;
        text-align: center;
        font-family: Roboto;

    }

    .body-title {
        width: 54px;
        display: inline-block;
        height: 27px;
        margin-top: 11px;
        margin-left: 17px;
        color: rgba(16, 16, 16, 1);
        font-size: 18px;
        text-align: left;
        font-family: SourceHanSansSC-bold;
    }

    .body-number {
        margin-top: 11px;
        display: inline-block;
        height: 27px;
        color: rgba(16, 16, 16, 1);
        font-size: 18px;
        float: right;
        margin-right: 21px;
        font-family: SourceHanSansSC-regular;
    }

    .body-price {
        margin-left: 17px;
        width: 142px;
        height: 27px;
        color: rgba(229, 28, 35, 1);
        font-size: 18px;
        text-align: left;
        margin-top: 8px;
        font-family: SourceHanSansSC-regular;
    }

    .cont-img {
        display: inline-block;
        width: 300px;
        height: 278px;
        /*border: 1px solid #0000ff;*/
    }

    .body-bottom {
        width: 100%;
        margin-top: 11px;
    }

    .body-bottom p {
        display: inline-block;
        width: 80px;
        height: 30px;
        line-height: 30px;
        margin-left: 13px;
        border-radius: 4px;
        color: rgba(16, 16, 16, 1);
        font-size: 14px;
        text-align: center;
        cursor: pointer;
        font-family: Microsoft Yahei;
        border: 1px solid rgba(187, 187, 187, 1);

    }

    .el-tabs__nav {
        .el-tabs__active-bar {
            background: none;
        }
    }

    .content_sification {
        width: 100%;
    }

    .content_sification .el-tabs__item {
        width: 73px;
        height: 30px;
        line-height: 30px;
        border-radius: 15px;
        background-color: rgba(255, 255, 255, 0);
        color: rgba(0, 0, 0, 1);
        font-size: 14px;
        text-align: center;
        padding: 0;
        margin-right: 12px;
        margin-bottom: 30px;
        font-family: Roboto;
        border: 1px solid rgba(187, 187, 187, 1);
    }

    .content_sification .is-active {
        background-color: rgba(139, 195, 74, 1);
        color: rgba(255, 255, 255, 1);
    }

    .sifi-title {
        width: 100%;
    }

    .sifi-left {
        height: 29px;
        color: rgba(16, 16, 16, 1);
        font-size: 20px;
        display: inline-block;
        text-align: left;
        font-family: SourceHanSansSC-regular;
    }

    .sifi-right {
        display: inline-block;
        width: 80px;
        height: 30px;
        line-height: 30px;
        float: right;
        margin-right: 65px;
        cursor: pointer;
        border-radius: 4px;
        color: rgba(16, 16, 16, 1);
        font-size: 14px;
        text-align: center;
        font-family: Microsoft Yahei;
        border: 1px solid rgba(187, 187, 187, 1);

    }

    .item-title {
        width: 73px;
        height: 30px;
        display: inline-block;
        line-height: 30px;
        border-radius: 15px;
        background-color: rgba(139, 195, 74, 1);
        color: rgba(255, 255, 255, 1);
        font-size: 14px;
        margin-right: 12px;
        text-align: center;
        cursor: pointer;
        font-family: Roboto;
    }
</style>
