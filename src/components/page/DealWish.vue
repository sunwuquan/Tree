<template>
    <div class="deal-body">
        <div class="">
            <el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="wish-cum-title">
                <el-breadcrumb-item to="/wishmanage" class="wish-cum-title_body">心愿管理</el-breadcrumb-item>
                <el-breadcrumb-item class="wish-cum-title_body">处理心愿</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="deal-content">
            <div style="height:30px ">
                <router-link to="/wishmanage" tag="div" class="deal-button-back">返回</router-link>
            </div>
            <div class="deal-title">个人信息</div>
            <p class="deal-content-body">
                <span class="deal-content-name">姓名:</span><span class="deal-content-test">{{date.name}}</span>
            </p>
            <p class="deal-content-body">
                <span class="deal-content-name">电话:</span><span class="deal-content-test">{{date.phone}}</span>
            </p>
            <p class="deal-content-body">
                <span class="deal-content-name">微信:</span><span class="deal-content-test">{{date.wechart}}</span>
            </p>
            <div class="deal-title">心愿树信息</div>
            <p class="deal-content-body">
                <span class="deal-content-name">订单号:</span><span class="deal-content-test">{{date.number}}</span>
            </p>
            <p class="deal-content-body">
                <span class="deal-content-name">树类型:</span><span class="deal-content-test">{{date.treetype}}</span>
            </p>
            <p class="deal-content-body">
                <span class="deal-content-name">树名字:</span><span class="deal-content-test">{{date.treename}}</span>
            </p>
            <div class="deal-title">他/她的故事</div>
            <p class="deal-content-body">
                <span class="deal-content-name">{{date.hisstory}}</span>
            </p>
            <div class="deal-title">他/她的心愿</div>
            <p class="deal-content-body">
                <span class="deal-content-name">{{date.hiswish}}</span>
            </p>
            <div class="deal-botton" v-show="!show" @click="handleClick">处理</div>
            <div v-show="show" style="margin: 60px auto 0;text-align: center">

                <div class="deal-two" id="qrcode"></div>
                <div class="deal-botton" @click="handleDown">下载</div>
            </div>

        </div>
    </div>
</template>
<script>
    import QRCode from 'qrcodejs2'
    export default {
        name: 'dealwish',
        data() {
            return {
                show: false,
                isIE: true,
                date: {
                    name: '',
                    phone: '',
                    wechart: '',
                    number: '',
                    treetype: '',
                    treename: '',
                    hisstory: '',
                    hiswish: ''
                }
            }
        },
        created() {
            this.date = this.$route.query.item
            console.dir(this.date)
            this.getDate()
        },
        methods: {
            getDate() {
                console.log("获取数据")
            },
            //处理
            handleClick() {
                this.show = true;
//                var Id=this.date.id
//                this.getEr(Id)
                this.getEr('https://www.baidu.com')
            },
            getEr(url) {
                    let qrcode = new QRCode('qrcode', { // qrcode  html为标签id
                        text: url, // 内容
                        // render: 'canvas' // 设置渲染方式（有两种方式 table和canvas，默认是canvas)
                        colorDark: "#333333", //二维码颜色
                        colorLight: "#ffffff", //二维码背景色
                        correctLevel: QRCode.CorrectLevel.L//容错率，L/M/H
                });
                    console.dir(qrcode)
                return qrcode
            },
            handleDown() {
//                this.downloadIamge();
                var oQrcode = document.querySelector('#qrcode img')
                var url = oQrcode.src
                var a = document.createElement('a')
                var event = new MouseEvent('click')
                // 下载图名字
                a.download = 'chenguihai'
                //url
                a.href = url
                //合成函数，执行下载
                a.dispatchEvent(event)
            },
//  =============================================================================================
            downloadIamge() {
                var name = 'chenguihai.jpg'
                var image = new Image();
                // 解决跨域 Canvas 污染问题
                image.setAttribute('crossOrigin', 'anonymous');
                image.onload = function () {
                    var canvas = document.createElement('canvas');
                    canvas.width = image.width;
                    canvas.height = image.height;
                    var context = canvas.getContext('2d');
                    context.drawImage(image, 0, 0, image.width, image.height);
                    if (this.isIE) {
                        this.saveFileForIE(canvas, name);
                    }
                    {

                        var url = canvas.toDataURL('image/png');

                        // 生成一个a元素
                        var a = document.createElement('a');
                        // 创建一个单击事件
                        var event = new MouseEvent('click');
                        a.download = name || new Date().getTime();
                        // 将生成的URL设置为a.href属性
                        a.href = url;


                        // 触发a的单击事件
                        a.dispatchEvent(event)

                    }

                };
                image.src = document.querySelector('#qrcode img').src
                console.log("====")
            },
//            isIE() { //ie?
//                if (!!window.ActiveXObject || "ActiveXObject" in window)
//                    return true;
//                else
//                    return false;
//            },
            saveFileForIE(canvas, fileName) {
                try {
                    var blob = canvas.msToBlob();
                    navigator.msSaveBlob(blob, fileName);
                } catch (e) {
                    owlzerOBj.UTILE.alertP('Please upgrade your browser');
                }
            }
            //  =============================================================================================


        }
    }
</script>
<style lang="scss">
    .deal-body {
        .wish-cum-title {
            font-size: 18px;
            color: #000;
            left: 250px;
            margin-top: 25px;
            padding-left: 20px;
            overflow: hidden;
            height: 27px;
            text-align: left;
            font-family: SourceHanSansSC-bold;
        }
        .wish-cum-title_body {
            left: 250px;
            top: 128px;
            height: 27px;
            overflow: hidden;
            color: rgba(16, 16, 16, 1);
            font-size: 20px;
            text-align: left;
            font-family: SourceHanSansSC-bold;
            .el-breadcrumb__inner {
                font-weight: 900;
            }
        }
        .deal-content {
            margin-left: 20px;
            margin-top: 50px;
            .deal-button-back {
                display: inline-block;
                width: 80px;
                height: 30px;
                line-height: 30px;
                cursor: pointer;
                float: right;
                margin-right: 30px;
                border-radius: 4px;
                color: rgba(16, 16, 16, 1);
                font-size: 14px;
                text-align: center;
                font-family: Microsoft Yahei;
                border: 1px solid rgba(187, 187, 187, 1);
            }
            .deal-title {
                margin-top: 20px;
                height: 29px;
                color: rgba(6, 155, 101, 1);
                font-size: 20px;
                text-align: left;
                margin-bottom: 20px;
                font-family: SourceHanSansSC-regular;
            }
            .deal-content-body {
                margin-top: 15px;
                margin-left: 10px;
            }
            .deal-content-name {
                display: inline-block;
                height: 27px;
                line-height: 27px;
                margin-right: 10px;
                color: rgba(16, 16, 16, 1);
                font-size: 18px;
                text-align: left;
                font-family: SourceHanSansSC-regular;
            }
            .deal-botton {
                width: 240px;
                height: 47px;
                line-height: 47px;
                border-radius: 4px;
                cursor: pointer;
                background-color: rgba(6, 155, 101, 1);
                color: rgba(255, 255, 255, 1);
                font-size: 18px;
                /*margin-top: 95px;*/
                margin: 95px auto 40px;
                text-align: center;
                font-family: Microsoft Yahei;
                border: 1px solid rgba(187, 187, 187, 1);
            }
            #qrcode{
                display: inline-block;
            }
            .deal-two {
                width: 304px;
                height: 299px;
            }
        }
    }
</style>
