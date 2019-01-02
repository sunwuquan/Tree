<template>
    <div>
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
        <div @click="handleClick" style="width: 100px;height: 50px;text-align:center;border: 1px solid #00f;">提交</div>
    </div>
</template>
<script>
    export default {
        name: 'Demo',
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false,
                imageUrl: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg',
                fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg'},{name:"3232",url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4188084997,2513755353&fm=26&gp=0.jpg"},{name:"3232",url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4188084997,2513755353&fm=26&gp=0.jpg"}]
            }
        },
        methods: {
            handleClick(){
                console.dir(this.imageUrl)
                console.dir(this.fileList2)
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
                this.fileList2=fileList;
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
        }
    }
</script>
<style></style>


<!--图片下载-->
<!--<template>-->
    <!--<div>-->
        <!--<img-->
            <!--:src="pic"-->
            <!--class="img1"/>-->
        <!--<input type="button" value="download_image" @click="downloadIamge"/>-->
    <!--</div>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--name: 'Demo',-->
        <!--data() {-->
            <!--return {-->
                <!--isIE:true,-->
                <!--pic:'http://7xiba5.com2.z0.glb.clouddn.com/07202017-1601-0000-0030-000000000098/20180117225412/file/image/M_20180117225408_0000_T.jpg'-->
            <!--}-->
        <!--},-->
        <!--methods: {-->
            <!--downloadIamge() {-->
                <!--var name='chenguihai.jpg'-->
                <!--var image = new Image();-->
                <!--// 解决跨域 Canvas 污染问题-->
                <!--image.setAttribute('crossOrigin', 'anonymous');-->
                <!--image.onload = function () {-->
                    <!--var canvas = document.createElement('canvas');-->
                    <!--canvas.width = image.width;-->
                    <!--canvas.height = image.height;-->
                    <!--var context = canvas.getContext('2d');-->
                    <!--context.drawImage(image, 0, 0, image.width, image.height);-->
                    <!--if (this.isIE) {-->
                        <!--this.saveFileForIE(canvas, name);-->
                    <!--}-->
                    <!--{-->
                        <!--var url = canvas.toDataURL('image/png');-->
                        <!--// 生成一个a元素-->
                        <!--var a = document.createElement('a');-->
                        <!--// 创建一个单击事件-->
                        <!--var event = new MouseEvent('click');-->
                        <!--a.download = name || new Date().getTime();-->
                        <!--// 将生成的URL设置为a.href属性-->
                        <!--a.href = url;-->
                        <!--// 触发a的单击事件-->
                        <!--a.dispatchEvent(event)-->
                    <!--}-->
                <!--};-->
                <!--image.src = this.pic-->
                <!--console.log("====")-->
            <!--},-->
<!--//            isIE() { //ie?-->
<!--//                if (!!window.ActiveXObject || "ActiveXObject" in window)-->
<!--//                    return true;-->
<!--//                else-->
<!--//                    return false;-->
<!--//            },-->
            <!--saveFileForIE(canvas, fileName) {-->
                <!--try {-->
                    <!--var blob = canvas.msToBlob();-->
                    <!--navigator.msSaveBlob(blob, fileName);-->
                <!--} catch (e) {-->
                    <!--owlzerOBj.UTILE.alertP('Please upgrade your browser');-->
                <!--}-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->
<!--<style></style>-->
