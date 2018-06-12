import { SearchProductsModule } from './search-products.module';

describe('SearchProductsModule', () => {
  let searchProductsModule: SearchProductsModule;

  beforeEach(() => {
    searchProductsModule = new SearchProductsModule();
  });

  it('should create an instance', () => {
    expect(searchProductsModule).toBeTruthy();
  });
});
