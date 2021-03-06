// @flow
import { conf } from 'misago/constants'

const getCSRFToken = (): ?string => {
  if (!document.cookie) return null
  if (document.cookie.indexOf(conf.csrf_cookie_name) === -1) return null

  // eslint-disable-next-line no-useless-escape
  const cookieRegex = new RegExp(conf.csrf_cookie_name + '\=([^;]*)')

  const cookie = document.cookie.match(cookieRegex)
  if (cookie && cookie[0]) return cookie[0].split('=')[1]
  return null
}

export default getCSRFToken