<template>
    <div class="base-body">
        <div class="crumbs">
            <el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="base-crumbas-title">
                <el-breadcrumb-item class="title_body">基地管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="base-content">
            <div class="base-content-search">
                <i class="iconfont base-icon">&#xe633;</i>
                <input class="base-input" v-model="searchInput" type="text" placeholder="请输入基地编号/基地名称">
                <div class="base-button" @click="handleSearchClick">搜索</div>
            </div>
            <ul>
                <li v-for="item in list" :key="item.id" class="base-con-body">
                    <img :src="item.img" alt="" class="base-con-img">
                    <div style="display: inline-block;float: left;">
                        <p class="base-con-title">{{item.title}}</p>
                        <p class="base-con-number">编号:  {{item.id}}</p>
                        <p class="base-con-mianji">面积:  {{item.acreage}}平方米</p>
                    </div>
                    <div class="base-con-right">
                        <div class="base-con-button base-con-but1" @click="handleEditClic(item)">编辑</div>
                        <div class="base-con-button base-con-but2" @click="handleDeleClic(item.id)">删除</div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="base-dele">
            <el-dialog
                title=""
                :visible.sync="dialogVisible">
                <span>确定删除尼山胜境种植基地吗？此操作无法撤销</span>
                <span slot="footer" class="dialog-footer">
                     <el-button @click="dialogVisible = false">取 消</el-button>
                     <el-button type="primary" @click="ClickSave">确 定</el-button>
                </span>
            </el-dialog>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'basenmanage',
        data() {
            return {
                searchInput: '',
                iIndexId: '',
                dialogVisible: false,
                list: [
                    {
                        id: 1001,
                        title: '爱情树',
                        acreage: '999.0',
                        kg: '22647g',
                        lat:'39.9887',
                        lng:'117.333',
                        imglist: [],
                        content:'aaaaaaaaaaaaaaaaaaa',
                        img: 'https://img.alicdn.com/imgextra/i1/1113401174/TB2ZOLQpSYTBKNjSZKbXXXJ8pXa_!!1113401174.jpg_430x430q90.jpg',
                        text: '已上架'
                    },
                    {
                        id: 1002,
                        title: '爱情树', imglist: [],
                        acreage: '339.0',
                        kg: '22647g',
                        img: 'https://img.alicdn.com/imgextra/i1/1113401174/TB2ZOLQpSYTBKNjSZKbXXXJ8pXa_!!1113401174.jpg_430x430q90.jpg',
                        text: '已上架'
                    },
                    {
                        id: 1003,
                        title: '爱情树',
                        acreage: '292.0',
                        kg: '22217g', imglist: [],
                        img: 'https://img.alicdn.com/imgextra/i1/1113401174/TB2ZOLQpSYTBKNjSZKbXXXJ8pXa_!!1113401174.jpg_430x430q90.jpg',
                        text: '已下架'
                    },
                    {
                        id: 1004,
                        title: '爱情树',
                        acreage: '19.0',
                        kg: '22647g',
                        img: 'https://img.alicdn.com/imgextra/i1/1113401174/TB2ZOLQpSYTBKNjSZKbXXXJ8pXa_!!1113401174.jpg_430x430q90.jpg',
                        text: '已上架'
                    },
                    {
                        id: 1005,
                        title: '爱情树', imglist: [],
                        acreage: '9219.0',
                        kg: '22647g',
                        img: 'https://img.alicdn.com/imgextra/i1/1113401174/TB2ZOLQpSYTBKNjSZKbXXXJ8pXa_!!1113401174.jpg_430x430q90.jpg',
                        text: '已下架'
                    }
                ],
            }
        },
        methods: {
            handleSearchClick() {
                console.log(this.searchInput)
            },
            handleEditClic(item) {
                console.log(item)
                this.$router.push({path: '/editbase', query: {item: item}});
            },
            handleDeleClic(item) {
                this.iIndexId = item;
                this.dialogVisible = true
            },
            ClickSave() {
                console.log("确认删除");
                this.list.splice(this.iIndexId);
                this.dialogVisible = false
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
    .base-body {
        .base-crumbas-title {
            font-size: 18px;
            color: #000;
            margin-top: 16px;
            padding-left: 20px;
            height: 27px;
            text-align: left;
            font-family: SourceHanSansSC-bold;
        }
        .title_body {
            height: 27px;
            color: rgba(16, 16, 16, 1);
            font-size: 18px;
            text-align: left;
            font-family: SourceHanSansSC-bold;
            .el-breadcrumb__inner{
                font-weight: 900;
            }
        }
        .base-content {
            margin-left: 20px;
            margin-top: 20px;
            margin-right: 20px;
        }
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
                height: 45px;
                font-size: 25px;
                color: rgba(0, 150, 136, 1);
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
        .base-con-body {
            width: 100%;
            height: 156px;
            line-height: 20px;
            position: relative;
            margin-top: 18px;
            border: 1px solid rgba(187, 187, 187, 1);
            .base-con-img {
                width: 146px;
                height: 131px;
                margin-left: 11px;
                float: left;
                margin-top: 10px;
                margin-right: 15px;
                display: inline-block;
            }
            .base-con-title {
                height: 29px;
                color: rgba(16, 16, 16, 1);
                font-size: 20px;
                margin-top: 20px;
                text-align: left;
                font-family: SourceHanSansSC-regular;
            }
            .base-con-number {
                height: 29px;
                margin-top: 11px;
                color: rgba(16, 16, 16, 1);
                font-size: 20px;
                text-align: left;
                font-family: SourceHanSansSC-regular;
            }
            .base-con-mianji {
                height: 29px;
                color: rgba(16, 16, 16, 1);
                font-size: 20px;
                text-align: left;
                margin-top: 10px;
                font-family: SourceHanSansSC-regular;
            }
            .base-con-right {
                display: inline-block;
                float: right;
            }
            .base-con-button {
                width: 80px;
                height: 30px;
                line-height: 30px;
                cursor: pointer;
                margin-top: 20px;
                margin-right: 24px;
                border-radius: 4px;
                color: rgba(16, 16, 16, 1);
                font-size: 14px;
                text-align: center;
                font-family: Microsoft Yahei;
                border: 1px solid rgba(187, 187, 187, 1);
            }
        }
        .base-dele {
            .el-dialog {
                width: 450px;
                height: 321px;
                line-height: 20px;
                border-radius: 10px;
                text-align: center;
                border: 1px solid rgba(187, 187, 187, 1);
                .el-dialog__body {
                    width: 352px;
                    height: 58px;
                    text-align: left;
                    margin: 50px auto;
                    display: block;
                    color: rgba(255, 152, 0, 1);
                    font-size: 20px;
                    font-family: SourceHanSansSC-regular;
                }
                .el-button {
                    width: 80px;
                    height: 30px;
                    border-radius: 4px;
                    color: rgba(16, 16, 16, 1);
                    font-size: 14px;
                    text-align: center;
                    padding: 0;
                    font-family: Microsoft Yahei;
                    border: 1px solid rgba(187, 187, 187, 1);
                    span {
                        display: inline-block;
                        padding: 0;
                    }
                }

            }
        }
    }
</style>
