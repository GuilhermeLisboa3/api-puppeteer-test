import { makeListProductsOnMercadoLivre } from '@/main/factories/domain/use-cases/products'
import { ListProductController } from '@/applications/controllers/product'
import { type Controller } from '@/applications/controllers'

export const makeListProductController = (): Controller => {
  return new ListProductController(makeListProductsOnMercadoLivre())
}
