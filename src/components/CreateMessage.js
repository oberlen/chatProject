import React ,{Component} from 'react'

class CreateMessage extends Component {
    constructor()
    {
        super();
        this.state = {
            messageContent:''
        }
    }
    handlerSubmit=(e)=>{
        e.preventDefault();

        const message ={
            content:this.state.messageContent
        }

        this.setState({messageContent:''})

        this.props.handlerCreateMessage(message)

    };
    handlerChangeMessageContent=(e)=>{
        this.setState({
            messageContent:e.target.value
        })
    }
    render() {
        return <form className="create_message" onSubmit={this.handlerSubmit}>
            <input type="text" value={this.state.messageContent} onChange={this.handlerChangeMessageContent} placeholder="Plece Enter Message"/>
            <input type="submit" value="SEND"/>
        </form>
    }
}
export default CreateMessage;
