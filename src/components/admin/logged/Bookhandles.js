import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {getBooks} from '../../../ducks/reducer'
import { v4 as randomString } from 'uuid';
import Toedit from './Toedit'

class Bookhandles extends Component{
    constructor(){
        super()
        this.state={
            add:{
                title:'', purchaselink:'',imageurl:'',price:'', info:'', kprice:'', favsnip:''
            }
           
        }
        this.updateList = this.updateList.bind(this)
    }


    updateAddInput(input, val){
        this.setState({
            add: {
                ...this.state.add,
                [input]:val
            }
        })
    }

    updateList(data){
        this.props.getBooks(data)
    }

    async addBook(){
        const getSignedRequest = async (file) => {
            const fileName = `${randomString()}-${file.name.replace(/\s/g, '-')}`;
    
            axios.get('api/signs3' , {
                params: {
                    'file-name':fileName,
                    'file-type':file.type
                }
            })
            .then(res => {
                const {signedRequest, url} = res.data;
                uploadFile(file, signedRequest, url)
    
            })
            .catch(err => {
                console.log(err)
            })
        }
    
        const uploadFile = async (file, signedRequest, url) => {
            const options = {
              headers: {
                'Content-Type': file.type,
              },
            };
        
            axios
              .put(signedRequest, file, options)
              .then(res => {
                  console.log(url)
                  this.setState({
                    add: {
                        ...this.state.add,
                        imageurl:url
                    }
                })
            const {title, purchaselink, imageurl, price, info, kprice, favsnip} = this.state.add
            const toAdd = {title, purchaselink, imageurl, price, info, kprice, favsnip}
            console.log(toAdd)
                axios.post('/api/books', toAdd)
                .then(res => {
                    this.setState({
                        add: { title: '',purchaselink: '',imageurl:'',price: '',info:'', kprice: '',favsnip:''}
                    }) 
                    this.props.getBooks(res.data)  
                }).catch(err => {
                    console.log(err)
                })  
            })
              .catch(err => {
                if (err.response.status === 403) {
                  alert(
                    `Your request for a signed URL failed with a status 403. Double check the CORS configuration and bucket policy in the README. You also will want to double check your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in your .env and ensure that they are the same as the ones that you created in the IAM dashboard. You may need to generate new keys\n${
                      err.stack
                    }`
                  );
                } else {
                  alert(`ERROR: ${err.status}\n ${err.stack}`);
                }
              });
          };

        const imageInput = document.getElementById('imageInput').files[0]
        getSignedRequest(imageInput)
    }
    deleteBook(id){
        axios.delete(`/api/books/${id}`)
        .then(res => {
            this.props.getBooks(res.data)
        }).catch(err => {
            console.log(err)
        })
    }


    render(){
        const bookScrolls = (sel, trans) => {
            document.querySelector('.add-inputs').classList.remove('add-inputs-extend')
            document.querySelector('.delete-list').classList.remove('delete-list-extend')
            document.querySelector('.edit-inputs').classList.remove('edit-inputs-extend')

            document.querySelector(`${sel}`).classList.toggle(`${trans}`)
        }

        const toBeDeleted = this.props.books.map((book, i) => {
            return (
                <div className='tobedeleted' key={i}>
                    <span>{book.title}</span>
                    <br/>
                    <button onClick={() => this.deleteBook(book.book_id)}>Delete</button>
                </div>
            )
        })

        const toEdit = this.props.books.map((book, i) => {
            const {book_id, title, link, image, price, info, kindle_price, fav_snip} = book
           return(
                <Toedit key ={i}
                updateList={this.updateList}
                id={book_id}
                title={title}
                link={link}
                image={image}
                price={price}
                info={info}
                kprice={kindle_price}
                favsnip={fav_snip}
                />
           )

        })
        return(
            <div className='handle-container'>
                <div className='add-auth'>
                    <button onClick={() => {
                        bookScrolls('.add-inputs', 'add-inputs-extend')
                    }}>Add a Book</button>
                    <br/>

                    {/* hidden with overflow and height */}
                    <div className='add-inputs'> 
                        <span>Title:</span>
                        <br/>
                        <input type='text' value={this.state.add.title} onChange={(e) => this.updateAddInput( 'title',e.target.value)}/>
                        <br/>

                        <span>Purchase Link:</span>
                        <br/>
                        <input type='url' incvalue={this.state.add.purchaselink} onChange={(e) => this.updateAddInput( 'purchaselink',e.target.value)}/>
                        <br/>

                        <span>Image:</span>
                        <br/>
                        <input id='imageInput' type='file' accept='image/*'/>
                        <br/>

                        <span>Price:</span>
                        <br/>
                        <input type='text' value={this.state.add.price} onChange={(e) => this.updateAddInput( 'price',e.target.value)}/>
                        <br/>

                        <span>Info:</span>
                        <br/>
                        <input type='text' value={this.state.add.info} onChange={(e) => this.updateAddInput( 'info',e.target.value)}/>
                        <br/>

                        <span>Kindle Price:</span>
                        <br/>
                        <input type='text' value={this.state.add.kprice} onChange={(e) => this.updateAddInput( 'kprice',e.target.value)}/>
                        <br/>

                        <span>Favorite Snippet:</span>
                        <br/>
                        <input type='text' value={this.state.add.favsnip} onChange={(e) => this.updateAddInput('favsnip',e.target.value)}/>
                        <br/>

                        <button onClick={() => this.addBook()}>Add Book</button>

                    </div>

                </div>
                <div className='delete-auth'>
                    <button onClick={() =>{
                        bookScrolls('.delete-list', 'delete-list-extend')
                    }}>Delete a Book</button>
                    <br/>

                    {/* hidden with overflow and height */}
                    <div className='delete-list'>
                        {toBeDeleted}
                    </div>
                </div>    
                <div className='edit-auth'> 
                    <button onClick={() => {
                        bookScrolls('.edit-inputs', 'edit-inputs-extend')
                    }}>Edit a Book</button>
                    <br/>
                    <div className='edit-inputs'>
                        {toEdit}

                    </div>

                </div>    

            </div>
        )
    }
}

const mapToProps = reduxState => {
    const {books} = reduxState
    return {
        books
    }
}
export default connect(mapToProps, {getBooks})(Bookhandles)