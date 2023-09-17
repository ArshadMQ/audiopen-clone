import { routerType } from '../types/router.types'
import { HomePage, DemoPage } from '../pages'

const pagesData: routerType[] = [
    {
        path: "",
        title: "home",
        element: <HomePage />
    },
    {
        path: "demo",
        title: "demo",
        element: <DemoPage />
    },
]

export default pagesData;
