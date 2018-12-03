import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Calc from '../components/Calc'

export default ()=>(
    <div>
        <Header/>
        <NavBar/>
        <h3 className="center">Página de la Calculadora</h3>
        <Calc/>
    </div>
)