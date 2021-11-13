<!--
 * @Date: 2021-11-12 23:25:40
 * @LastEditors: xiaolan
 * @LastEditTime: 2021-11-13 18:48:42
 * @FilePath: \clock-wall\src\views\Antarctica.vue
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
  name: 'Antarctica',
  components: { myMain, myHeader },
}
</script>

<style lang='scss' scoped>

</style>