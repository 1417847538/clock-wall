<!--
 * @Date: 2021-11-12 23:24:26
 * @LastEditors: xiaolan
 * @LastEditTime: 2021-11-13 18:48:27
 * @FilePath: \clock-wall\src\views\Africa.vue
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
  name: 'Africa',
  components: { myMain, myHeader },
}
</script>

<style lang='scss' scoped>

</style>