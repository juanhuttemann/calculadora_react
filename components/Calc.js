import { Component } from 'react';

class Calc extends Component {
    state = {
        res: "0",
    }

    alertar = ()=>{
        alert("hola desde una método de clase")
    }

    render() {
        return (
            <div>
                <div className="z-depth-2 light-blue lighten-2 white-text center-align resultados">{this.state.res}</div>
                <div style={{ textAlign: "center" }}>
                    <a className="waves-effect waves-light btn" onClick={this.alertar}>0</a>
                    <a className="waves-effect waves-light btn">1</a>
                    <a className="waves-effect waves-light btn">2</a>
                </div>
                <style jsx>
                    {`
                        .resultados {
                            width:300px;
                            margin:0 auto;
                            font-size: 32px;
                            margin-bottom: 10px;
                        }
                    `}
                </style>
            </div>
        );
    }
}

export default Calc;