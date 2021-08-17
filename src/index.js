import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar';
import YTSearch from 'youtube-api-search'
import VideoList from './components/list';
import VideoDetail from './components/videodetail';
import _ from 'lodash'
const API_KEY='' //PUT API KEY HERE Google Youtube API V3

class App extends Component{
  
    constructor(props){
        super(props)
        this.state={
            searchTerm:'',
            selectedVideo:null,
            videos:[]
        }
        this.videoSearch()
    }

    videoSearch(term){
        YTSearch({key:API_KEY,term:term},(videos)=>{
            this.setState({
                videos:videos,
                selectedVideo:videos[0]   
            })

            });
            console.log(term)

    }


    render(){

        const videoSearch=_.debounce((term)=>this.videoSearch(term),400)
        return (
            <div>
                <SearchBar onSearch={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>

                <VideoList
                    videos={this.state.videos}
                    onVideoClicked={selectedVideo=>this.setState({selectedVideo})}
                />
            </div>
            );
    }
}

ReactDOM.render(<App/>,document.querySelector('.container'));