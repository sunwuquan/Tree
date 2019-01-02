<template>
    <div class="com-body">
        <div>
            <el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="title">
                <el-breadcrumb-item to="/form" class="title_body">商品管理</el-breadcrumb-item>
                <el-breadcrumb-item class="title_body">爱情树</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="com-body-right">
            <p @click="onSubmit('form')">保存</p>
            <p>取消</p>
        </div>
        <div class="com-content_title">
            <span @click="handleClicLeft" :class="{'active':classShow===1}" class="com-title_left">常规</span>
            <span @click="handleClicCenter" :class="{'active':classShow===2}" class="com-title_center">简介</span>
            <span @click="handleClicRight" :class="{'active':classShow===3}" class="com-title_right">服务</span>
        </div>
        <div class="com-content_body">
            <!--常规-->
            <div v-if="classShow==1">
                <div class="com_title">基本信息</div>
                <div class="com-form-box" style="width: 100%">
                    <el-form ref="form" label-position="left" label-font-size="20px" :model="form" label-width="100px">
                        <div>
                            <div class="com-form-title" style="margin-top: 0">封面:</div>
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
                        <div>
                            <div class="com-form-title">价格:</div>
                            <span class="b_title">能量兑换:</span>
                            <el-input v-model="form.kg" class="b_input"></el-input>
                            <span class="b_title">g</span>
                            <br>
                            <span class="b_title" style="margin-left: 122px">现金支付:</span>
                            <el-input v-model="form.price" class="b_input"></el-input>
                            <span class="b_title">元</span>
                        </div>
                        <div>
                            <div class="com-form-title">广告语:</div>
                            <el-input v-model="form.guanggao" style="width: 80%"></el-input>
                        </div>

                        <div style="padding-bottom: 43px; border-bottom: 1px solid rgba(187,187,187,1)">
                            <div class="com-form-title">图集:</div>
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
                        <div class="com_title" style="margin-top: 64px">属性</div>
                        <div>
                            <div class="com-form-title">品牌名称:</div>
                            <el-input v-model="form.name" style="width: 80%"></el-input>
                        </div>
                        <div>
                            <div class="com-form-title">迷你数种类:</div>
                            <el-input v-model="form.type" style="width: 80%"></el-input>
                        </div>
                        <div>
                            <div class="com-form-title">寓意:</div>
                            <el-input v-model="form.moral" style="width: 80%"></el-input>
                        </div>
                        <div>
                            <div class="com-form-title">高度:</div>
                            <el-input v-model="form.height" style="width: 20%;margin-right: 10px"></el-input>
                            <span class="b_title">毫米</span>
                        </div>
                        <div>
                            <div class="com-form-title">直径:</div>
                            <el-input v-model="form.width" style="width: 20%;margin-right: 10px"></el-input>
                            <span class="b_title">毫米</span>
                        </div>
                        <div>
                            <div class="com-form-title">是否包活:</div>
                            <el-radio-group v-model="form.resource">
                                <el-radio label="是"></el-radio>
                                <el-radio label="否"></el-radio>
                            </el-radio-group>
                        </div>
                        <div>
                            <div class="com-form-title">养护:</div>
                            <el-input style="width: 80%;vertical-align: top;margin-top: 40px" type="textarea" rows="5"
                                      v-model="form.desc"></el-input>
                        </div>
                    </el-form>
                </div>

                <div></div>
            </div>
            <!--简介-->
            <div v-else-if="classShow==2">
                <div ref="form">
                    <div>
                        <quill-editor ref="myTextEditor" v-model="form.content" :options="editorOption"></quill-editor>
                        <!--<el-button class="editor-btn" type="primary" @click="submit">提交</el-button>-->
                    </div>
                </div>
            </div>
            <!--服务-->
            <div v-else>
                <div>
                    <quill-editor ref="myTextEditor" v-model="form.content1" :options="editorOption"></quill-editor>
                    <!--<el-button class="editor-btn" type="primary" @click="submit">提交</el-button>-->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import 'quill/dist/quill.core.css';
    import 'quill/dist/quill.snow.css';
    import 'quill/dist/quill.bubble.css';
    import { quillEditor } from 'vue-quill-editor';
    export default {
        name:'newcommodity',
        components: {
            quillEditor
        },
        data() {
            return {
                content:'',
                fileList2:[],
                editorOption: {
                    placeholder: 'Hello World'
                },
                defaultMsg: '这里是UE测试',
                config: {
                    initialFrameWidth: null,
                    initialFrameHeight: 350
                },
                list: {},
                classShow: 1,
                form: {
                    kg: '',
                    price: '',
                    resource: '是',
                    guanggao: '',
                    desc: '',
                    name: '',
                    type: '',
                    moral: '',
                    height: '',
                    width: '',
                    img:'',
                    imgList:[],
                    content:'',
                    content1:''
                },
                dialogImageUrl: '',
                dialogVisible: false,
                imageUrl: ''
            }
        },
        methods: {
            onEditorChange({ editor, html, text }) {
                this.content = html;
                this.content1 = html;
            },
            handleClicLeft() {
                this.classShow = 1
            },
            handleClicCenter() {
                this.classShow = 2
            },
            handleClicRight() {
                this.classShow = 3
            },
            onSubmit(form) {
                this.form.img=this.imageUrl
                this.form.imgList=this.fileList2
                console.dir(this.form)
            },
            handleRemove(file, fileList) {
                console.dir(file, fileList);
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
//                console.dir(this.fileList2)
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
            }
        },
        created() {
            console.log("=================")
        }
    }
