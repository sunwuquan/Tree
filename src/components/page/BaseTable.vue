<template>
    <div class="table-body">
        <div class="crumbs">
            <el-breadcrumb separator="/" separator-class="el-icon-arrow-right">
                <el-breadcrumb-item class="table-body-title">用户</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="table-body-content">
            <input type="text" v-model="inputValue">
            <div>{{message}}</div>
            <div>{{content}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'basetable',
        data() {
            return {
                inputValue:'',
                content:0
            }
        },
        created() {
            this.getData();
        },
        watch:{
            inputValue(newValue,oldValue){
               this.content=newValue
            }
        },
        computed: {
            message() {
             return 'inputValue: '+this.inputValue +";   length:"+this.inputValue.length
            }
        },
        methods: {

            // 获取 easy-mock 的模拟数据
            getData() {
            },
        }
    }

</script>

<style lang="scss">
   .table-body{
       .table-body-title{
           margin-left: 20px;
           font-size: 18px;
           margin-top: 18px;
           font-weight: 900;
           color: rgba(16,16,16,1);
       }
       .table-body-content{
           margin-left: 20px;
       }
   }
</style>
