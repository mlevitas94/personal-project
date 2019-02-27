import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux';
import {getAdmins} from '../../../ducks/reducer'

import Admintoedit from './Admintoedit'

class Adminhandles extends Component{
    constructor(){
        super()
        this.state = {
            firstname:'',
            lastname:'',
            username:'',
            password:'',
            cpassword:'',
            add:false,
            remove: false,
            edit: false
        }
        this.editAdminPrivs=this.editAdminPrivs.bind(this)
    }

    componentDidMount(){
        axios.get('/admin/getadmins')
        .then(res => {
            this.props.getAdmins(res.data)
            console.log(this.props.admins)
        }).catch(err => {
            console.log(err)
        })
    }
    addAdminInputs(input, val){
        this.setState({
            [input]: val
        })
    }
    updateAdminPrivs(priv){
        this.setState({
           [priv]: !this.state[priv]
        })
    }
    adminDelete(id){
        axios.delete(`/admin/deleteadmin/${id}`)
        .then(res =>{
           this.props.getAdmins(res.data)
        }).catch(err => {
            console.log(err)
        })
    }
    registerAdmin(){
        const {firstname,lastname,username,password,cpassword,add,remove,edit} = this.state
        const addUserInfo = {firstname, lastname, username, password, cpassword, add, remove, edit}
        if(password === cpassword){
            axios.post('/admin/register', addUserInfo)
            .then(res => {
                console.log(res.data)
                this.setState({
                    firstname:'', lastname:'', username:'', password:'', cpassword:'', add: false, remove:false, edit: false
                })
            }).catch(err => {
                console.log(err)
            })
        }else{
            console.log('passwords need to match')
        }
    }

    editAdminPrivs(id,add,remove,edit){
        const privEdits = {add, remove, edit}
        axios.put(`/admin/editadmin/${id}`, privEdits)
        .then(res => {
            console.log('admin edited')
        }).catch(err =>{
            console.log('err')
        })
    }
    
    render(){
        const deleteAdmin = this.props.admins.map((admin, i) => {
            return (
                <div key={i} className='admindelete'>
                    <span>{`${admin.first_name} ${admin.last_name}`}</span>
                    <br/>
                    <span>{`(${admin.username})`}</span>
                    <br/>
                    <button onClick={() => this.adminDelete(admin.admin_id)}>Delete admin</button>
                </div>
            )
        })

        const editAdmin = this.props.admins.map((admin, i) => {
            return(
                <Admintoedit key={i}
                editfunc={this.editAdminPrivs}
                id={admin.admin_id}
                firstname={admin.first_name}
                lastname={admin.last_name}
                username={admin.username}
                add={admin.add}
                remove={admin.delete}
                edit={admin.edit}
                />
            )
        })

        const highlight = (id) => {
            document.querySelector(`${id}`).classList.toggle('check-container-highlight')
        }

        return(
            <div className='admin-handle-container'>
                <h1>Admin Control</h1>
                <div className='add-admin-container'>
                    <h3>Register a new Admin</h3>

                    <span>First name:</span>

                    <br/>

                    <input type='text' value={this.state.firstname} onChange={(e) => this.addAdminInputs('firstname', e.target.value)}/>

                    <br/>

                    <span>Last name:</span>

                    <br/>

                    <input type='text' value={this.state.lastname} onChange={(e) => this.addAdminInputs('lastname', e.target.value)}/>

                    <br/>

                    <span>Username:</span>

                    <br/>

                    <input type='text' value={this.state.username} onChange={(e) => this.addAdminInputs('username', e.target.value)}/>

                    <br/>

                    <span>Privileges:</span>

                    <br/>
                    <div className='add-checks'>
                        <div className='check-container' id='check-one'>

                            <span>Add books:</span>
                            <input type='checkbox' checked={this.state.add} onChange={()=>{
                                highlight('#check-one')
                                this.updateAdminPrivs('add')}}/>

                        </div>
                        <br/>

                        <div className='check-container' id='check-two'>
                            <span>Delete books:</span>
                            <input type='checkbox' checked={this.state.remove} onChange={()=>{
                                highlight('#check-two')
                                this.updateAdminPrivs('remove')}}/>

                        </div>

                        <br/>

                        <div className='check-container' id='check-three'>

                            <span>Edit books:</span>
                            <input type='checkbox' checked={this.state.edit} onChange={()=>{
                                highlight('#check-three')
                                this.updateAdminPrivs('edit')}}/>

                        </div>
                    </div>
                    <br/>

                    <span>Password:</span>

                    <br/>

                    <input type='password' value={this.state.password} onChange={(e) => this.addAdminInputs('password', e.target.value)}/>

                    <br/>

                    <span>Repeat Password:</span>

                    <br/>

                    <input type='password' value={this.state.cpassword} onChange={(e) => this.addAdminInputs('cpassword', e.target.value)}/>

                    <br/>

                    <button onClick={() => this.registerAdmin()}>Create Admin</button>
                </div>
                <br/>
                <div className='delete-container'>
                    <h3>Remove an Admin from service</h3>
                    <div className='delete-admin-container'>
                        {deleteAdmin}
                    </div>
                </div>
                <div className='edit-container'>
                    <h3>Edit Admin Privileges</h3>
                    <div className='edit-admin-container'>
                        {editAdmin}
                    </div>    
                </div>
            </div>
        )
    }
}
const mapToProps = reduxState => {
    const {admins} = reduxState
    return {
        admins
    }
}
export default connect(mapToProps, {getAdmins})(Adminhandles)