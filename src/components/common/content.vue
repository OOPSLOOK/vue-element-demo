<template>
    <div class="project-content">
        <router-view></router-view>
    </div>
</template>

<script>
    import home from '../singe/page/home/home.vue'
    import test from '../singe/page/test/test.vue'
    export default {
        name: 'content',
        components: {
            home,
            test,
        }
    }
</script>

<style lang="stylus">
html,body,#app
    height calc(100% - 40px)
.project-content
    margin-top 50px
    margin-left 160px
    background-color #666
</style>