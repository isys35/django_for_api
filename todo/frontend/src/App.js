import React, { Component } from 'react';

const list = [
    {
        "id":1,
        "title":"LEARN HTTP",
        "body":"Boooooodddyyy"
    },
    {
        "id":2,
        "title":"1 Title",
        "body":"body hghghg"
    },
    {
        "id":3,
        "title":"title title",
        "body":"Truuuue"
    }
        ]

class App extends Component{
    constructor(props) {
        super(props);
        this.state = { list };
    }
    render() {
        return (<div>
            {this.state.list.map(item => (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <p>{item.body}</p>
                </div>
            ))}
        </div>);
    }
}

export default App;