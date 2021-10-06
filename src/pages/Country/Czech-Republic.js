import '../Countries.css'
import React from 'react';
import axios from "axios";
import {useEffect, useState} from 'react';
import SearchBar from '../../components/SearchBar';
import DATA from '../../data/countries.json'
import Rating from '@material-ui/lab/Rating';
import {useHistory} from 'react-router-dom'


import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import CircularProgress from '@material-ui/core/CircularProgress';
import blue from '@material-ui/core/colors/blue';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

function Czech_Republic() {
    const [listOfPosts, setListOfPosts] = useState([]);


    const [loading, setLoading] = useState(false);

    let history = useHistory()

    useEffect(() => {
      axios.get("http://localhost:2000/allReviews").then((response)=>{
        setListOfPosts(response.data)
        setLoading(true)
      })
    }, [])

    const [checked, setChecked] = useState("houseName")
    const list = listOfPosts
    for(var i=0;i<list.length;i++){
        delete list[i].updatedAt
    }
    const posts = []
    for(var i = 0; i<listOfPosts.length; i++){
        if (posts.includes(list[i]) === false){
            posts.push(list[i])
        }
    }

    var test = []
    var test1 = []
    var test3 = []

    for(var i=0; i<posts.length; i++){
        test.push([posts[i].houseName, posts[i].id, posts[i].Country, posts[i].City, posts[i].id])
    }
    for(var i=0; i<test.length; i++){
        if(test[i] in test1){
            console.log('')
        }else{
            test1.push(test[i])
            
        }
    }



    for(var i=0; i<test1.length; i++){ 
        if(test3.some(e => e.houseName == test[i][0])){
            delete test1[i]
        }else{
            test3.push({'houseName':test1[i][0], 'Country':test1[i][2], 'City':test1[i][3], 'id':test[i][4], 'ratLen': [], 'rating' : []})
        }
    }
    
    for(i=0;i<test3.length; i++){   
        var r = []
        var y = 0
        for(var j=0;j<posts.length;j++){
            if(test3[i].houseName.toLowerCase() === posts[j].houseName.toLowerCase()){
                r.push(posts[j].rating)
            }
        }
        for(var x=0;x<r.length;x++){
            y+=r[x]
        }
        test3[i].ratLen = r
        test3[i].rating = y
    }


    const handleChange = (e) => {
        setChecked(e.target.value)

            
    }

    var g = 0
    for(i=0; i<posts.length;i++){
        if(posts[i].Country.toLowerCase() === 'czech-republic' || posts[i].Country.toLowerCase() === 'czech republic'){
        g+=1
        }
    }

    

    if(checked === 'houseName'){
        test3.sort((a,b)=>a.houseName.localeCompare(b.houseName))
        
        
    }else if(checked === 'rating'){
        test3.sort((a,b)=>b.rating/b.ratLen.length - a.rating/a.ratLen.length )
    }else{
        test3.sort((a,b)=>b.ratLen.length - a.ratLen.length )
    }


    const theme = createTheme({
        palette: {
            primary: {main: blue[300]}, 
        },
    });

    
    
    
    
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
            <div className="mainPage">
                <div className="mainPage-body">
                <div className="filter">
                    
                    <div className="filterTitle">
                        <b>CZECH-REPUBLIC</b>
                    </div>
                    <div className="numReviews">{g} student reviews in this country</div>
                    <div className="uwu">Sort</div>
                    <ThemeProvider theme={theme}>
                        <div className="sort1">
                            <FormControl component="fieldset">
                            <RadioGroup aria-label="gender" name="gender1" >
                                
                                    <FormControlLabel className="q" aria-disabled='false' name='ab' value="houseName" checked={checked === 'houseName'} control={<Radio color='primary' />} label="By Name" onChange={handleChange} />
                                    <FormControlLabel className="q" aria-disabled='false' name='ab' value="revs" checked={checked === 'revs'} control={<Radio color='primary' />} label="By Most Reviews" onChange={handleChange}/>
                                    <FormControlLabel className="q" aria-disabled='false' name='ab' value="rating" checked={checked === 'rating'} control={<Radio color='primary'/>} label="By Highest Rating" onChange={handleChange}/>
                                
                            </RadioGroup>
                            </FormControl>
                        </div>
                    </ThemeProvider>
                </div>
                    <div className="Results">      
                        
                        {loading ? test3.map((value, key) => {


                            let r = 0
                            
                            r = value.rating/value.ratLen.length
                            r = r.toFixed(1)
                                if(value.Country.toLowerCase() === 'czech-republic' || value.Country.toLowerCase() === 'czech republic'){
                                    return (
                                        <div className="post" onClick={() => {history.push(`/post/${value.id}`)}}>
                                            <div className="postInfo">
                                                <div className="HouseName"> {value.houseName} </div>
                                                <div className="location">  <div>{value.City}</div>, <div class="uttID"  > {value.Country.toLowerCase()}</div>  </div>
                                                
                                            </div>
                                            <div className="rating">
                                            <ThemeProvider theme={theme}>
                                                <div className="stars">
                                                    <Box component="fieldset" mb={2} borderColor="transparent">
                                                        <Typography className="int" component="legend"> {r} </Typography>
                                                        <Rating className='w' name="read-only" value={r} readOnly />
                                                        <div> {value.ratLen.length} reviews </div>
                                                    </Box>
                                                </div>
                                            </ThemeProvider>
                                              
                                            </div>
                                        </div>
                                    );
                                    
                                }else{
                                    return null
                                }
                        }): <Box><CircularProgress></CircularProgress></Box>}
                        <div id='f'>Can't find your room? <a href="/createpost">Add it here!</a></div>
                    </div>
                    
                    
                </div>
            </div>
            
            
        </main>
        
    )
}

export default Czech_Republic
