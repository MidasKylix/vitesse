import { Quasar, Notify } from 'quasar'
import { UserModule } from '../types'
import '@quasar/extras/material-icons/material-icons.css'

export const install: UserModule = ({ app }) => {
  app.use(Quasar, {
    plugins: {
      Notify,
    },
  })
}
