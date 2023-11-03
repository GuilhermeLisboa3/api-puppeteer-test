export interface ListProductsMercadoLivre {
  listProduct: (input: ListProductsMercadoLivre.Input) => Promise<ListProductsMercadoLivre.Output>
}

export namespace ListProductsMercadoLivre {
  export type Input = { nameProduct: string, limit: number }
  export type Output = Array<{ title: string, price: string, seller: string, urlImages: string[], description: string }>
}
