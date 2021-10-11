import { Quasar } from 'quasar'
import iconSet from 'quasar/icon-set/fontawesome-v5'
import material from 'quasar/icon-set/material-icons'
import { UserModule } from '~/types'

export const install: UserModule = function({ app }) {
  app.use(Quasar, {
    iconSet,
    material,
  })
}
