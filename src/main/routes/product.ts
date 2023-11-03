import { expressRouterAdapter as adapt } from '@/main/adapters'
import { makeListProductController } from '@/main/factories/applications/controllers/products'

import { type Router } from 'express'

export default (router: Router): void => {
  router.get('/products', adapt(makeListProductController()))
}