</script>
<style lang="scss">
    .com-body{
        .title {
            font-size: 18px;
            color: #000;
            margin-top: 12px;
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
        .com-body-right {
            margin-top: 14px;
            overflow: hidden;
            margin-bottom: 30px;
        }

        .com-body-right p {
            display: inline-block;
            width: 80px;
            height: 30px;
            line-height: 30px;
            border-radius: 4px;
            color: rgba(16, 16, 16, 1);
            cursor: pointer;
            font-size: 14px;
            text-align: center;
            font-family: Microsoft Yahei;
            float: right;
            margin-right: 30px;
            border: 1px solid rgba(187, 187, 187, 1);
        }
        .com-content_title{
            width: 389px;
            margin: 0 auto;
            text-align: center;
            overflow: hidden;
        }
        .com-content_title span {
            display: inline-block;
            text-align: center;
            margin: 0 auto;
            float: left;
            padding: 0;
            width: 127px;
            border: 1px solid rgba(187, 187, 187, 1);
            font-size: 14px;
            height: 35px;
            cursor: pointer;
            line-height: 35px;
        }
        .com-title_left {
            border-radius: 4px 0 0 4px;
        }
        .com-title_right {
            border-radius: 0 4px 4px 0;
        }
        .active {
            background: #009688 100%;
            color: #fff;
        }
        .com-content_body {
            margin-top: 26px;
            margin-left: 20px;
        }
        .com_title {
            width: 352px;
            height: 29px;
            color: rgba(255, 152, 0, 1);
            font-size: 20px;
            text-align: left;
            margin-bottom: 37px;
            font-family: SourceHanSansSC-regular;
        }
        .com-form-box{
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
            .el-upload-list__item{
                width: 156px;
                height: 156px;
            }
            .el-upload--picture-card{
                width: 156px;
                height: 156px;
            }
        }
        .com-form-title {
            display: inline-block;
            width: 120px;
            height: 29px;
            color: rgba(16, 16, 16, 1);
            font-size: 20px;
            text-align: left;
            font-family: SourceHanSansSC-regular;
            margin-top: 40px;
        }
        .com-body-right {
            margin-top: 14px;
            overflow: hidden;
            margin-bottom: 30px;
        }

        .com-body-right p {
            display: inline-block;
            width: 80px;
            height: 30px;
            line-height: 30px;
            border-radius: 4px;
            color: rgba(16, 16, 16, 1);
            font-size: 14px;
            text-align: center;
            font-family: Microsoft Yahei;
            float: right;
            margin-right: 30px;
            border: 1px solid rgba(187, 187, 187, 1);
        }
        .b_title {
            width: 80px;
            height: 29px;
            color: rgba(16, 16, 16, 1);
            font-size: 20px;
            text-align: left;
            font-family: SourceHanSansSC-regular;
        }

        .b_input {
            width: 144px;
            height: 30px;
            color: rgba(136, 136, 136, 1);
            font-size: 14px;
            text-align: left;
            font-family: Roboto;
            margin-left: 16px;
            margin-right: 16px;
            margin-bottom: 15px;
        }
    }

</style>
