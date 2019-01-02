<template>
    <div class="body-separe">
        <div class="">
            <el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="title">
                <el-breadcrumb-item to="/form" class="title_body">商品管理</el-breadcrumb-item>
                <el-breadcrumb-item class="title_body">分类管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div>
            <div class="sepa-title" @click="handleAdd" style="cursor: pointer">添加分类</div>
            <div class="sepa-content">
                <div class="body-content-title">所有分类</div>
                <div class="" style="margin-top: 20px">
                    <ul>
                        <li class="separe-con" :style=" {backgroundColor:item.backgroundColor}" v-for="item in dataList"
                            :key="item.id" @click="handleSeleClick(item.desc)"> {{item.title}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div style="margin-left: 20px">
            <el-dialog title="添加分类" :visible.sync="editVisible" width="40%">
            <el-form ref="form" :model="form" label-width="50px" style="margin-top: 50px;margin-bottom: 95px">
            <el-form-item label="名字">
            <el-input v-model="form.title" style="height: 40px; line-height: 40px" clearable  placeholder="输入分类名称"></el-input>
            </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
            <el-button @click="editVisible = false">取 消</el-button>
            <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
            </el-dialog>

        </div>
    </div>
</template>
<script>
    export default {
        name: 'manageeparate',
        data() {
            return {
                dataList: [
                    {
                        id: 1001, title: '爱情树',
                        backgroundColor:'rgb(255, 64, 129)',
                        desc: [{
                            id: 1001,
                            title: '爱情树',
                            price: '999.0',
                            kg: '22647g',
                            img: 'https://img.alicdn.com/imgextra/i1/1113401174/TB2ZOLQpSYTBKNjSZKbXXXJ8pXa_!!1113401174.jpg_430x430q90.jpg',
                            text: '已上架'
                        },
                            {
                                id: 1002,
                                title: '爱情树',
                                price: '339.0',
                                kg: '22647g',
                                img: 'https://img.alicdn.com/imgextra/i1/1113401174/TB2ZOLQpSYTBKNjSZKbXXXJ8pXa_!!1113401174.jpg_430x430q90.jpg',
                                text: '已上架'
                            },
                            {
                                id: 1003,
                                title: '爱情树',
                                price: '292.0',
                                kg: '22217g',
                                img: 'https://img.alicdn.com/imgextra/i1/1113401174/TB2ZOLQpSYTBKNjSZKbXXXJ8pXa_!!1113401174.jpg_430x430q90.jpg',
                                text: '已下架'
                            }]
                    },
                    {
                        backgroundColor:'rgb(63, 81, 181)',
                        id: 1002, title: '亲情树',
                        desc: [{
                        id: 1001,
                        title: '亲情树',

                        price: '999.0',
                        kg: '22647g',
                        img: 'https://img.alicdn.com/imgextra/i1/1113401174/TB2ZOLQpSYTBKNjSZKbXXXJ8pXa_!!1113401174.jpg_430x430q90.jpg',
                        text: '已上架'
                    },
                        {
                            id: 1002,
                            title: '亲情树',
                            price: '339.0',
                            kg: '22647g',
                            img: 'https://img.alicdn.com/imgextra/i1/1113401174/TB2ZOLQpSYTBKNjSZKbXXXJ8pXa_!!1113401174.jpg_430x430q90.jpg',
                            text: '已上架'
                        },
                        {
                            id: 1003,
                            title: '亲情树',
                            price: '292.0',
                            kg: '22217g',
                            img: 'https://img.alicdn.com/imgextra/i1/1113401174/TB2ZOLQpSYTBKNjSZKbXXXJ8pXa_!!1113401174.jpg_430x430q90.jpg',
                            text: '已下架'
                        }]
                    },
                    {
                        backgroundColor:'rgb(0, 150, 136)',
                        id: 1003, title: '友情树', desc: [{
                        id: 1001,
                        title: '友情树',
                        price: '999.0',
                        backgroundColor:'rgb(0, 150, 136)',
                        kg: '22647g',
                        img: 'https://img.alicdn.com/imgextra/i1/1113401174/TB2ZOLQpSYTBKNjSZKbXXXJ8pXa_!!1113401174.jpg_430x430q90.jpg',
                        text: '已上架'
                    },
                        {
                            id: 1002,
                            title: '友情树',
                            price: '339.0',
                            kg: '22647g',
                            img: 'https://img.alicdn.com/imgextra/i1/1113401174/TB2ZOLQpSYTBKNjSZKbXXXJ8pXa_!!1113401174.jpg_430x430q90.jpg',
                            text: '已上架'
                        },
                        {
                            id: 1003,
                            title: '友情树',
                            price: '292.0',
                            kg: '22217g',
                            img: 'https://img.alicdn.com/imgextra/i1/1113401174/TB2ZOLQpSYTBKNjSZKbXXXJ8pXa_!!1113401174.jpg_430x430q90.jpg',
                            text: '已下架'
                        }]
                    },
                    {
                        backgroundColor:'rgb(255, 152, 0)',
                        id: 1004, title: '偶像树', desc: [{
                        id: 1001,
                        title: '偶像树',
                        price: '999.0',
                        kg: '22647g',
                        img: 'https://img.alicdn.com/imgextra/i1/1113401174/TB2ZOLQpSYTBKNjSZKbXXXJ8pXa_!!1113401174.jpg_430x430q90.jpg',
                        text: '已上架'
                    },
                        {
                            id: 1002,
                            title: '偶像树',
                            price: '339.0',
                            kg: '22647g',
                            img: 'https://img.alicdn.com/imgextra/i1/1113401174/TB2ZOLQpSYTBKNjSZKbXXXJ8pXa_!!1113401174.jpg_430x430q90.jpg',
                            text: '已上架'
                        },
                        {
                            id: 1003,
                            title: '偶像树',
                            price: '292.0',
                            kg: '22217g',
                            img: 'https://img.alicdn.com/imgextra/i1/1113401174/TB2ZOLQpSYTBKNjSZKbXXXJ8pXa_!!1113401174.jpg_430x430q90.jpg',
                            text: '已下架'
                        }]
                    },
                    {id: 1005, title: '学业树', desc: '学业树'},
                    {id: 1006, title: '祈福树', desc: '祈福树'},
                    {id: 1007, title: '工艺树', desc: '工艺树'}
                ],
                bgColor: '',
                editVisible: false,
                form:{
                    id:1,
                    title:'',
                    dese:''
                }
            }
        },
        methods: {
            handleAdd() {
                console.log("添加")
                this.editVisible = true
            },
            saveEdit() {
                this.form.id++
                this.dataList.push(this.form)
                this.editVisible=false
            },
            handleSeleClick(index){
                console.log(index)
                this.$router.push({ path: '/managedetail', query: { item:index }});
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
    .body-separe{
        .title {
            font-size: 18px;
            color: #000;
            margin-top: 12px;
            height: 27px;
            margin-left: 20px;
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
        .sepa-title {
            width: 80px;
            height: 30px;
            line-height: 30px;
            margin-top: 30px;
            margin-left: 23px;
            border-radius: 4px;
            color: rgba(16, 16, 16, 1);
            font-size: 14px;
            text-align: center;
            font-family: Microsoft Yahei;
            border: 1px solid rgba(187, 187, 187, 1);
        }

        .sepa-content {
            margin-top: 29px;
            margin-left: 22px;

        }

        .body-content-title {
            width: 80px;
            height: 29px;
            line-height: 29px;
            color: rgba(16, 16, 16, 1);
            font-size: 20px;
            text-align: left;
            font-family: SourceHanSansSC-regular;
        }

        .separe-con {
            width: 132px;
            height: 129px;
            line-height: 129px;
            background-color: rgba(63, 81, 181, 1);
            color: rgba(255, 255, 255, 1);
            font-size: 18px;
            float: left;
            cursor: pointer;
            text-align: center;
            font-family: Roboto;
            margin-right: 48px;
            margin-bottom: 26px;
            border: 1px solid rgba(187, 187, 187, 1);
        }
        .el-input--small .el-input__inner{
            width: 330px !important;
        }
    }

</style>
