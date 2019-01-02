<template>
    <div class="body">
        <div class="crumbs">
            <el-breadcrumb separator="/" class="title">
                <el-breadcrumb-item class="title_body">社区</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="">
           社区
        </div>
    </div>
</template>

<script>
    export default {
        name: 'tabs',
        data() {
            return {
                message: 'first',
                showHeader: false,
                unread: [{
                    date: '2018-04-19 20:00:00',
                    title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
                },{
                    date: '2018-04-19 21:00:00',
                    title: '今晚12点整发大红包，先到先得',
                }],
                read: [{
                    date: '2018-04-19 20:00:00',
                    title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
                }],
                recycle: [{
                    date: '2018-04-19 20:00:00',
                    title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
                }]
            }
        },
        methods: {
            handleRead(index) {
                const item = this.unread.splice(index, 1);
                console.log(item);
                this.read = item.concat(this.read);
            },
            handleDel(index) {
                const item = this.read.splice(index, 1);
                this.recycle = item.concat(this.recycle);
            },
            handleRestore(index) {
                const item = this.recycle.splice(index, 1);
                this.read = item.concat(this.read);
            }
        },
        computed: {
            unreadNum(){
                return this.unread.length;
            }
        }
    }

</script>

<style>
    .body{
        background: #fff;
    }
.message-title{
    cursor: pointer;
}
.handle-row{
    margin-top: 30px;
}
.title{
    font-size: 18px;
    color: #000;
    left: 250px;
    /*top: 128px;*/
    margin-top: 12px;
    height: 27px;
    text-align: left;
    font-family: SourceHanSansSC-bold;
}
    .title_body{
        padding-top: 12px;
        padding-left: 20px;
        left: 250px;
        top: 128px;
        width: 72px;
        height: 27px;
        color: rgba(16, 16, 16, 1);
        font-size: 18px;
        text-align: left;
        font-family: SourceHanSansSC-bold;
        .el-breadcrumb__inner{
            font-weight: 900;
        }
    }
</style>

