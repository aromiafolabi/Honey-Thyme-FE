export function setToken(token) {
  console.log(token)
  return window.localStorage.setItem('token', token)
}

export function getToken() {
  return window.localStorage.getItem('token')
}

export function removeToken() {
  return window.localStorage.removeItem('token')
}

function getPayload() {
  const token = getToken()
  if (!token) {
    return false
  }
  const parts = token.split('.')
  if (parts.length < 3) {
    removeToken()
    return false
  }
  return JSON.parse(atob(parts[1]))
}

export function isAuthenticated() {
  const payload = getPayload()
  if (!payload) {
    return false
  }
  const now = Math.round(Date.now() / 1000)
  return now < payload.exp
}

export function isOwner(userId) {
  const payload = getPayload()
  if (!payload) {
    return false
  }
  if (!isAuthenticated()) {
    return false
  }
  return userId === payload.sub
}

export function setId(profileId) {
  return window.localStorage.setItem('profileId', profileId)
}

export function getId() {
  return window.localStorage.getItem('profileId')
}