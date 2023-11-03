import { type ListProductsMercadoLivre } from '@/domain/contracts/gateways'

type Setup = (webScraping: ListProductsMercadoLivre) => ListProductsOnMercadoLivre
type Input = { nameProduct: string, limit: number }
type Output = void
export type ListProductsOnMercadoLivre = (input: Input) => Promise<Output>

export const listProductsOnMercadoLivreUseCase: Setup = (webScraping) => async ({ limit, nameProduct }) => {
  await webScraping.listProduct({ limit, nameProduct })
}
