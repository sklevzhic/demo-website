import type {NextPage} from 'next'
import { MainLayout } from '../components/layout/MainLayout';

const Home: NextPage = () => {
    return (
        <>

            <MainLayout>
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold text-gray-900">All games</h1>
                    </div>
                </header>

                <main>
                </main>
            </MainLayout>
        </>

    )
}

export default Home
