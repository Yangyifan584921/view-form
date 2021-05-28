<template>
  <el-container>
    <el-header>
        <!-- <TopSide/> -->
        top container
    </el-header>
    <el-container>
        <!-- <LeftSide/> -->
        <el-aside width="200px">
            <div class="left-container">
                <div class="item" v-for="(item, index) in leftSide" :key="index" @click="renderComponent(item)">
                    <p>{{item.attrs.label}}{{item.tag}}</p>
                </div>
            </div>
        </el-aside>
        <el-main>
            haha
            <!-- <router-view></router-view> -->
        </el-main>
    </el-container>
  </el-container>
</template>

<script>
// import TopSide from '@/layout/TopSide'
// import LeftSide from '@/layout/LeftSide'
import { leftSide } from '../config/config.js'
// import render from '../render/render.js'
export default {
    components: {
        // TopSide,
        // LeftSide
    },
    data() {
        return {
            leftSide
        }
    },
    methods: {
        renderComponent(item) {
            console.log(item)
        }
    }
}
</script>

<style scoped>
.el-container {
    width: 100%;
    height: 100%;
}
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