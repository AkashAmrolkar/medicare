
import Header from '../component/header/Header'
import Footer from '../component/footer/Footer'
import Routers from '../routes/Router'
const Layout = () => {
  return (
    <div>
        <Header />
        <main>
            <Routers />
        </main>
        <Footer />
    </div>
  )
}

export default Layout