export default () => {
  //获取元素
  const arrow = document.querySelector('#head .headMain>.arrow')
  const liNodes = document.querySelectorAll('#head .headMain>nav>.list>li')
  const firstLiNode = liNodes[0]
  const upNodes = document.querySelectorAll('#head .headMain nav .list li .down')
  const firstupNode = upNodes[0]
  const head = document.querySelector('#head')
  const content = document.querySelector('#content')
  const cliNodes = document.querySelectorAll('#content .list > li')
  const cList = document.querySelector("#content .list")
  //初始化小尖角的位置和第一个nav的颜色  
  arrow.style.left = firstLiNode.offsetLeft + firstLiNode.offsetWidth / 2 - arrow.offsetWidth / 2 + 'px'
  firstupNode.style.width = '100%'
  //移动小尖角的位置
  for (var i = 0; i < liNodes.length; i++) {
    liNodes[i].index = i
    liNodes[i].addEventListener('click',function (){
      for (let j = 0; j < upNodes.length; j++) {
        upNodes[j].style.width = ""
      }
      upNodes[this.index].style.width = "100%"
      arrow.style.left = this.offsetLeft + this.offsetWidth / 2 - arrow.offsetWidth / 2 + 'px'
    })
  }
  //内容区 因为与头部有交互 放一块
  
  
  function contentBind(){
    content.style.height = document.documentElement.clientHeight - head.offsetHeight + 'px'
    for (let i = 0; i < cliNodes.length; i++) {
      cliNodes[i].style.height = document.documentElement.clientHeight - head.offsetHeight + 'px'
    }
  }
  contentBind();
}