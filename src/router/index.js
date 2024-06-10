import HomePages from "../pages/Homepages/HomePages";
import CartDrinkComponent from "../components/CartDrinkComponent/CartDrinkComponent";

export const routes = [
    {
        path: '/',
        page: HomePages,
        isShowHeader: true
    }, {
        path: '/drink',
        page: CartDrinkComponent,
        isShowHeader: true
    }
]
