import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar';
import YTSearch from 'youtube-api-search'
import VideoList from './components/list';
import VideoDetail from './components/videodetail';
const API_KEY='AIzaSyChzfvLpzfzDKPxeIHoEOhx0Z5U0Ei4c4U'

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
        return (
            <div>
                <SearchBar onSearch={searchTerm=>this.videoSearch(searchTerm)}/>
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