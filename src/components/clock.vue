<!--
 * @Date: 2021-11-12 22:47:59
 * @LastEditors: xiaolan
 * @LastEditTime: 2021-11-14 00:45:43
 * @FilePath: \clock-wall\src\components\clock.vue
-->
<template>
  <div class="clock">
    <div ref="myChart"
         id="myChart">
    </div>
    <div class="timeDate">
      <p>{{thour}}</p>
      <span>: </span>
      <p>{{tminute}}</p>
      <span>: </span>
      <p>{{tsecond}}</p>
    </div>
    <span class="country">{{item.name}}</span>
  </div>
</template>

<script>
export default {
  name: 'clock',
  props: ['item'],
  data() {
    return {
      options: {
        series: [
          {
            name: 'hour',
            type: 'gauge',
            startAngle: 90,
            endAngle: -270,
            min: 0,
            max: 12,
            splitNumber: 12,
            clockwise: true,
            axisLine: {
              lineStyle: {
                width: 4,
                color: [[1, 'rgba(23, 83, 234,0.7)']],
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 15,
              },
            },
            axisLabel: {
              fontSize: 24,
              distance: 10,
              formatter: function (value) {
                if (value === 0) {
                  return ''
                }
                return value + ''
              },
            },
            pointer: {
              icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
              width: 7,
              length: '75',
              offsetCenter: [0, '20%'],
              itemStyle: {
                color: '#ba40f7',
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                shadowBlur: 8,
                shadowOffsetX: 2,
                shadowOffsetY: 4,
              },
            },
            detail: {
              show: false,
            },
            title: {
              offsetCenter: [0, '30%'],
            },
            data: [
              {
                value: 0,
              },
            ],
          },
          {
            name: 'minute',
            type: 'gauge',
            startAngle: 90,
            endAngle: -270,
            min: 0,
            max: 60,
            clockwise: true,
            axisLine: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            pointer: {
              icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
              width: 6,
              length: '70%',
              offsetCenter: [0, '10%'],
              itemStyle: {
                color: '#ba40f7',
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                shadowBlur: 8,
                shadowOffsetX: 2,
                shadowOffsetY: 4,
              },
            },
            anchor: {
              show: true,
              size: 20,
              showAbove: false,
              itemStyle: {
                borderWidth: 15,
                borderColor: '#ba40f7',
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                shadowBlur: 8,
                shadowOffsetX: 2,
                shadowOffsetY: 4,
              },
            },
            detail: {
              show: false,
            },
            title: {
              offsetCenter: ['0%', '-40%'],
            },
            data: [
              {
                value: 0,
              },
            ],
          },
          {
            name: 'second',
            type: 'gauge',
            startAngle: 90,
            endAngle: -270,
            min: 0,
            max: 60,
            animationEasingUpdate: 'bounceOut',
            clockwise: true,
            axisLine: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            pointer: {
              icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
              width: 4,
              length: '80%',
              offsetCenter: [0, '10%'],
              itemStyle: {
                color: '#ba40f7',
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                shadowBlur: 8,
                shadowOffsetX: 2,
                shadowOffsetY: 4,
              },
            },
            anchor: {
              show: true,
              size: 15,
              showAbove: true,
              itemStyle: {
                color: '#ba40f7',
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                shadowBlur: 8,
                shadowOffsetX: 2,
                shadowOffsetY: 4,
              },
            },
            detail: {
              show: false,
            },
            title: {
              offsetCenter: ['0%', '-40%'],
            },
            data: [
              {
                value: 0,
              },
            ],
          },
        ],
      },
      timer1: null,
      timer2: null,
      myChart: null,
      thour: '00',
      tminute: '00',
      tsecond: '00',
    }
  },
  mounted() {
    this.clockInit()
    this.timeChange()
  },

  methods: {
    clockInit() {
      this.myChart = this.$echarts.init(this.$refs.myChart)
      this.myChart.setOption(this.options)
      clearTimeout(this.timer)
      this.timer1 = setInterval(() => {
        let date = this.getTime(this.item.time)
        var second = date.getSeconds()
        var minute = date.getMinutes() + second / 60
        var hour = (date.getHours() % 12) + minute / 60
        this.options.animationDurationUpdate = 300
        this.myChart.setOption({
          series: [
            {
              name: 'hour',
              animation: hour !== 0,
              data: [{ value: hour }],
            },
            {
              name: 'minute',
              animation: minute !== 0,
              data: [{ value: minute }],
            },
            {
              animation: second !== 0,
              name: 'second',
              data: [{ value: second }],
            },
          ],
        })
      }, 1000)
    },
    getTime(minutes) {
      let date = new Date()
      date = minutes * 60 * 1000 + date.getTime()
      return new Date(date)
    },
    timeChange() {
      this.timer2 = setInterval(() => {
        let date = this.getTime(this.item.time)
        let second = date.getSeconds()
        this.tsecond = second < 10 ? '0' + second : second

        let minute = date.getMinutes()
        let hour = date.getHours()

        if (minute < 10) {
          this.tminute = '0' + minute
        } else {
          this.tminute = minute
        }

        if (hour < 10) {
          this.thour = '0' + hour
        } else {
          this.thour = hour
        }
      }, 1000)
    },
  },
  // 切换页面时清除此页面定时器
  beforeDestroy() {
    clearTimeout(this.timer1)
    clearTimeout(this.timer2)
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.clock {
  text-align: center;
}
#myChart {
  position: relative;
  width: 1.770833rem;
  height: 1.770833rem;
}
.timeDate {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0.208333rem;
  p {
    display: inline-block;
    width: 0.1875rem;
    height: 0.1875rem;
    background: #00a5ff;
    box-shadow: 0px 0.067708rem 0.125rem 0px rgb(3 136 209 / 20%);
    border-radius: 0.026042rem;
    font-size: 0.125rem;
    font-weight: bold;
    color: #fff;
    text-align: center;
    line-height: 0.1875rem;
  }
  span {
    font-size: 0.125rem;
    font-weight: bold;
    color: #3589ff;
    margin: 0 0.026042rem;
    width: 0.041667rem;
  }
}
.country {
  font-size: 0.125rem;
}
</style>
