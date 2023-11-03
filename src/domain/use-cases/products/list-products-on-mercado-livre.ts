import { type ListProductsMercadoLivre } from '@/domain/contracts/gateways'

type Setup = (webScraping: ListProductsMercadoLivre) => ListProductsOnMercadoLivre
type Input = { nameProduct: string, limit: number }
type Output = Array<{ title: string, price: string, seller: string, urlImages: string[], description: string }>
export type ListProductsOnMercadoLivre = (input: Input) => Promise<Output>

export const listProductsOnMercadoLivreUseCase: Setup = (webScraping) => async ({ limit, nameProduct }) => {
  return await webScraping.listProduct({ limit, nameProduct })
}
