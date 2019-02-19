import React, {Component} from 'react'
// import {getBooks} from '../../../ducks/reducer'
import './Logged.css'

class Toedit extends Component{
    constructor(props){
        super(props)
        this.state = {
            title: this.props.title,
            purchaselink:this.props.link,
            imageurl: this.props.image,
            price: this.props.price,
            info:this.props.info,
            kprice:this.props.kprice,
            favsnip:this.props.favsnip
        }
    }

    updateEditInput(input, val){
        this.setState({
            [input]: val
        })
    }

    render(){
        const  {title, purchaselink, imageurl, price, info, kprice, favsnip} = this.state
        const {id} = this.props
        return(
        <div>
            <span>{this.props.title}</span>
            <br/> 
            <button>Edit this book</button>

            {/* fields pop up when clicked, hidden with overflow and height */}
            <div className='edit-field'>
                <span>Title:</span>
                    <br/>
                    <input type='text' defaultValue={this.props.title} onChange={(e) => this.updateEditInput('title', e.target.value)}/>
                    <br/>

                    <span>Purchase Link:</span>
                    <br/>
                    <input type='url' defaultValue={this.props.link} onChange={(e) => this.updateEditInput('purchaselink', e.target.value)}/>
                    <br/>

                    <span>Image:</span>
                    <br/>
                    <input defaultValue={this.props.image}onChange={(e) => this.updateEditInput('imageurl', e.target.value)}/>
                    <br/>

                    <span>Price:</span>
                    <br/>
                    <input type='text' defaultValue={this.props.price} onChange={(e) => this.updateEditInput('price', e.target.value)}/>
                    <br/>

                    <span>Info:</span>
                    <br/>
                    <input type='text' defaultValue={this.props.info} onChange={(e) => this.updateEditInput('info', e.target.value)}/>
                    <br/>

                    <span>Kindle Price:</span>
                    <br/>
                    <input type='text' defaultValue={this.props.kprice} onChange={(e) => this.updateEditInput('kprice', e.target.value)}/>
                    <br/>

                    <span>Favorite Snippet:</span>
                    <br/>
                    <input type='text' defaultValue={this.props.favsnip} onChange={(e) => this.updateEditInput('favsnip', e.target.value)}/>
                    <br/>
                    <button onClick={() => this.props.edit(id, title, purchaselink, imageurl, price, info, kprice, favsnip)}>Edit</button>
                    
            </div>
        </div>

        )
    }
}

// const mapToProps = reduxState => {
//     const {books} = reduxState
//     return {
//         books
//     }
// }
export default  Toedit
// connect(mapToProps, {getBooks})(Toedit)

