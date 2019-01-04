<template>
    <div id="Dynamic">
        <div class="order">
            <div class="crumbs">
                <el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="title clearfix">
                    <el-breadcrumb-item to="/ordermanage" class="title_body">订单管理</el-breadcrumb-item>
                    <el-breadcrumb-item to="ordermandeteail" class="title_body">订单详情</el-breadcrumb-item>
                    <el-breadcrumb-item class="title_body">上传生长状态</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="Dynamic_top">
                <el-row>
                  <el-button @click="handleClick">上传</el-button>
                  <el-button @click="cancelUpload">取消</el-button>
                </el-row>
            </div>
            <div class="Dynamic_cont">
                <el-form ref="form" :model="contract" label-width="0px">
                    <el-form-item label="内容">
                        <el-input type="textarea" maxlength="500" placeholder="输入内容" v-model="contract.remark"></el-input>
                        <span>{{remnant}}/500</span>
                    </el-form-item>
                    <el-form-item class="Dynamic_cont_img" label="图片">
                        <el-upload
                          action="https://jsonplaceholder.typicode.com/posts/"
                          list-type="picture-card"
                          :on-preview="handlePictureCardPreview"
                          :on-remove="handleRemove"
                          :file-list="fileList"
                          :limit="10"
                          :on-success="handleSuccess"
                          >
                          <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                          <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                    </el-form-item>
                </el-form>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        name: 'ordermanage',
        data(){
            return {
                dialogVisible: false,
                dialogImageUrl:'',
                contract: {
                    remark:'',
                    fileList:[]
                },
                fileList:[
                    {
                        name:'1.jpg',
                        url:'../../../static/img/img.jpg'
                    },
                    {
                        name:'1.jpg',
                        url:'../../../static/img/img.jpg'
                    },
                    {
                        name:'1.jpg',
                        url:'../../../static/img/img.jpg'
                    },
                ]

            }
        },
        computed:{
            remnant(){
                return this.contract.remark.length
            }
        },
        methods:{
            //上传
            handleClick(){
                this.contract.fileList=this.fileList;
                console.dir(this.contract)
//                console.dir(this.fileList)
            },
            // 查看图片时的事件
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
                console.log(file);
                console.dir(123)
            },
            // 删除图片时的事件
            handleRemove(file, fileList) {
                console.log(file, fileList);
                this.fileList=fileList
            },
            handleSuccess(response, file, fileList){
                console.log( fileList);
                this.fileList=fileList
            },
            cancelUpload(){
                this.$router.push({path:'/ordermandeteail'});
            }
        }
    }
</script>
<style lang="scss">
    #Dynamic{
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
        /*.el-breadcrumb__inner{
            color: rgb(16, 16, 16);
            font-weight: 700;
        }*/
        .Dynamic_top{
            margin-bottom: 15px;
            .el-button--small, .el-button--small.is-round{
                padding: 6px 20px;
                border: 1px solid #bbb;
                border-radius: 3px;
            }
            .el-button--small, .el-button--small.is-round:hover{
                color:#000;
                background-color: #fff;
            }
        }
        .Dynamic_cont{
            .el-form-item__label{
                float: none;
                font-family: SourceHanSansSC;
                font-weight: 400;
                font-size: 18px;
                color: rgba(6, 155, 101, 1);
                font-style: normal;
                letter-spacing: 0px;
                line-height: 40px;
                margin-bottom: 15px;

            }
            .el-form-item__content{
                float: none;
                .el-textarea__inner{
                    height: 300px;
                }
            }
            .el-textarea__inner:focus{
                border-color:#bbb;
            }
            .Dynamic_cont_img{
                .el-form-item__content{
                    min-height: 300px;
                    .el-upload-dragger{
                        width: 148px;
                        height: 148px;
                    }
                }
            }

        }


    }

</style>
