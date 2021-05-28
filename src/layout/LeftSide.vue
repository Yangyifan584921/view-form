<template>
<div class="left-container">
    <div class="item" v-for="(item, index) in leftSide" :key="index" @click="renderComponent(item)">
        <p>{{item.attrs.label}}{{item.tag}}</p>
    </div>
</div>
</template>

<script>
import { leftSide } from '../config/config.js'
export default {
    data() {
        return {
            leftSide
        }
    },
    methods: {
        renderComponent(item) {
            render(item)
        }
    }
}
</script>

<style scoped>
.left-container {
    width: 100%;
    height: 100%;
}
.item {
    margin-bottom: 5px;
}
p {
    border: 1px solid red;
}
</style>