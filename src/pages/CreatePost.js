import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import axios from "axios";
import {useState} from 'react';
import * as Yup from 'yup'
import { useForm } from "react-hook-form";
import Slider from "./SliderUI"
import Button from "@material-ui/core/Button";
import InfoIcon from '@mui/icons-material/Info';

import DATA from '../data/countries.json'
import './createPost.css'


function CreatePost() {

    const { register } = useForm(); 
    


    const initialValues = {
        Country: "",
        UniName: "",
        City: "",
        houseName: "",
        postText: "",
        rating: "",
    };

    const validationSchema = Yup.object().shape({
        UniName: Yup.string().required("This is a required field"),
        Country: Yup.string().required("This is a required field"),
        houseName: Yup.string().required("This is a required field"),
        City: Yup.string().required("This is a required field"),
        postText: Yup.string().required("This is a required field"),
        rating: Yup.number().min(0).max(5).required(),
    })

    const onSubmit = (data, {resetForm}) =>{
        console.log(data)
        axios.post("https://roomie-api-mysql.herokuapp.com/allReviews", data)
        resetForm({values: ''})
    }

    const [filteredData, setFilteredData] = useState([])

    const inf = document.getElementsByClassName('more-info');
    
    const showInfo = (event) =>{
        for(var i=0;i<inf.length;i++){
            inf[i].style.display = 'flex';
        }
        
    }
    const hideInfo = (event) =>{
        for(var i=0;i<inf.length;i++){
            inf[i].style.display = 'none';
        }
    }

    


    const handleFilter = (event) => {
        const searchWord = event.target.value
        const newFilter = DATA.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        })
        if (searchWord === "") {
            setFilteredData([])
        }else if(newFilter[0] != null && searchWord.toLowerCase() === newFilter[0].name.toLowerCase()){
            setFilteredData([])
        }else{
            setFilteredData(newFilter)
        }   
        
    }
    
    
    

    return (
        <main>
            <div className="header">
                <div className="header-logo">
                    <a href="/">Roomie</a> 
                </div>
            </div>
            <div className='title'>
                Add a Review
            </div>
            <div className="createPostPage">
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} autoComplete="off" >
                <Form className="formContainer" autoComplete="off" >    
                    <label id="lab">Country</label>

                    <ErrorMessage className="error" name="Country" component="span" ></ErrorMessage>
                    <div className="search">
                        <div className="search-Inputs" autoComplete="off">
                            <div class="oo" onChange={handleFilter}>
                                <Field ref={register} name='Country' type="text" placeholder='Search country' autoComplete="off" />    
                            </div>
                            
                        </div>
                        {filteredData.length !== 0 && (
                        <div className="data-Result">
                            {filteredData.map((value, key) => {
                                return(
                                    <p className="data-Item">
                                        {value.name}
                                    </p>     
                                )
                            })}
                        </div>
                        )}
                    </div>
                    <div className="k">
                        <div className='field'>
                            <label id="lab">University Name</label>
                            <ErrorMessage className="error" name="UniName" component="span" />
                            <div className="xs">
                                <Field id="inputCreatePost" name="UniName" placeholder="Enter the name of your university/school" />
                            </div>

                            <label id="lab">House name/Street address</label>
                            <ErrorMessage className="error" name="houseName" component="span" />
                            <div className="xs">
                                <Field ref={register} id="inputCreatePost" name="houseName" placeholder="Enter the name of your establishement" autoComplete="off"/>
                            </div>
                            
                            <label id="lab">City</label>
                            <ErrorMessage className="error" name="City" component="span" />
                            <div className="xs">
                                <Field ref={register} id="inputCreatePost" name="City" placeholder="Enter the city" />
                            </div>
                            <label id="lab">Rating</label>
                            
                            <ErrorMessage className="error" name="rating" component="span" />
                            <div className="xs">
                                <Field ref={register} component='select' id="inputCreatePost" placeholder="rating..." name="rating" >
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                </Field>
                            </div>
                            
                            <div className='uu'>
                                <label id="lab">
                                    Write something...
                                </label>
                                <InfoIcon onMouseOver={showInfo} onMouseOut={hideInfo} onClick={showInfo}></InfoIcon>
                                <div className='more-info'>
                                    Make sure to include useful information such as:<br/>
                                    - The amenities provided<br/>
                                    - When did you live there?<br/>
                                </div>
                            </div>
                            
                            <ErrorMessage className="error" name="postText" component="span" />
                            <Field className='xe' component='textarea' ref={register}  name="postText" placeholder="" />

                   
                            
                            <div id='butt'>When you click submit, your review will be submitted for approval.</div>
                            
                            <Button id="but" type="submit" variant="outlined">Submit</Button>
                        </div>
                    </div>
                    
                    
                </Form>
            </Formik>
        </div>
        
        </main>
        
        
    )
}

export default CreatePost