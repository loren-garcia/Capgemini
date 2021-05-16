import 'bootstrap/dist/css/bootstrap.min.css';
import api from './api';
import { Component } from 'react';

class NovoAnuncio extends Component {

    async handleSubmit() {

        const inputNome = document.getElementById("inputNome").value;
        const inputCliente = document.getElementById("inputCliente").value;
        const inputDataInicio = document.getElementById("inputDataInicio").value;
        const inputDataTermino = document.getElementById("inputDataTermino").value;
        const inputInvestimento = document.getElementById("inputInvestimento").value;
        
        await api
        .post("/anuncios", { 
            nomeAnuncio: inputNome,
            cliente: inputCliente,
            dataInicio: inputDataInicio,
            dataTermino: inputDataTermino,
            investimento: inputInvestimento
        })
        .then(() => alert("Cadastrado com sucesso!"))
        .catch(error => {
            console.log(error) });
    }

    render() {
        return(
            <form className="card position-absolute top-50 start-50 translate-middle" style={{ width: "50vw", textAlign: "center", color: "black" }}>
                <div className="card-header" style={{ textAlign: "center" }}>NOVO ANÚNCIO</div>
                <div className="card-body">
                    <div className="input-group mb-3">
                        <span className="input-group-text">Nome</span>
                        <input type="text" className="form-control" id="inputNome" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Cliente</span>
                        <input type="text" className="form-control" id="inputCliente" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Data de início</span>
                        <input type="text" className="form-control" id="inputDataInicio" placeholder="Mês/Dia/Ano" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Data de término</span>
                        <input type="text" className="form-control" id="inputDataTermino" placeholder="Mês/Dia/Ano" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Investimento diário</span>
                        <input type="text" className="form-control" id="inputInvestimento" aria-describedby="basic-addon1"/>
                    </div>
                <button type="submit" className="btn btn-primary btn-lg" onClick={() => this.handleSubmit()}>CADASTRAR</button>
                </div>
            </form>
        );
    }
}

export default NovoAnuncio;

