<template>
    <div class="project-page">
        <Vheader />
        <Vleftmeau />
        <Vcontent />
    </div>
</template>

<script>
    import Vheader from './common/header'
    import Vleftmeau from './common/leftmeau'
    import Vcontent from './common/content'

    export default {
        name: 'index',
        components: {
            Vheader,
            Vleftmeau,
            Vcontent
        }
    }
</script>