import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import history from './history';
import api from './api';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      anuncios: [],
    };
  }

  componentDidMount() {

    api
    .get("/anuncios")
    .then(response => {
        this.setState({ anuncios: response.data });
    })
    .catch(error => {
      this.setState({ errorMessage: error.message });
    });
  }

  valorMaximo(dataInicio, dataTermino, investimento) {

    const dataI = new Date(dataInicio);
    const dataT = new Date(dataTermino);
    const diffTime = Math.abs(dataT - dataI);
    const diffDays = Math.ceil(diffTime / (1000 * 3600 * 24)); 
    
    return (diffDays * investimento).toFixed(2);
  }

  visualizacoesMaximo(valorInvestido) {

    var numViewsOriginal = valorInvestido * 30;
    var numViewsTotal = numViewsOriginal;
            
    for(let i = 0; i < 3; i++){
        var numCliques = (numViewsOriginal * 12) / 100;
        var numCompartilhamentos = (numCliques * 3) / 20;
        var numViewsNovos = numCompartilhamentos * 40;
        numViewsOriginal = numViewsNovos;
        numViewsTotal += numViewsNovos;
    }
    return parseInt(numViewsTotal);
  }
  
  cliquesMaximo(valorInvestido) {
    var numViewsOriginal = valorInvestido * 30;
            
    for(let i = 0; i < 3; i++){
        var numCliques = (numViewsOriginal * 12) / 100;
    }
    return parseInt(numCliques);
  }

  compartilhamentosMaximo(valorInvestido) {
    var numViewsOriginal = valorInvestido * 30;
            
    for(let i = 0; i < 3; i++){
        var numCliques = (numViewsOriginal * 12) / 100;
        var numCompartilhamentos = (numCliques * 3) / 20;
    }
    return parseInt(numCompartilhamentos);
  }

  handleSearch() {

    const inputCliente = document.getElementById("inputCliente").value;
    const inputDataInicio = document.getElementById("inputDataInicio").value;
    const inputDataTermino = document.getElementById("inputDataTermino").value;

    const dataInputI = new Date(inputDataInicio);
    const dataInputT = new Date(inputDataTermino);
    
    let tab = [];

    tab = this.state.anuncios.filter(array => {

      const dataI = new Date(array.dataInicio);
      const dataT = new Date(array.dataTermino);

      if(array.cliente === inputCliente){
        return true;
      }else if(dataI - dataInputI >= 0 && dataT - dataInputT <= 0) {
        return true;
      }
    });

    this.setState({
      anuncios: tab
    });

    document.getElementById("inputCliente").value = '';
    document.getElementById("inputDataInicio").value = '';
    document.getElementById("inputDataTermino").value = '';
  }

  render() {

    return(
      <div className="" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <button type="submit" className="btn btn-primary btn-lg" style={{marginTop: '20px'}} onClick={() => {
               history.push('/novoanuncio')
            }}>Cadastrar anúncio</button>
            <div className="card-body" style={{width: '50vw'}}>
                <div className="input-group mb-3">
                    <span className="input-group-text">Cliente</span>
                    <input type="text" className="form-control" id="inputCliente" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Data Início</span>
                    <input type="text" className="form-control" id="inputDataInicio" placeholder="Mês/Dia/Ano" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Data Término</span>
                    <input type="text" className="form-control" id="inputDataTermino" placeholder="Mês/Dia/Ano" aria-describedby="basic-addon1"/>
                </div>
            </div>
            <button type="submit" className="btn btn-primary btn-lg" style={{marginBottom: '20px'}} onClick={() => this.handleSearch() }>Pesquisar</button>
        <table border="1" className="table" style={{width: '80vw'}}>
            <thead className="thead-dark">
                <tr>
                <th scope="col">Valor total</th>
                <th scope="col">Visualizações</th>
                <th scope="col">Cliques</th>
                <th scope="col">Compartilhamentos</th>
                </tr>
            </thead>
            <tbody>
                { 
                  this.state.anuncios.map(anuncio => (
                    <tr key={ anuncio.anuncioID }>
                        <td>{ this.valorMaximo(anuncio.dataInicio, anuncio.dataTermino, anuncio.investimento) }</td>
                        <td>{ this.visualizacoesMaximo(this.valorMaximo(anuncio.dataInicio, anuncio.dataTermino, anuncio.investimento)) }</td>
                        <td>{ this.cliquesMaximo(this.valorMaximo(anuncio.dataInicio, anuncio.dataTermino, anuncio.investimento)) }</td>
                        <td>{ this.compartilhamentosMaximo(this.valorMaximo(anuncio.dataInicio, anuncio.dataTermino, anuncio.investimento)) }</td>
                    </tr>
                  ))
                }
            </tbody>
        </table>
      </div>
    );
  };
}

export default Home;

