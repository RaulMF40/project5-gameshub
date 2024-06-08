import {
  createContainer,
  createContainerWithInnerHTML
} from '../Templates/templates'
import './footer.css'

const footerTemplate = () => {
  const app = document.querySelector('#app')

  const footer = createContainer('footer', 'rtc-footer')

  const copyright = createContainerWithInnerHTML(
    'rtc-footer-copyright',
    `<p class="rtc-footer-copyright-p">RAÚL MOYA - FULL STACK DEVELOPER STUDENT - &copy;2024 Rock{theCode}</p>`
  )

  footer.appendChild(copyright)
  app.appendChild(footer)
}

export default footerTemplate
