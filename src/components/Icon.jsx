import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/Icon.css'

const Icon = ({ icon, title, href }) => {
  return (
    <a href={href}>
      <FontAwesomeIcon icon={icon} />
      <span>{title}</span>
    </a>
  )
}

export default Icon;