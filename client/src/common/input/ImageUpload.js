import  React from 'react';
import UploadImage from '../UploadImage.js';
import ImageUploadInput from './ImageUploadInput';
import apiConstants from '../../../constants/api.js';
import axiosRequest from '../../../helper/request';
import SuccessAlert from "../alert/SuccessAlert";
import ErrorAlert from "../alert/ErrorAlert";
import errorMessage from "../../../constants/errorMessage";
import successMessage from "../../../constants/successMessage";

var FormData = require('form-data');


//Image path down

var ImageAdd = require('../../../../public/images/imageAdd.png');
var closeButton = require('../../../../public/images/close_green.png');


let imageIndex = 0;
let imageArray = [];
let imageURL = [];

class ImageUpload extends React.Component {

	constructor(props) {
      super(props);
      this.state = {
      		isModalOpen: false,
      		image : [],
            fileUpload:[],
            comment : '',
            error:{},
            success:{}
       	}

       this.handleUpload = this.handleUpload.bind(this);
       this.hideSuccessAlert = this.hideSuccessAlert.bind(this);
       this.hideErrorAlert = this.hideErrorAlert.bind(this);
    }
  	openModal(event) {

        event.preventDefault();
       this.setState({ isModalOpen: true })
	}

    closeModal() {
       this.setState({
        isModalOpen: false,
        error:{},
        success:{},
         })
    }


	uploadImage(event) {
       let errorFlag = false;
       var response = " ";

       event.preventDefault();

       (this.state.fileUpload).map((item, index)=>{
          let formData = new FormData();
           formData.append('image', item);
            var invocation = new XMLHttpRequest();
            var url = apiConstants.uploadImageToRaven.url;
            invocation.open('POST', url);
            invocation.onreadystatechange = function(){
                if(invocation.readyState === 4 && invocation.status === 200) {
                    response = invocation.responseText;

                    let url = JSON.parse(response).filename;
                    imageURL.push(url.toString());
                }else{
                    errorFlag = true;
                }
            };
            invocation.send(formData);

       })

       this.props.updateImageURL(imageURL);


       if(!this.state.image.length){

                this.setState({
                    error:'error',
                    success:{}
                });

       }else{

            this.props.updateImageURL(imageURL);


            this.setState({
                success : response,
                error : {}
                 });
        }
    }

    handleUpload(event) {

        event.preventDefault();


        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                imageArray.push(e.target.result)
                imageIndex += 1;
                this.setState({image: imageArray});
            };
            reader.readAsDataURL(event.target.files[0]);
        }
        const target = event.currentTarget;
        if(target.name==='fileUpload'){
            this.setState({
                [target.name]:[...this.state.fileUpload, target.files[0]]

            })
        }else{
            this.setState({
                [target.name]: target.value
            });

        }
    }

  removeImage(event){

        event.preventDefault();


        let eventId = event.target.id;

        if(eventId){
            let imageNumber = eventId.slice(eventId.length - 1,eventId.length);

            let URL = this.state.fileUpload;

            imageArray.splice(imageNumber - 1, 1);
            URL.splice(imageNumber - 1, 1);

            imageIndex -= 1;

            this.setState({image: imageArray});
            this.setState({fileUpload : URL});
        }

  }

    componentWillUnmount(){
        imageIndex = 0;
        imageArray = [];
        imageURL=[];
    }

    imageBlock(){

    	return Object.entries([...Array(8)]).map((item, index)=>{
    		index += 1;
    		let string = `image${index}`;
    		return (
    				    <div key={index} style={styles.removebuttonAlign}>
                        <img  style={styles.image} className={string} src={this.state.image[index - 1]}/>
                        {this.state.image[index - 1]?<button id={string} className="btn-link">Remove</button>:<p></p>}
                        </div>

    			)
    	})
   	}

    hideSuccessAlert(){
        this.setState({
            success:{},
            isModalOpen : false,
            error:{},
        });
    }

    hideErrorAlert(){
        this.setState({
            success:{},
            error:{}
        });
    }


   render() {
      return (
        <div>

        	    <div>
                    <button className="btn-primary" style={styles.uploadLabel} onClick={(event) => this.openModal(event)}>Upload images</button>
                </div>

                <UploadImage isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>


                    {Object.keys(this.state.success).length!==0?<SuccessAlert
                                error
                                title={successMessage.imageUploadStatus.header}
                                message={successMessage.imageUploadStatus.body}
                                messageId=""
                                onClick={this.hideSuccessAlert}/>:null}

                    {Object.keys(this.state.error).length!==0?<ErrorAlert
                                error
                                title={errorMessage.noImageSelectedMessage.header}
                                message={errorMessage.noImageSelectedMessage.body}
                                onClick={this.hideErrorAlert}/>:null}


                        <p><strong style={styles.textDesign}>{imageIndex?(imageIndex === 8)?<span style={styles.alertText}>Maximum images are selected!</span>:`You can upload ${8 - imageIndex} more images`:"You can upload maximum 8 images"}</strong></p>

                        <div style={styles.imageContainer} onClick={(event)=>{this.removeImage(event)}}>

                        {this.imageBlock()}

                        </div>

                        {(imageIndex === 8)?
                        	<div></div>
                        	:
                        	<ImageUploadInput
                            onChange={this.handleUpload}
                            label={"Attach Image"}
                            name={"fileUpload"}
                            required
                            uploadText={"Browse"}
                            fileTypeText="Image must be of PNG/JPG format"
                            accept=".jpg, .png"
                        	/>
                    	}


                        <p><button  className="col-md-2 form-group" style={styles.uploadbutton} onClick={(event) => this.uploadImage(event)}><strong style={styles.uploadText}>Upload</strong></button></p>

                        <img  style={styles.closebutton} src={closeButton} onClick={() => this.closeModal()} />

                    </UploadImage>
        </div>
      );
   }
}

const styles = {
    uploadbutton:{
        flexDirection: "column",
        display: "flex",
        overflow: "hidden",
        marginTop:20,
        marginLeft : 380,
        border : "solid 1px #0099cc"
    },
    closebutton:{
        display: 'block',
        height : 50,
        width : 50,
        cursor : 'pointer',
        marginTop:-257,
        marginLeft : 905

    },
    image : {
        display : "inline-block",
        height : 100,
        width : 100,
		borderRadius : 20
	},
    uploadText : {
        marginLeft : 40
    },
    textDesign : {
        marginLeft : 360
    },
    imageContainer : {
        marginLeft : 80,
        display : "flex",
        flexDirection : "row"
    },
    alertText : {
        color : "red"
    },
    removebuttonAlign : {
        display : "flex",
        flexDirection : "column"
    },
    uploadLabel :{
        marginTop:0,
        marginLeft : 800,
    }
};


export default ImageUpload;
