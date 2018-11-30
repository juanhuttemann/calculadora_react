import { Component } from 'react';

class Calc extends Component {
    state = {
        res: "0",
    }

    onDigit = (digit)=>{
        this.setState({ 
            res: digit 
        })
    }

    render() {
        return (
            <div>
                <div className="z-depth-2 light-blue lighten-2 white-text center-align resultados">
                    {this.state.res || "0"}
                </div>

                <div className="calc-container blue lighten-3 hoverable z-depth-2">
                    {
                        ["0","1","2","3","4","5","6","7","8","9","."].map(digit=>{
                                return (
                                    <a 
                                    className="waves-effect waves-light btn" 
                                    onClick={() => this.onDigit(digit)}>
                                        {digit}
                                    </a>
                                )
                            }
                        )
                    }
                </div>
                <div className="operadores center-align">
                    {
                        ["+","-","/","*",""].map(digit=>{
                                return (
                                    <a
                                        className="waves-effect waves-light btn deep-orange darken-1"
                                        onClick={() => this.onDigit(digit)}>
                                        {digit === "" ? "C" : digit}
                                    </a>
                                )
                            }
                        )
                    }
                </div>
                <style jsx>
                    {`
                        .resultados {
                            width:300px;
                            margin:0 auto;
                            font-size: 32px;
                            margin-bottom: 10px;
                        }

                        .calc-container {
                            width: 300px;
                            margin: 0 auto;
                            text-align:center;
                            padding: 12px;
                        }

                        .operadores {
                            border: 1px solid #ccc;
                            padding: 10px;
                            margin-top: 20px;


                        }
                    `}
                </style>
            </div>
        );
    }
}

export default Calc;