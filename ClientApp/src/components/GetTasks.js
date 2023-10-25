import React, { Component } from 'react';

export class GetTasks extends Component {
    static displayName = GetTasks.name;

    constructor(props) {
        super(props);
        this.state = { tasks: [], loading: true };
    }

    componentDidMount() {
        this.populateList();
    }

    static renderMyTasksList(tasks) {
        return (
            <>
                {tasks.map(task =>
                    <div key={task.id}>
                        <h2 className={task.isImportant ? "important" : ""} >{task.title}</h2>
                        <p>{task.description}</p>
                    </div>
                )}
            </>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : GetTasks.renderMyTasksList(this.state.tasks);

        return (
            <div>
                <h1 id="tableLabel">Minhas tarefas em To-do</h1>
                <p>Este componente requisita dados do servidor .Net, que solicita os dados do MySQL hospedado na AWS.</p>
                {contents}
            </div>
        );
    }

    async populateList() {
        const response = await fetch('mytasks');
        const data = await response.json();
        this.setState({ tasks: data, loading: false });
    }
}
