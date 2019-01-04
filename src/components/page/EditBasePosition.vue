<template>
    <div class="bep-body">
        <div class="nbase-crumbs">
            <el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="nbase-title">
                <el-breadcrumb-item to="/basemanage" class="nbase-title_body">基地管理</el-breadcrumb-item>
                <el-breadcrumb-item to="/editbase" class="nbase-title_body">编辑基地</el-breadcrumb-item>
                <el-breadcrumb-item class="nbase-title_body">编辑位置</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="bep-content">
            <div class="bep-top">
                <div class="bep-button" @click="handleLogAndLat">确定</div>
                <router-link class="bep-button" tag="div" to="/newbase">取消</router-link>
            </div>
            <div class="bep-con">
                <span class="bep-con-title">经度:</span>
                <input v-model="center.lng" class="bep-con-input" type="text">
                <span class="bep-con-title">纬度:</span>
                <input v-model="center.lat" class="bep-con-input" type="text">
                <div class="bep-con-button" @click="getClickIndex">到这里</div>
            </div>
            <div class="map_d">
                <baidu-map class="map" :center="center" :zoom="zoom" @click="getClickInfo" @ready="handler">
                    //路线
                    <bm-driving
                        :start="start"
                        :end="ent"
                        :auto-viewport="true"
                        policy="BMAP_DRIVING_POLICY_LEAST_DISTANCE"
                        :panel="false"
                        location=""
                    >
                    </bm-driving>
                    //缩放
                    <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
                    //定位
                    <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" @locationSuccess="locationSuccess" :autoLocation="true"></bm-geolocation>

                    <bm-marker :position="center" :dragging="true" @click="infoWindowOpen">
                        <bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen">
                            经度:{{center.lng}}<br>纬度:{{center.lat}}
                        </bm-info-window>
                    </bm-marker>
                </baidu-map>
            </div>
        </div>
    </div>
</template>
<script>
    import BaiduMap from 'vue-baidu-map/components/Map/Map.vue'

    export default {
        name: 'EditBasePosition',
        data() {
            return {
                type:'',
                show: false,
                ent:'',
                id:{},
                start:{
                    lat: 39.91488908,
                    lng: 116.40387397
                },
                center: {
                    lng: 116.424,
                    lat: 39.915
                },  //经纬度
                zoom: 3　 //地图展示级别
            }
        },
        mounted() {
            // this.ready()
        },
        components: {
            BaiduMap
        },
        methods: {
            infoWindowClose() {
                this.show = false
            },
            infoWindowOpen() {
                this.show = true
            },
            handleLogAndLat() {
                var item = this.center
                this.$router.push({ path: '/editbase', query: { center:item,id:this.id }});
            },
            locationSuccess(point, AddressComponent, marker){
                console.dir(point)
                this.start=point.point
                console.dir(AddressComponent)
                console.dir(marker)
            },
            getDate() {
                // console.log("获取数据")

            },
            getClickIndex() {
                console.dir(this.center)
                this.ent=this.center
            },
            getClickInfo(e) {
                this.center.lng = e.point.lng;
                this.center.lat = e.point.lat
            },
            handler({BMap, map}) {
//                this.center.lng = 116.424;
//                this.center.lat = 39.915;
                this.zoom = 15;
            }
        },
        created() {
            this.getDate()
            var item={};
            item = this.$route.query.item;
           this.id=this.$route.query.id;
            if(item!==undefined){
                this.center = item;
            }
        }
    }
</script>
<style lang="scss">
    .bep-body {
        .nbase-title {
            font-size: 18px;
            color: #000;
            margin-top: 16px;
            padding-left: 20px;
            height: 27px;
            text-align: left;
            font-family: SourceHanSansSC-bold;
        }
        .nbase-title_body {
            height: 27px;
            color: rgba(16, 16, 16, 1);
            font-size: 18px;
            text-align: left;
            font-family: SourceHanSansSC-bold;
            .el-breadcrumb__inner {
                font-weight: 900;
            }
        }
        .bep-content {
            margin-left: 20px;
            margin-top: 40px;
            margin-right: 20px;
        }
        .bep-top {
            width: 100%;
            height: 45px;
            overflow: hidden;
        }
        .bep-button {
            width: 80px;
            height: 40px;
            line-height: 40px;
            float: left;
            margin-right: 50px;
            cursor: pointer;
            border-radius: 4px;
            color: rgba(16, 16, 16, 1);
            font-size: 14px;
            text-align: center;
            font-family: Microsoft Yahei;
            border: 1px solid rgba(187, 187, 187, 1);
        }
        .bep-con {
            margin-top: 60px;
            display: block;
            height: 45px;
            margin-bottom: 27px;
            overflow: hidden;
            .bep-con-title {
                display: inline-block;
                width: 54px;
                height: 27px;
                color: rgba(16, 16, 16, 1);
                font-size: 18px;
                text-align: left;
                font-family: SourceHanSansSC-regular;
            }
            .bep-con-input {
                width: 241px;
                margin-right: 64px;
                height: 40px;
                color: rgba(136, 136, 136, 1);
                font-size: 14px;
                padding-left: 10px;
                text-align: left;
                font-family: Roboto;
                border: 1px solid rgba(187, 187, 187, 1);
            }
            .bep-con-button {
                width: 83px;
                height: 40px;
                line-height: 40px;
                border-radius: 4px;
                color: rgba(16, 16, 16, 1);
                font-size: 14px;
                text-align: center;
                font-family: Microsoft Yahei;
                border: 1px solid rgba(187, 187, 187, 1);
                cursor: pointer;
                display: inline-block;
            }
        }
        .map_d {
            width: 100%;
            height: 500px;
        }

    }

    .map {
        width: 100%;
        height: 700px;
    }
</style>
