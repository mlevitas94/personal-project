import React, {Component} from 'react'

class Admintoedit extends Component{
    constructor(props){
        super(props)
        this.state={
            add:this.props.add,
            remove:this.props.remove,
            edit:this.props.edit,
        }
    }
    updateAdminPrivs(priv){
        this.setState({
           [priv]: !this.state[priv]
        })
    }
    render(){
        return(
            <div className='adminedit'>
               <span>{`${this.props.firstname} ${this.props.lastname}`}</span>
               <br/>
               <span>{`(${this.props.username})`}</span>
               <br/>
               <span>Add:</span>
               <input type='checkbox' checked={this.state.add} onChange={() => this.updateAdminPrivs('add')}/>
               <br/>
               <span>Delete:</span>
               <input type='checkbox' checked={this.state.remove} onChange={() => this.updateAdminPrivs('remove')}/>
               <br/>
               <span>Edit:</span>
               <input type='checkbox' checked={this.state.edit} onChange={() => this.updateAdminPrivs('edit')}/>
               <br/>
               <button>Send Edit</button>
            </div>
        )
    }
}
export default Admintoedit