import { PuppeteerAdapter } from '@/infra/gateways/'
export const makePuppeteerAdapter = (): PuppeteerAdapter => {
  return new PuppeteerAdapter()
}
