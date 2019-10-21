export default () => {
  //获取元素
  const arrow = document.querySelector('#head .headMain>.arrow')
  const liNodes = document.querySelectorAll('#head .headMain>nav>.list>li')
  const firstLiNode = liNodes[0]
  //初始化小尖角的位置
  arrow.style.left = firstLiNode.offsetLeft + firstLiNode.offsetWidth / 2 - arrow.offsetWidth / 2 + 'px'
  //移动小尖角的位置
  for (let i = 0; i < liNodes.length; i++) {
    liNodes[i].addEventListener('click',function (){
      arrow.style.left = liNodes[i].offsetLeft + liNodes[i].offsetWidth / 2 - arrow.offsetWidth / 2 + 'px'
    })
  }
}