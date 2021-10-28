import { Quasar, Notify } from 'quasar'
import { UserModule } from '~/types/weekwork'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

export const install: UserModule = ({
    app
}) => {
    app.use(Quasar, {
        // components: {
        //   QBtn
        // },
      
        plugins: {
          Notify
        }
      })
}
