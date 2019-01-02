<template>
    <div>
        <div class="login-footer">
            <p>版权所有 ©树知道生态文化有限公司 粤ICP备10083177号 关于奥哲</p>
        </div>
    </div>
</template>
<script>
    import bus from '../common/bus';

    export default {
        name: 'Footer'
    }
</script>
<style scoped>
    .login-footer {
        width: 100%;
        margin: 0 auto;
        text-align: center;
        position: absolute;
        background: #fff;
        height: 78px;
        line-height: 78px;
        bottom: 0;
    }
</style>
