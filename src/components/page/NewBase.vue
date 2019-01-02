<template>
    <div class="newbase-body">
        <div class="nbase-crumbs">
            <el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="nbase-title">
                <el-breadcrumb-item to="/basemanage" class="nbase-title_body">基地管理</el-breadcrumb-item>
                <el-breadcrumb-item class="nbase-title_body">新增基地</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="nbase-content">
            <el-form ref="form" :model="form">
                <div class="nbase-form">
                    <span class="nbase-name">基地名称</span>
                    <input type="text" placeholder="输入基地名称" class="nbase-name-input" v-model="form.name">
                </div>
                <div class="nbase-form">
                    <span class="nbase-name" style="margin-top: 0">基地封面</span>
                    <div style="display: inline-block">
                        <el-upload
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="imageUrl" style="width: 156px;height: 156px" :src="imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </div>
                </div>
                <div class="nbase-form">
                    <span class="nbase-name">基地面积</span>
                    <input type="text" placeholder="输入面积" class="nbase-acreage-input" v-model="form.acreage">
                    <span class="nbase-name">平方米</span>
                </div>
                <div class="nbase-form">
                    <span class="nbase-name">基地位置</span>
                    <div class="nbase-position">
                        <span class="nbase-name" style="display: inline-block;width: 54px">经度:</span>
                        <span class="nbase-name">{{form.positionY}}</span>
                        <span class="nbase-name" style="display: inline-block;width: 54px">纬度:</span>
                        <span class="nbase-name">{{form.positionX}}</span>
                    </div>
                    <div class="nbase-position-edit" @click="handleClickEdit">编辑</div>
                </div>
                <div class="nbase-form">
                    <span class="nbase-name">图集</span>
                    <el-upload
                        style="margin-left: 120px"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        list-type="picture-card"
                        :file-list="fileList2"
                        :on-preview="handlePictureCardPreview"
                        :on-success="handleAvatarSuccesslist"
                        :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </div>
                <div class="nbase-form">
                    <span class="nbase-name" style="margin-bottom: 20px">基地简介</span>
                    <div>
                        <quill-editor ref="myTextEditor" v-model="content" :options="editorOption"></quill-editor>
                        <!--<el-button class="editor-btn" type="primary" @click="submit">提交</el-button>-->
                    </div>
                </div>
                <div>
                    <div class="nbase-form-button" @click="onSubmit('form')">确定</div>
                    <div class="nbase-form-button">取消</div>
                </div>
            </el-form>
        </div>
    </div>
</template>
<script>
    import 'quill/dist/quill.core.css';
    import 'quill/dist/quill.snow.css';
    import 'quill/dist/quill.bubble.css';
    import { quillEditor } from 'vue-quill-editor';
    export default {
        name: 'newbase',
        components: {
            quillEditor
        },
        data(){
            return{
                content:'',
                editorOption: {
                    placeholder: 'Hello World'
                },
                center:{
                    lng:'',
                    lat:''
                },
                form:{
                    name:'',
                    imgUrl:'',
                    acreage:'',
                    lng:'3332.22',
                    lat:'10097',
                    imgUrlList:[],
                    desc:''
                },
                imageUrl:'',
                dialogImageUrl: '',
                fileList2:[],
                dialogVisible: false,
            }
        },
        methods:{
            onEditorChange({ editor, html, text }) {
                this.content = html;
            },
            submit(){
                console.log(this.content);
                this.$message.success('提交成功！');
            },
            handleClickEdit(){
                this.$router.push({ path: '/baseeditpositon'});
            },
            onSubmit(form){
//                console.log(this.content);
                this.form.desc=this.content;
//                console.log(this.form.desc);
                this.form.imgUrl=this.imageUrl
                this.form.imgUrlList=this.fileList2
                this.$message.success('提交成功！');
                console.dir(this.form)
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
                this.fileList2=fileList
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            handleAvatarSuccesslist(res, file,filelist) {
                const list={}
                for(let i=0;i<filelist.length;i++){
                    list.name=filelist[i].name
                    list.uid=filelist[i].uid
                    list.url=filelist[i].url
                    list.status=filelist[i].status
                }
                this.fileList2.push(list)
                console.dir(this.fileList2)
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            getDate(){
                console.log("获取数据");
            }
        },
        created(){
            this.getDate()
            this.center = this.$route.query.center
            if(this.center!==undefined){
                this.form.positionY=this.center.lng;
                this.form.positionX=this.center.lat;
            }
        }
    }
</script>
<style lang="scss">
    .newbase-body{
        .nbase-title{
            font-size: 18px;
            color: #000;
            margin-top: 16px;
            padding-left: 20px;
            height: 27px;
            text-align: left;
            font-family: SourceHanSansSC-bold;
        }
        .nbase-title_body{
            height: 27px;
            color: rgba(16, 16, 16, 1);
            font-size: 18px;
            text-align: left;
            font-family: SourceHanSansSC-bold;
            .el-breadcrumb__inner{
                font-weight: 900;
            }
        }
        .nbase-content{
            margin-left: 20px;
            margin-top: 40px;
            margin-right: 20px;
            .el-upload--text{
                width: 156px;
                height: 156px;
            }
            .avatar-uploader{
                   display: inline-block;
                   /*margin-left: 100px;*/
                   vertical-align: top;
               }
            .el-icon-plus{
                font-size: 50px;
                margin-top: 40px;
            }
            .nbase-form{
                margin-bottom: 40px;
            }
            .nbase-name{
                display: inline-block;
                height: 27px;
                width: 72px;
                margin-right: 25px;
                color: rgba(16, 16, 16, 1);
                font-size: 18px;
                text-align: left;
                font-family: SourceHanSansSC-regular;
            }
            .nbase-name-input{
                width: 678px;
                height: 40px;
                color: rgba(136, 136, 136, 1);
                font-size: 14px;
                text-align: left;
                padding-left: 10px;
                font-family: Microsoft Yahei;
                border: 1px solid rgba(187, 187, 187, 1);
            }
            .nbase-acreage-input{
                width: 242px;
                height: 40px;
                color: rgba(136, 136, 136, 1);
                font-size: 14px;
                padding-left: 10px;
                text-align: left;
                font-family: Microsoft Yahei;
                border: 1px solid rgba(187, 187, 187, 1);
            }
            .nbase-position{
                display: inline-block;
            }
            .nbase-position-edit{
                display: inline-block;
                width: 80px;
                height: 40px;
                line-height: 40px;
                cursor: pointer;
                border-radius: 4px;
                color: rgba(16, 16, 16, 1);
                font-size: 14px;
                text-align: center;
                font-family: Microsoft Yahei;
                border: 1px solid rgba(187, 187, 187, 1);
            }
            .nbase-form-button{
                width: 90px;
                height: 40px;
                line-height: 40px;
                cursor: pointer;
                display: inline-block;
                float: right;
                margin-right: 40px;
                border-radius: 4px;
                background-color: rgba(255, 255, 255, 1);
                color: rgba(0, 0, 0, 1);
                font-size: 16px;
                text-align: center;
                font-family: Microsoft Yahei;
                border: 1px solid rgba(187, 187, 187, 1);
            }
        }

    }
</style>
