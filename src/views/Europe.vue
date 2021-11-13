<!--
 * @Date: 2021-11-12 23:22:54
 * @LastEditors: xiaolan
 * @LastEditTime: 2021-11-13 18:48:18
 * @FilePath: \clock-wall\src\views\Europe.vue
-->
<template>
  <div class="continent">
    <el-container>
      <myHeader />
      <myMain />
    </el-container>
  </div>
</template>

<script>
import myHeader from '@/components/myHeader'
import myMain from '@/components/myMain'
export default {
  name: 'Europe',
  components: { myMain, myHeader },
}
</script>

<style lang='scss' scoped>

</style>