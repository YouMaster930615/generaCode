<template>
  <div>
    <div class="Big" v-for="(item, index) in homeList" :key="index">
      <span>{{item.price}}</span>
    </div>
    <h4>{{userName}}</h4>
    <button @click="addAmount">北凉 抽刀</button>
    <button @click="testName">二维码下载</button>
    <child :sendName="userName" :count="amount"/>
    <h5>{{amountNumber}}</h5>
    <div class="snake">杯酒贺新凉</div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapState } from 'vuex'
import { generaCode, preserImg } from '../utils/generaCode'
import child from '@/components/child'

export default {
  name: 'Home',
  data () {
    return {
      canvasData: [
        {
          type: 'img', // 类型
          url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=957696541,4231477104&fm=26&gp=0.jpg', // 链接
          imgX: 0, // 横坐标
          imgY: 0, // 纵坐标
          imgWidth: 460, // 宽度
          imgHeight: 240 // 长度
        },
        {
          type: 'img',
          url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1444060056,2288502859&fm=26&gp=0.jpg',
          imgX: 20,
          imgY: 20,
          imgWidth: 60,
          imgHeight: 60,
          avator: true // 是否要切圆
        },
        {
          type: 'img',
          url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1408202635,3502932051&fm=26&gp=0.jpg',
          imgX: 100,
          imgY: 20,
          imgWidth: 60,
          imgHeight: 60
        },
        {
          type: 'img',
          url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1848078723,2981142920&fm=26&gp=0.jpg',
          imgX: 180,
          imgY: 20,
          imgWidth: 60,
          imgHeight: 60
        },
        {
          type: 'img',
          url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4117580969,801859474&fm=26&gp=0.jpg',
          imgX: 260,
          imgY: 20,
          imgWidth: 60,
          imgHeight: 60
        },
        {
          type: 'img',
          url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2074501610,2117880551&fm=26&gp=0.jpg',
          imgX: 340,
          imgY: 20,
          imgWidth: 60,
          imgHeight: 60
        },
        {
          type: 'text',
          content: '守口如瓶余地龙, 春秋床甲裴南苇, 天不生我李淳罡，剑道万古如长夜', // 文字内容
          fontColor: '#fff', // 文字颜色
          fontX: 30, // 横坐标
          fontY: 120, // 纵坐标
          fontWidth: 120, // 文案宽度
          fontSize: '20px SimSun', // 字体大小
          wrap: false // 是否换行
        }
      ]
    }
  },
  created () {
    generaCode(this.canvasData)
  },
  components: {
    child
  },
  computed: {
    ...mapGetters([
      'homeList',
      'amount'
    ]),
    ...mapState([
      'userName',
      'amountNumber'
    ])
  },
  methods: {
    addAmount () {
      this.$store.dispatch('changeAmount', this.amount)
    },
    testName () {
      this.$store.dispatch('changeName')
      preserImg()
    }
  }
}
</script>

<style lang="less">
  .snake{
    width: 70px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin: 40px auto;
    background: #e9545e;
    font-size: 13px;
    color: #ffffff;
    font-weight: bold;
    border-radius: 4px;
  }
</style>
