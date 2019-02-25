import React, {Component} from 'react'
import { v4 as randomString } from 'uuid';
import axios from 'axios'

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
    async editBook(id, title, purchaselink, price, info, kprice, favsnip){

        const getSignedRequest = async (file) => {
            console.log(file)
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
                let toEdit = {title, purchaselink, imageurl:url, price, info, kprice, favsnip}
                axios.put(`/api/books/${id}`, toEdit)
                .then(res => {
                    this.props.updateList(res.data)
                    console.log('edit happened')
                })
                .catch(err => {
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
          const editFileInput = document.getElementById(`input-${this.props.id}`).files[0]
          console.log(editFileInput)
          if(!editFileInput){
            let toEdit = {title, purchaselink, price, info, kprice, favsnip}
            axios.put(`/api/books/${id}`, toEdit)
            .then(res => {
                this.props.updateList(res.data)
                console.log('book updated w/o img')
            })
            .catch(err => {
                console.log(err)
            })
          }else{
            getSignedRequest(editFileInput)

          }

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

                    <span>Current Image:</span>
                    <br/>
                    <img src={`${this.props.image}`}/>
                    <br/>
                    <input id={`input-${this.props.id}`} type='file' accept='image/*'/>
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
                    <button onClick={() => {
                        this.editBook(id, title, purchaselink, price, info, kprice, favsnip)}}>Edit</button>
                    
            </div>
        </div>

        )
    }
}

export default  Toedit


