export default function Auth(next) {
  // if login
  const t = localStorage.getItem('token')
  if (t) next()
  // else redirect to /login
  else {
    console.log('Not logged in')
    return next({
      name: 'login'
    })
  }
}
