import HomePages from "../pages/Homepages/HomePages";
import CartDrinkComponent from "../components/CartDrinkComponent/CartDrinkComponent";
import { SigupPage } from "../pages/SigupPage/SigupPage";

export const routes = [
    {
        path: '/',
        page: HomePages,
        isShowHeader: true
    }, {
        path: '/drink',
        page: CartDrinkComponent,
        isShowHeader: true
    },
    {
        path: '/sign-up',
        page: SigupPage,
        isShowHeader: false
    },
]
