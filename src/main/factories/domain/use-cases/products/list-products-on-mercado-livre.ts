import { listProductsOnMercadoLivreUseCase, type ListProductsOnMercadoLivre } from '@/domain/use-cases/products'
import { makePuppeteerAdapter } from '@/main/factories/infra/gateways'

export const makeListProductsOnMercadoLivre = (): ListProductsOnMercadoLivre => {
  return listProductsOnMercadoLivreUseCase(makePuppeteerAdapter())
}
