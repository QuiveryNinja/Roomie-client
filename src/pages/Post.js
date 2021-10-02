import '../pages/post.css'
import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import SearchBar from '../components/SearchBar';
import DATA from '../data/countries.json'
import Rating from '@material-ui/lab/Rating';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import CircularProgress from '@material-ui/core/CircularProgress';
import blue from '@material-ui/core/colors/blue';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';



function Post() {

    let {id} = useParams();
    const [postObject, setPostObject] = useState({houseName:''})

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:2000/allReviews/byId/${id}`).then((response)=>{
            setPostObject(response.data)
        })
    }, [id])
    console.log('poop')
    
    const theme = createTheme({
        palette: {
            primary: {main: blue[300]}, 
        },
    });


    useEffect(() => {
        axios.get("http://localhost:2000/allReviews").then((response)=>{
          setListOfPosts(response.data)
          setLoading(true)
        })
      }, [])

    const [listOfPosts, setListOfPosts] = useState([]);

    const list = listOfPosts
    const posts = []
    for(var i = 0; i<listOfPosts.length; i++){
        posts.push(list[i])
    }

    const [checked, setChecked] = useState("UniName")

    const handleChange = (e) => {
        setChecked(e.target.value)

            
    }
    if(checked === 'UniName'){
        posts.sort((a,b)=>a.UniName.localeCompare(b.UniName))
        console.log(posts)
        
        
    }else if(checked === 'rating'){
        posts.sort((a,b)=>b.rating - a.rating)
    }



    return (
        <main>
        
        <div className="header">
            <div className="header-logo">
                <a href='/'>Roomie</a> 
            </div>
            <div className="header-search-bar">
                <form class="search-wrapper">
                    <SearchBar placeholder="Search your country" data={DATA} />
                </form>
            </div>
        </div>
            
        <div className="mainPage-body">
        <div className="filter">
                    
                    <div className="filterTitle">
                        <b>{postObject.houseName.toUpperCase()}</b>
                    </div>
                    <div className="uwu">Sort</div>
                    <ThemeProvider theme={theme}>
                        <div className="sort1">
                            <FormControl component="fieldset">
                            <RadioGroup aria-label="gender" name="gender1" >
                                
                                    <FormControlLabel className="q" aria-disabled='false' name='ab' value="UniName" checked={checked === 'UniName'} control={<Radio color='primary' />} label="University Name" onChange={handleChange} />
                                    <FormControlLabel className="q" aria-disabled='false' name='ab' value="rating" checked={checked === 'rating'} control={<Radio color='primary'/>} label="By Highest rating" onChange={handleChange}/>
                                
                            </RadioGroup>
                            </FormControl>
                        </div>
                    </ThemeProvider>
                    <div className="uwu">Filter</div>
                </div>       

            <div className='Results'>
            
            {loading ? posts.map((value, key) => {
                    if(value.houseName === postObject.houseName){
                        return(
                            
                            <div className="post1">
                                <div className='jh'>
                                    <div className="postInfo1">
                                        <div className="UniName"> {value.UniName} </div>
                                        <div className="location">  <div>{value.City}</div>, <div class="uttID"  > {value.Country}</div>  </div>
                                        
                                    </div>
                                    <div className="rating">
                                    <ThemeProvider theme={theme}>
                                        <div className="stars">
                                            <Box component="fieldset" mb={2} borderColor="transparent">
                                                <Typography className="int" component="legend"> {value.rating} </Typography>
                                                <Rating name="read-only" value={value.rating} readOnly />
                                            </Box>
                                        </div>
                                    </ThemeProvider>
                                    
                                    </div>
                                </div>
                                
                                <div className='text'> {value.postText} </div>
                                <hr></hr>
                            </div>
                        );
                        
                    }else{
                        return null
                    }
                }
                
            ): <Box><CircularProgress></CircularProgress></Box>}
             </div>
             
            </div>
            
            
        
    </main>
        
    )
}

export default Post
