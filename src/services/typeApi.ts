export interface ApiResponseProduct {
  id: number | string;
  title: string;
  categoriesId: number;
  status: string;
  price: number;
  description: string;
  image: string;
  brandsId: number;
  rate: number;
}

export interface ApiResponseProductCategory extends ApiResponseProduct {
  categories: {
    id: number;
    name: string;
  };
}

export interface ApiResponseProductBrand extends ApiResponseProduct {
  brands: {
    id: number;
    name: string;
  };
}

export interface ProductData {
  data: ApiResponseProduct[];
  pagination: {
    _limit: number;
    _page: number;
    _totalRows: number;
  };
}

export interface ProductDataCategory extends ProductData {
  data: ApiResponseProductCategory[];
}
