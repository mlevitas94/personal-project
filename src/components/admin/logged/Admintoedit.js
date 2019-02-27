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
        const {add, remove, edit} = this.state
        return(
            <div className='adminedit'>
               <span className='fullname'>{`${this.props.firstname} ${this.props.lastname}`}</span>
               <br/>
               <span className='edit-username'>{`(${this.props.username})`}</span>
               <br/>
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
               <button onClick={() => this.props.editfunc(this.props.id, add, remove, edit)}>Send Edit</button>
            </div>
        )
    }
}
export default Admintoedit