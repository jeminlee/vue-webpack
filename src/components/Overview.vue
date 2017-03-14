<template>
<div id="overview">
    <div class="row">
        <h2>{{ $t('overview.header') }}</h2>
        <div class="small-12 columns overview-block">
            <h5>Tile</h5>
            <img src="https://placehold.it/250x250" alt="tile">
        </div>
    </div>
    <div class="row">
        <div class="small-12 columns overview-block">
            <h5>Tile</h5>
            <img src="https://placehold.it/250x250" alt="tile">
        </div>
    </div>
</div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    #overview {
        .overview-block {
            background-color: #FFF;
            margin: 15px 0;
        }
    }
</style>
