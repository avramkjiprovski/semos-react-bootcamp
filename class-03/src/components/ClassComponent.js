import React from 'react';

export class ClassComponent extends React.Component {

    constructor(props){
        super(props);

        // definiranje na lokalen state na komponentot
        this.state = {
            promenliva1: "Nekoja Vrednossss"
        }
    }

  
    // componentDidMount() se izvrsuva vo momentot koga komponentata e vnesena vo DOM-ot
    // vo koj se izvrsuva kodot koj ke se izvrsuva vo komponentata
    
    // componentDidUpdate() se izvrsuva vo momentot koga komponentata e promenena
    // vo koj se izvrsuva kodot koj ke se izvrsuva vo komponentata
    
    // componentWillUnmount() se izvrsuva vo momentot koga komponentata e otstranena

    componentDidMount(){
        console.log('Class Component is mounted');
    }

    smeniVrednost = () => {
        console.log('function smeniVrednost() called!')

        this.setState({
            promenliva1: "Nekoja druga vrednossss",
            username: "",
            password: ""
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div id="class-component">
                <h1>Class Component</h1>
                <p>
                    {this.state.promenliva1}
                </p>
                <button onClick={this.smeniVrednost}>Smeni vrednost</button>
                
                <h2>Username: {this.state.username}</h2>
                <input 
                    type="text" 
                    name={"username"}
                    placeholder="Vnesi tekst" 
                    value={this.state.username}
                    onChange={this.handleChange}
                />

                <h2>Password: {this.state.password}</h2>
                <input 
                    type="password" 
                    name={"password"} 
                    placeholder="Vnesi tekst" 
                    value={this.state.password}
                    onChange={this.handleChange}
                />

            </div>
        );
    }
}