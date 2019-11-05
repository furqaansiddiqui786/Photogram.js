import React, {Component} from 'react';

class AddPhoto extends Component{
    constructor(){
        super()
        this.handlesubmit = this.handlesubmit.bind(this)
    }


handlesubmit(event){
    event.preventDefault();
    const imageLink = event.target.elements.link.value
    const description = event.target.elements.Desc.value

    const post = {
        id : Number(new Date()), description : description,
        imageLink : imageLink
    }
    if(description && imageLink){
        this.props.onAddPhoto(post)
    }
}

    render(){
        return(
            <div>
                <h1>Photogram</h1>
                <div className = 'form-box'>
                <form onSubmit = {this.handlesubmit}>
                    <label>Add a image link</label><br />
                    <input type = 'text' placeholder = "Enter a Image Link to Grab" name = 'link' /><br />
                    <label>Add a description for the above image</label><br />
                    <input type = 'text' placeholder = 'Enter Your Description Here' name = 'Desc' /><br />
                    <button className = 'form-button' value = 'submit' type = 'submit'>Post</button>
                </form>
                </div>
            </div>
        )
    }
}
export default AddPhoto;