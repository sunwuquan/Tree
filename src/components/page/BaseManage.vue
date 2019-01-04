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
                <li v-for="item in dateList" :key="item.id" class="base-con-body">
                    <img :src="item.img" alt="" class="base-con-img">
                    <div style="display: inline-block;float: left;">
                        <p class="base-con-title">{{item.title}}</p>
                        <p class="base-con-number">编号:  {{item.id}}</p>
                        <p class="base-con-mianji">面积:  {{item.acreage}}平方米</p>
                    </div>
                    <div class="base-con-right">
                        <div class="base-con-button base-con-but1" @click="handleEditClic(item)">编辑</div>
                        <div class="base-con-button base-con-but2" @click="handleDeleClic(item)">删除</div>
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
                iIndexId: {},
                dialogVisible: false,
                list: [
                    {
                        id: 1001,
                        title: '爱情树',
                        acreage: '999.0',
                        kg: '22647g',
                        lat: '39.9887',
                        lng: '117.333',
                        imglist:  [{
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
                        content: 'aaaaaaaaaaaaaaaaaaa',
                        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546520537790&di=74d37a5c3b4ffe28bcb12f1727f704f6&imgtype=0&src=http%3A%2F%2Fa4.topitme.com%2Fo%2F201008%2F03%2F12807978277336.jpg',
                        text: '已上架'
                    },
                    {
                        id: 1002,
                        title: '友情树',
                        imglist:  [{
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
                        acreage: '339.0',
                        kg: '22647g',
                        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546520537804&di=1b73ab7e35d51dfe4be7a0970fa0b1ac&imgtype=0&src=http%3A%2F%2Fs9.knowsky.com%2Fbizhi%2Fl%2F15001-25000%2F20095290115489699864.jpg',
                        text: '已上架'
                    },
                    {
                        id: 1003,
                        title: '亲情树',
                        acreage: '292.0',
                        kg: '22217g',
                        imglist:  [{
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
                        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546520537790&di=7fd8ee614402fcbccec55431e2899ab4&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ccea565eb5126ac7255d2e3d8e00.jpg%401280w_1l_2o_100sh.jpg',
                        text: '已下架'
                    },
                    {
                        id: 1004,
                        title: '学业树',
                        acreage: '19.0',
                        kg: '22647g',
                        img: 'https://img.alicdn.com/imgextra/i1/1113401174/TB2ZOLQpSYTBKNjSZKbXXXJ8pXa_!!1113401174.jpg_430x430q90.jpg',
                        text: '已上架'
                    },
                    {
                        id: 1005,
                        title: '事业树',
                        imglist:  [{
                            name: 'food.jpeg',
                            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg'
                        }, {
                            name: 'food2.jpeg',
                            url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546520537793&di=03ea183081bdfc7f76258ad025715c46&imgtype=0&src=http%3A%2F%2Fpicture.ik123.com%2Fuploads%2Fallimg%2F160611%2F12-1606111G441.jpg'
                        }, {
                            name: "3232",
                            url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546520537799&di=d89b889939b614c42d6b6a6eca3ff487&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1304%2F28%2Fc6%2F20354115_1367140427312.jpg"
                        }, {
                            name: "3232",
                            url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546520537804&di=1b73ab7e35d51dfe4be7a0970fa0b1ac&imgtype=0&src=http%3A%2F%2Fs9.knowsky.com%2Fbizhi%2Fl%2F15001-25000%2F20095290115489699864.jpg"
                        }],
                        acreage: '9219.0',
                        kg: '22647g',
                        img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=812372253,2616246537&fm=26&gp=0.jpg',
                        text: '已下架'
                    }
                ],
                dateList:[]
            }
        },
        methods: {
            //搜索
            handleSearchClick() {
                console.log(this.searchInput);
                const list=this.list;
                const input=this.searchInput;
                const dataList=[]
                for(let i=0;i<list.length;i++){
                    if(input===list[i].title || parseInt(input)===list[i].id){
                        dataList.push(list[i])
                    }
                }
                this.dateList=dataList;

            },
            //编辑
            handleEditClic(item) {
                console.log(item)
                this.$router.push({path: '/editbase', query: {item: item}});
            },
            //删除
            handleDeleClic(item) {
                this.iIndexId = item;
                this.dialogVisible = true
            },
            //确认删除
            ClickSave() {
                console.log("确认删除");
//                this.list.splice(this.iIndexId,1);
                this.dialogVisible = false
            },
            getDate() {
                console.log("获取数据")
                this.dateList=this.list
            }
        },
        created() {
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
            .el-breadcrumb__inner {
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
