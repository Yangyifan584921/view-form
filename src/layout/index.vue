<template>
  <el-container>
    <el-header>
        <TopSide/>
    </el-header>
    <el-container>
        <el-aside width="200px">
            <LeftSide/>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
  </el-container>
</template>

<script>
import TopSide from '@/layout/TopSide'
import LeftSide from '@/layout/LeftSide'
export default {
    components: {
        TopSide,
        LeftSide
    }
}
</script>

<style scoped>

</style>