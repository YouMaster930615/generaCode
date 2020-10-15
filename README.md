本身是一个 vue-cli 2.0的脚手架， 1、cnpm install   2、npm run serve  执行完就可以看到页面了

主要是为了封装一个生成二维码的插件

插件通过 import generaCode from 'XXXX' 形式引入

数据定义格式比较简单， 以一个数组形式传入， 分为两种类型

1、 图片类型
{
  type: 'img', // 表示为图片类型
  url: 'xxxx', // 当前图片url
  imgX: 0, // 图片横坐标
  imgY: 0, // 图片纵坐标
  imgWidth: 460, // 图片宽度
  imgHeight: 240, // 图片高度
  avator: true/false, // 当前图片是否要切圆形
}

2、文案类型
{
  type: 'text', // 标识文案类型
  content: 'xxxx', // 文案内容
  fontColor: '#ffffff', // 颜色
  fontX: 30, // 文字横坐标
  fontY: 60, // 文字纵坐标
  fontWidth: 160, // 换行的最大长度
  wrap: false, // 是否换行
}

之后就可以按照 [{}, {}, {}, ...] 形式传入


后续优化制定样式
