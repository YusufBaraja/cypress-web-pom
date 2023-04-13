import { Search } from '../../page/search.page'
import searchData from '../../fixtures/search.json'

describe('My First Test', () => {
  it('Search page', () => {
    const search = new Search();
    search.visitSearchPage();
    search.fillSearch(searchData.search.value)
  })
})


