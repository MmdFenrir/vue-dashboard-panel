export default function IsLogin(next) {
  // if login
  const t = localStorage.getItem('token')
  if (t) {
    console.log('logged in')
    return next({
      name: 'dashboard'
    })
  }
  // else redirect to /login
  else {
    next()
  }
}
