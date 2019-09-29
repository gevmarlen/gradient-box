export class Gradient {
  public static add(selector: string) {
    let gradientBoxes = document.querySelectorAll(selector)

    gradientBoxes.forEach(el => {
      let border = document.createElement('div')
      border.classList.add('gradient-border')
      el.classList.add('gradient-box')
      el.appendChild(border)
    })

    document.addEventListener('mousemove', function(mouse) {
      let x2 = mouse.clientX
      let y2 = mouse.clientY

      if (gradientBoxes) {
        gradientBoxes.forEach(box => {
          let x1 = box.clientWidth / 2 + box.getBoundingClientRect().left
          let y1 = box.clientHeight / 2 + box.getBoundingClientRect().top
          let angle = (Math.atan2(y1 - y2, x1 - x2) / Math.PI) * 180 + 90
          angle = angle < 0 ? angle + 360 : angle
          let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
          let close = Math.abs((distance - box.clientHeight / 2) / box.clientHeight)
          let far = Math.abs((distance + box.clientHeight / 2) / box.clientHeight)
          let border = <HTMLElement>box.querySelector('.gradient-border')
          if (border) {
            if (close < 0.8) {
              border.style.background = 'linear-gradient(' + angle + 'deg, rgba(230, 230, 230,' + (0.8 - close) + '), rgba(230, 230, 230,' + (0.8 - far) + '))'
            } else {
              border.style.background = 'linear-gradient(0deg, rgba(230, 230, 230,0), rgba(230, 230, 230,0))'
            }
          }
        })
      }
    })
  }
}
