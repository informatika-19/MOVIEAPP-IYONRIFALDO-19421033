import { boot } from 'quasar/wrappers'
import { Notify } from 'quasar'

const show = (message, jenis) => {
  Notify.create({
    message: message,
    color: jenis,
    timeout: 2000
  })
}

export default boot(({ app }) => {
  app.config.globalProperties.$showNotif = show
})

export { show }

// import { Notify } from 'quasar'

// const show = (message, jenis) => {
//   Notify.create({
//     message: message,
//     color: jenis,
//     timeout: 2000
//   })
// }

// di quasar lama kayak gini export fungsinya

// export default async ({ Vue }) => {
//   Vue.prototype.$showNotif = show
// }
