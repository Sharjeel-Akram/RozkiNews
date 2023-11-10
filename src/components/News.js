import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import { PropTypes } from 'prop-types';

export class News extends Component { 
    static defaultProps = {
        country: 'us',
        pageSize: 6,
        category: 'science'
    }

    static propTypes ={
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async updateNews(){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2c964cb96985406a9a4b5ef985466c40&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({loading: true})
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResullts: parsedData.totalResullts,
            loading: false
        })
    }
    async componentDidMount(){
        this.updateNews();
    }
    handleNextClick = async()=> {
        this.setState({page: this.state.page + 1})
        this.updateNews()
    }

    handlePreviousClick = async()=> {
        this.setState({page: this.state.page - 1})
        this.updateNews()
    }

    
  render() {
    return (
        <div className='container my-3'>
            <h1 className="text-center" >
                RozkiNews - Top Headlines
            </h1>
            <div className="text-center">
                {this.state.loading && <Spinner/>}
            </div>
            <div className="row">
                {this.state.articles.map((element) => {
                    return <div className="col-md-4" key = {element.url}>
                        <NewsItem  title = {element.title?element.title.slice(0,45):""} description = {element.description?element.description.slice(0,88):""} imageUrl = {element.urlToImage} newsUrl = {element.url} author = {element.author} publishedAt = {element.publishedAt} source = {element.source.name}/>
                    </div>
                })}
        </div>
            <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResullts/this.props.pageSize))} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
      </div>
    )
  }
}

export default News
