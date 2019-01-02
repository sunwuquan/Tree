<template>
    <div class="visi-body">
        <div class="">
            <el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="visi-b-title">
                <el-breadcrumb-item class="visi-b-title_body">参观申请</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="visi-content">
            <div class="base-content-search">
                <i class="iconfont base-icon">&#xe633;</i>
                <input class="base-input" v-model="searchInput" type="text" placeholder="请输入访问日期/名字/手机号">
                <div class="base-button" @click="handleSearchClick">搜索</div>
            </div>
            <div class="visi-con">
                <div class="visi-content_title">
                    <span @click="handleClicLeft" :class="{'active':classShow===1}" class="visi-title_left">未开始</span>
                    <span @click="handleClicCenter" :class="{'active':classShow===2}"
                          class="com-title_center">已拒绝</span>
                    <span @click="handleClicRight" :class="{'active':classShow===3}" class="visi-title_right">已过期</span>
                </div>
                <div v-if="classShow===1">
                    <ul>
                        <li v-for="item in list" :key="item.id" class="visi-li">
                            <div class="visi-li-name">姓名:  {{item.name}}</div>
                            <div class="visi-li-type">{{item.type}}</div>
                            <div class="visi-li-phone">电话:  {{item.phone}}</div>
                            <div class="visi-li-carid">身份证号:  {{item.carid}}</div>
                            <div class="visi-li-date">参观时间:  {{item.date}}</div>
                            <div class="visi-li-button" @click="handleClick(item)">详情</div>
                        </li>
                    </ul>
                </div>
                <div v-else-if="classShow===2">
                    <ul>
                        <li v-for="item in dataList" :key="item.id" class="visi-li">
                            <div class="visi-li-name">姓名:  {{item.name}}</div>
                            <div class="visi-li-type">{{item.type}}</div>
                            <div class="visi-li-phone">电话:  {{item.phone}}</div>
                            <div class="visi-li-carid">身份证号:  {{item.carid}}</div>
                            <div class="visi-li-date">参观时间:  {{item.date}}</div>
                            <div class="visi-li-button" @click="handleClick(item)">详情</div>
                        </li>
                    </ul>
                </div>
                <div v-else>
                    <ul>
                        <li v-for="item in dataItem" :key="item.id" class="visi-li">
                            <div class="visi-li-name">姓名:  {{item.name}}</div>
                            <div class="visi-li-type">{{item.type}}</div>
                            <div class="visi-li-phone">电话:  {{item.phone}}</div>
                            <div class="visi-li-carid">身份证号:  {{item.carid}}</div>
                            <div class="visi-li-date">参观时间:  {{item.date}}</div>
                            <div class="visi-li-button" @click="handleClick(item)">详情</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'visitapplacation',
        data() {
            return {
                searchInput: '',
                classShow: 1,
                list: [
                    {
                        id: 1001,
                        name: '赵军亮',
                        phone: '15110189653',
                        carid: '331227199623411123',
                        date: '2019-12-3',
                        type: '过期'
                    },
                    {
                        id: 1002,
                        name: '赵亮',
                        phone: '143210189653',
                        carid: '331227199623411123',
                        date: '2018-12-5',
                        type: '未过期'
                    },
                    {
                        id: 1003,
                        name: '赵军',
                        phone: '1544449653',
                        carid: '331227199623411123',
                        date: '2019-5-5',
                        type: '已拒绝'
                    },
                    {
                        id: 1004,
                        name: '高亮',
                        phone: '16432189653',
                        carid: '331227199623411123',
                        date: '2019-6-4',
                        type: '过期'
                    },
                    {
                        id: 1005,
                        name: '高军',
                        phone: '15133339653',
                        carid: '331227199623411123',
                        date: '2019-3-7',
                        type: '已拒绝'
                    },
                    {
                        id: 1006,
                        name: '白云山',
                        phone: '13333189653',
                        carid: '331227199623411123',
                        date: '2018-12-2',
                        type: '未过期'
                    },
                    {
                        id: 1007,
                        name: '赵挺',
                        phone: '15133339653',
                        carid: '331227199623411123',
                        date: '2019-9-3',
                        type: '过期'
                    },
                    {
                        id: 1008,
                        name: '王俊',
                        phone: '155555689653',
                        carid: '331227199623411123',
                        date: '2019-3-3',
                        type: '过期'
                    },
                    {
                        id: 1009,
                        name: '天琪',
                        phone: '1577779653',
                        carid: '331227199623411123',
                        date: '2018-3-14',
                        type: '未过期'
                    },
                    {
                        id: 1010,
                        name: '宋桥',
                        phone: '15177645653',
                        carid: '331227199623411123',
                        date: '2019-7-9',
                        type: '已拒绝'
                    },
                    {
                        id: 1011,
                        name: '顿挫',
                        phone: '15110189653',
                        carid: '331227199623411123',
                        date: '2014-3-17',
                        type: '过期'
                    }
                ],
                dataList: [],
                dataItem: []
            }
        },
        methods: {
            handleSearchClick() {
                console.log(this.searchInput)
            },
            handleClicLeft() {
                this.classShow = 1
            },
            handleClicCenter() {
                this.classShow = 2
                const data = [];
                for (var i = 0; i < this.list.length; i++) {
                    const item = this.list[i];
                    if (item.type === '已拒绝') {
                        data.push(this.list[i])
                    }
                }
                this.dataList = data;
                console.dir(this.dataList);
            },
            handleClicRight() {
                this.classShow = 3
                const data = [];
                for (var i = 0; i < this.list.length; i++) {
                    const item = this.list[i];
                    if (item.type === '过期') {
                        data.push(this.list[i])
                    }
                }
                this.dataItem = data;
                console.dir(this.dataItem);
            },
            handleClick(item) {
//                console.dir(item)
//                const id=item.id;
//                const type=item.type;
//                console.log("====")
//                this.$router.push({path:'/visidetails',query: { item:id,type:type}})
                this.$router.push({path:'/visidetails',query: { item:item}})
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
    .visi-body {
        .visi-b-title {
            font-size: 18px;
            color: #000;
            margin-top: 16px;
            padding-left: 20px;
            height: 27px;
            text-align: left;
            font-family: SourceHanSansSC-bold;
        }
        .visi-b-title_body {
            height: 27px;
            color: rgba(16, 16, 16, 1);
            font-size: 18px;
            font-weight: 900;
            text-align: left;
            font-family: SourceHanSansSC-bold;
            .el-breadcrumb__inner{
                font-weight: 900;
            }
        }
        .visi-content {
            margin-left: 20px;
            margin-top: 20px;
            margin-right: 20px;
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
                    font-size: 25px;
                    color: rgba(0, 150, 136, 1);
                    height: 45px;
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
            .visi-con {
                margin-top: 30px;
                .active {
                    background: #009688 100%;
                    color: #fff;
                }
                .visi-content_title {
                    width: 389px;
                    margin: 0 auto 30px;
                    text-align: center;
                    overflow: hidden;
                }
                .visi-content_title span {
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
                .visi-title_left {
                    border-radius: 4px 0 0 4px;
                }
                .visi-title_right {
                    border-radius: 0 4px 4px 0;
                }
                .visi-li {
                    width: 590px;
                    height: 171px;
                    line-height: 20px;
                    color: rgba(16, 16, 16, 1);
                    font-size: 14px;
                    float: left;
                    position: relative;
                    margin-right: 30px;
                    padding-left: 23px;
                    margin-bottom: 25px;
                    font-family: Roboto;
                    border: 1px solid rgba(187, 187, 187, 1);
                    .visi-li-name {
                        display: inline-block;
                        height: 29px;
                        color: rgba(16, 16, 16, 1);
                        font-size: 20px;
                        margin-top: 13px;
                        text-align: left;
                        font-family: SourceHanSansSC-regular;
                    }
                    .visi-li-type {
                        display: inline-block;
                        width: 61px;
                        height: 30px;
                        line-height: 30px;
                        margin-left: 24px;
                        border-radius: 15px;
                        background-color: rgba(255, 152, 0, 1);
                        color: rgba(255, 255, 255, 1);
                        font-size: 14px;
                        text-align: center;
                        font-family: Roboto;
                    }
                    .visi-li-phone {
                        height: 29px;
                        color: rgba(16, 16, 16, 1);
                        font-size: 20px;
                        text-align: left;
                        margin-top: 11px;
                        font-family: SourceHanSansSC-regular;
                    }
                    .visi-li-carid {
                        height: 29px;
                        margin-top: 11px;
                        color: rgba(16, 16, 16, 1);
                        font-size: 20px;
                    }
                    .visi-li-date {
                        height: 29px;
                        margin-top: 11px;
                        color: rgba(229, 28, 35, 1);
                        font-size: 20px;
                        text-align: left;
                        font-family: SourceHanSansSC-regular;
                    }
                    .visi-li-button {
                        width: 80px;
                        height: 30px;
                        line-height: 30px;
                        display: inline-block;
                        cursor: pointer;
                        position: absolute;
                        right: 20px;
                        top: 13px;
                        border-radius: 4px;
                        color: rgba(16, 16, 16, 1);
                        font-size: 14px;
                        text-align: center;
                        font-family: Microsoft Yahei;
                        border: 1px solid rgba(187, 187, 187, 1);
                    }
                }
            }
        }
    }
</style>
