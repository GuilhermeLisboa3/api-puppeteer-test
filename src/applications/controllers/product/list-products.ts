import { Controller } from '@/applications/controllers'
import { type HttpResponse, ok } from '@/applications/helpers'
import { type ListProductsOnMercadoLivre } from '@/domain/use-cases/products'

type HttpRequest = { nameProduct: string, limit: number }

export class ListProductController extends Controller {
  constructor (private readonly listProductsOnMercadoLivre: ListProductsOnMercadoLivre) { super() }

  async perform ({ limit, nameProduct }: HttpRequest): Promise<HttpResponse> {
    const products = await this.listProductsOnMercadoLivre({ limit, nameProduct })
    return ok(products)
  }
}
