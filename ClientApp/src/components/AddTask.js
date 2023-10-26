import React, { Component } from 'react';

export class AddTask extends Component {
    static displayName = AddTask.name;

    constructor(props) {
        super(props);
        this.state = {
            Id: 0,
            IsImportant: false,
            Title: "",
            Description: "",
            Status: "Aguardando"
        };
        this.sendData = this.sendData.bind(this);
    }

    componentDidMount() {

    }

    async sendData(e) {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                Id: 0,
                IsImportant: this.state.IsImportant,
                Title: this.state.Title,
                Description: this.state.Description
            })
        };
        const response = await fetch('mytasks/add', requestOptions);
        this.setState({ Status: "Enviado", Data: response });
    }

    renderFormMyTask() {
        return (
            <>
                <form onSubmit={this.sendData} >

                    <div className='form-group' key={"titulo"}>
                        <label >Título: </label>
                        <input className='form-control' type='text' name='Title' onChange={e => this.setState({ Title: e.target.value })} />

                    </div>
                    <div className='form-group' key={"desc"}>
                        <label >Descrição: </label>
                        <input className='form-control' type='text' name='Description' onChange={e => this.setState({ Description: e.target.value })} />

                    </div>
                    <div className='form-group' key={"important"}>
                        <input type='checkbox' name="IsImportant" onChange={e => this.setState({ IsImportant: true })} />
                        <label > &nbsp; Importante </label>

                    </div>
                    <button className="btn btn-primary">Salvar</button>
                </form>

                <p>Status: {this.state.Status}</p>
            </>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Carregando...</em></p>
            : this.renderFormMyTask(this.state.tasks);

        return (
            <div>
                <h1 id="tableLabel">Adicionar Task</h1>

                <p>Adicione os dados da tarefa a seguir.</p>
                {contents}
            </div>
        );
    }


}
