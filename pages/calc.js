import Header from '../components/Header'
import NavBar from '../components/NavBar'
export default ()=>(
    <div>
        <Header/>
        <NavBar/>
        <h1>Página de la Calculadora</h1>
        <div className="z-depth-2 light-blue lighten-2 white-text center-align resultados">Area de numeros</div>
        <div style={{textAlign: "center"}}>
            <a className="waves-effect waves-light btn">0</a>
            <a className="waves-effect waves-light btn">1</a>
            <a className="waves-effect waves-light btn">2</a>
        </div>
        <style jsx>
        {
            `
            .resultados {
                width:300px;
                margin:0 auto;
                font-size: 32px;
                margin-bottom: 10px;
            }
            `
        }
        </style>
    </div>
)