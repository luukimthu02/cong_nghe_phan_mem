import HomePages from "../pages/Homepages/HomePages";
import { ProductDetailComponent } from "../components/ProductDetailComponent/ProductDetailComponent";
import { aProductDetailComponent } from "../components/ProductDetailComponent/1ProductDetailComponent";
import { bProductDetailComponent } from "../components/ProductDetailComponent/2ProductDetailComponent";
import { cProductDetailComponent } from "../components/ProductDetailComponent/3ProductDetailComponent ";
import { dProductDetailComponent } from "../components/ProductDetailComponent/4ProductDetailComponent ";
import { eProductDetailComponent } from "../components/ProductDetailComponent/5ProductDetailComponent ";
import CartDrinkComponent from "../components/CartDrinkComponent/CartDrinkComponent";
import CartFruitComponent from "../components/CartFruitComponent/CartFruitComponent";


export const routes = [
    {
        path: '/',
        page: HomePages,
        isShowHeader: true

    },
    {
        path: '/product-details1',
        page: ProductDetailComponent,
        isShowHeader: true
    },
    {
        path: '/product-details2',
        page: aProductDetailComponent,
        isShowHeader: true
    },
    {
        path: '/product-details3',
        page: bProductDetailComponent,
        isShowHeader: true
    },
    {
        path: '/product-details4',
        page: cProductDetailComponent,
        isShowHeader: true
    },
    {
        path: '/product-details5',
        page: dProductDetailComponent,
        isShowHeader: true
    },
    {
        path: '/product-details6',
        page: eProductDetailComponent,
        isShowHeader: true
    },
    {
        path: '/:type/product-details1',
        page: ProductDetailComponent,
        isShowHeader: true
    },
    {
        path: '/:type/product-details2',
        page: aProductDetailComponent,
        isShowHeader: true
    },
    {
        path: '/:type/product-details3',
        page: bProductDetailComponent,
        isShowHeader: true
    },
    {
        path: '/:type/product-details4',
        page: cProductDetailComponent,
        isShowHeader: true
    },
    {
        path: '/:type/product-details5',
        page: dProductDetailComponent,
        isShowHeader: true
    },
    {
        path: '/:type/product-details6',
        page: eProductDetailComponent,

    }, {
        path: '/drink',
        page: CartDrinkComponent,

        isShowHeader: true
    },
    {
        path: '/fruit',
        page: CartFruitComponent,
        isShowHeader: true
    }
]
