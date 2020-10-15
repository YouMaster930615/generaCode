const generaCode = (params = {}) => {
  var canvas = document.createElement('canvas')
  var bodyBox = document.querySelector('body')
  canvas.width = 580
  canvas.height = 400
  bodyBox.appendChild(canvas)
  var startIndexImg = 0
  if (!canvas.getContext) return
  var ctx = canvas.getContext('2d')
  var storeImg = params.filter(item => {
    return item.type === 'img'
  }) // 绘图集合
  var storeText = params.filter(item => {
    return item.type === 'text'
  }) // 文字集合

  // 计算折行位置
  const findBreakPoint = (ctx, text, textWidth) => {
    // 二分算法
    let min = 0
    let max = text.length - 1
    while (min <= max) {
      var middle = Math.floor((min + max) / 2)
      var middleLength = ctx.measureText(text.substr(0, middle)).width
      var middleReduceLength = ctx.measureText(text.substr(0, middle - 1)).width
      if (textWidth >= middleReduceLength && textWidth < middleLength) {
        return middle
      }
      if (middleReduceLength < textWidth) {
        min = middle + 1
      } else {
        max = middle - 1
      }
    }
    return -1
  }
  const handleText = (ctx, item) => {
    // 绘制文案
    var breakPoint = 0
    var storeEachText = []
    const { content, fontColor, fontX, fontY, fontWidth, fontSize } = item
    let text = content
    while ((breakPoint = findBreakPoint(ctx, text, fontWidth)) !== -1) {
      storeEachText.push(text.substr(0, breakPoint))
      text = text.substr(breakPoint)
    }
    storeEachText.push(text)

    storeEachText.forEach((items, index) => {
      ctx.fillStyle = fontColor || '#2e92de'
      ctx.font = fontSize
      ctx.fillText(items, fontX, fontY + index * 30)
    })
  }

  const cutCircle = (ctx, item) => {
    const { url, imgX, imgY, imgWidth } = item
    const r = imgWidth / 2
    var img = new Image()
    img.crossOrigin = 'Anonymous'
    img.src = url
    img.onload = () => {
      ctx.save() // 切割圆形 比较重要的一步
      ctx.arc(imgX + r, imgY + r, r, 0, Math.PI * 2)
      ctx.clip()
      ctx.drawImage(img, imgX, imgY, imgWidth, imgWidth)
      ctx.restore()
    }
  }

  const handleDrawImg = (ctx, item) => {
    // 递归进行图片绘制
    var img = new Image()
    const { url, imgX, imgY, imgWidth, imgHeight, avator = false } = item
    img.crossOrigin = 'Anonymous'
    img.src = url
    img.onload = () => {
      ctx.beginPath()
      if (!avator) {
        ctx.drawImage(img, imgX, imgY, imgWidth, imgHeight)
      } else {
        cutCircle(ctx, item)
      }
      ctx.restore()
      startIndexImg++
      if (startIndexImg >= storeImg.length) {
        // 图片绘制完成， 绘制文字
        storeText.forEach(item => {
          handleText(ctx, item)
        })
        return
      }
      handleDrawImg(ctx, storeImg[startIndexImg])
    }
  }
  handleDrawImg(ctx, storeImg[startIndexImg])
}

export default generaCode
