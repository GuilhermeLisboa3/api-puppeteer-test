import { type ListProductsMercadoLivre } from '@/domain/contracts/gateways'

import puppeteer from 'puppeteer-extra'
import puppeteerStealth from 'puppeteer-extra-plugin-stealth'

puppeteer.use(puppeteerStealth())

export class PuppeteerAdapter implements ListProductsMercadoLivre {
  async listProduct ({ limit, nameProduct }: ListProductsMercadoLivre.Input): Promise<ListProductsMercadoLivre.Output> {
    const listGames = []
    const browser = await puppeteer.launch({
      executablePath: '/usr/bin/chromium-browser'
    })
    const page = await browser.newPage()

    await page.goto('https://www.mercadolivre.com.br/')

    await page.type('#cb1-edit', nameProduct)

    await Promise.all([
      page.click('.nav-search-btn'),
      page.waitForNavigation()
    ])
    const links = await page.$$eval('.ui-search-result__image a', el => el.map(link => link.href))
    for (const link of links) {
      if (listGames.length === limit) break
      await page.goto(link)
      await page.waitForSelector('.ui-pdp-title')
      const title = await page.$eval('.ui-pdp-title', element => element.textContent)
      const price = await page.$eval('meta[itemprop="price"]', element => element.content)
      const description = await page.$eval('p.ui-pdp-description__content', element => element.textContent)

      const seller = await page.evaluate(() => {
        const seller = document.querySelector('.andes-tooltip__trigger a span')
        if (!seller) return null
        return seller.textContent
      })
      const urlImages = await page.$$eval('.ui-pdp-gallery__figure img', element => element.map(el => el.src))

      listGames.push({ title: title ?? '', price: price ?? '', seller: seller ?? '', urlImages, description: description ?? '' })
    }
    await page.close()
    return listGames
  }
}
