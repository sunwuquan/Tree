<template>
    <div class="body-detail">
        <div class="crumbs">
            <el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="title">
                <el-breadcrumb-item to="/form" class="title_body">商品管理</el-breadcrumb-item>
                <el-breadcrumb-item to="/manageeparate" class="title_body">分类管理</el-breadcrumb-item>
                <el-breadcrumb-item to="/managedetail" class="title_body">分类详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="body-det-body">
            <ul>
                <li v-for="item in detailId" :key="item.id" class="det-content">
                    <img :src="item.img" alt="" class="det-img">
                    <p class="det-top-left">{{item.text}}</p>
                    <p class="det-title">{{item.title}}</p>
                    <p class="det-number">编号:{{item.id}}</p>
                    <p class="det-pice">{{item.kg}}/{{item.price}}</p>
                    <div class="det-bottom">
                        <p @click="handleUpClick(item.id)">上架</p>
                        <p @click="handleDownClick(item.id)">下架</p>
                        <p @click="handleSelectClick(item)">查看</p>
                        <p @click="handleDelClick(item)">删除</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name:'managedetail',
        data(){
            return{
                detailId:[]
            }
        },
        methods:{
            //上架
            handleUpClick(itemId) {
                var List = this.detailId;
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
                var List = this.detailId;
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
            handleDelClick(item){
                console.dir(item)
            },
        },
        created(){
            this.detailId=this.$route.query.item
            console.dir("===="+this.detailId)

        }
    }
</script>
<style scoped>
    .title{
        font-size: 18px;
        margin-left: 20px;
        margin-top: 12px;
    }
    .body-det-body{
        width: 100%;
        margin-left: 20px;
        margin-top: 80px;
    .el-breadcrumb__inner{
        font-weight: 900;
    }
    }
        .det-content{
            width: 301px;
            height: 456px;
            line-height: 20px;
            color: rgba(16, 16, 16, 1);
            font-size: 14px;
            display: inline-block;
            float: left;
            margin-right: 30px;
            margin-bottom: 30px;
            /*text-align: center;*/
            position: relative;
            font-family: Roboto;
            border: 1px solid rgba(187, 187, 187, 1);
        }
        .det-img{
            width: 300px;
            height: 278px;
        }
        .det-top-left{
            position: absolute;
            right:10px;
            top:10px;
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
        .det-title{
            width: 54px;
            height: 27px;
            color: rgba(16, 16, 16, 1);
            font-size: 18px;
            text-align: left;
            margin-left: 17px;
            margin-top: 11px;
            font-family: SourceHanSansSC-bold;
            display: inline-block;
        }
        .det-number{
            height: 27px;
            float: right;
            margin-top: 11px;
            margin-right: 20px;
            color: rgba(16, 16, 16, 1);
            font-size: 18px;
            text-align: right;
            display: inline-block;
            font-family: SourceHanSansSC-regular;
        }
        .det-pice{
            margin-top: 8px;
            margin-left: 20px;
            height: 27px;
            color: rgba(229, 28, 35, 1);
            font-size: 18px;
            text-align: left;
            font-family: SourceHanSansSC-regular;
        }
        .det-bottom p{
            width: 80px;
            height: 30px;
            cursor: pointer;
            line-height: 30px;
            display: inline-block;
            border-radius: 4px;
            color: rgba(16, 16, 16, 1);
            font-size: 14px;
            margin-top: 11px;
            margin-left: 13px;
            text-align: center;
            font-family: Microsoft Yahei;
            border: 1px solid rgba(187, 187, 187, 1);
        }
</style>
