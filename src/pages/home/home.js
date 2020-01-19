import { Suspense, lazy } from 'react'

const Home = lazy(() => import('@modules/home'))

const Main = () => (
    <Suspense fallback="">
        <Home />
    </Suspense>
)

export default Main
