<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#009d6a"
                 text-color="#fff" active-text-color="#fff" font-size="20px" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title" style="font-size: 20px">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs" class="el-menu-item">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index" class="el-menu-item">
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from '../common/bus';

    export default {
        data() {
            return {
                collapse: false,
                items: [
                    {
//                        icon: 'el-icon-lx-home',
                        index: 'dashboard',
                        title: '首页'
                    },
                    {
//                        icon: 'el-icon-lx-cascades',
                        index: 'table',
                        title: '用户'
                    },
                    {
//                        icon: 'el-icon-lx-copy',
                        index: 'tabs',
                        title: '社区'
                    },
                    {
                        index: '3',
                        title: '商品',
                        subs: [
                            {
                                index: 'form',
                                title: '商品管理'
                            },
                            {
                                index: 'newcommodity',
                                title: '新增商品',
                            }

                        ]
                    },
                    {
//                        icon: 'el-icon-lx-emoji',
                        index: 'icon',
                        title: '订单',
                        subs: [
                            {
//                                icon: 'el-icon-lx-favor',
                                index: 'ordermanage',
                                title: '订单管理'
                            },
                            {
//                                icon: 'el-icon-rank',
                                index: 'evaluate',
                                title: '评价管理'
                            },
                            {
                                index: 'wishmanage',
                                title: '心愿管理'
                            }
                        ]
                    },
                    {
//                        icon: 'el-icon-lx-favor',
                        index: 'charts',
                        title: '种植基地',
                        subs: [
                            {
//                                icon: 'el-icon-lx-favor',
                                index: 'basemanage',
                                title: '基地管理'
                            },
                            {
//                                icon: 'el-icon-rank',
                                index: 'newbase',
                                title: '新增基地'
                            }
                        ]
                    },
                    {
//                        icon: 'el-icon-rank',
                        index: 'drag',
                        title: '参观',
                        subs: [
                            {
                                index: 'visitapplacation',
                                title: '参观申请'
                            }
                        ]
                    },
                    {
                        index: 'personal',
                        title: '个人中心',
                        subs: [
                            {
                                index: 'personal',
                                title:'修改密码'
                            }
                        ]
                    },
                    {
//                        icon: 'el-icon-lx-warn',
                        index: '6',
                        title: '错误处理',
                        subs: [
                            {
                                index: 'permission',
                                title: '权限测试'
                            },
                            {
                                index: '404',
                                title: '404页面'
                            }
                        ]
                    }
                ]
            }
        },
        computed: {
            onRoutes() {
                return this.$route.path.replace('/', '');
            }
        },
        created() {
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
        }
    }
</script>

<style lang="scss">
    .sidebar {
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        background: #009d6a;
        bottom: 0;
        overflow-y: scroll;
        .el-submenu__title i {
            color: #fff !important;
        }
        .sidebar::-webkit-scrollbar {
            width: 0;
        }
        .el-menu-item.is-active{
            background: #00be90 !important;
        }
        .el-submenu__title{
            font-size: 20px !important;
        }
        .item-i{
            font-size: 20px;
            color: #fff;
        }
        .sidebar-el-menu:not(.el-menu--collapse) {
            width: 220px;
            text-align: center;
        }
        .el-menu-item{
            font-size: 20px;
        }
        .sidebar > ul {
            height: 100%;
        }

    }

</style>
