import { Quasar } from 'quasar'
import { UserModule } from '~/types'

export const install: UserModule = function({ app }) {
  app.use(Quasar)
}
