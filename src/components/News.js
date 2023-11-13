import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import { PropTypes } from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


// export class News extends Component {
// For Class Components

// static defaultProps = {
//     country: 'us',
//     pageSize: 6,
//     category: 'science'
// }

// static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
// }

// constructor(props) {
//     super(props);
//     this.state = {
//         articles: [],
//         loading: true,
//         page: 1,
//         totalResullts: 0
//     }
//     document.title = `RozkiNews - ${this.capitalizeFirstLetter(props.category)}`
// }

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResullts, setTotalResullts] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        // this.setState({ loading: true })
        setLoading(true)
        let data = await fetch(url)
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(50);
        // this.setState({
        //     articles: parsedData.articles,
        //     totalResullts: parsedData.totalResullts,
        //     loading: false
        // })
        setArticles(parsedData.articles)
        setTotalResullts(parsedData.totalResullts)
        setLoading(false)

        props.setProgress(100);
    }
    // async componentDidMount() {
    //     this.updateNews();
    useEffect(() => {
        document.title = `RozkiNews - ${capitalizeFirstLetter(props.category)}`
        updateNews()
        // eslint-disable-next-line
    }, [])
    // handleNextClick = async () => {
    //     this.setState({ page: page + 1 })
    //     this.updateNews()
    // }

    // handlePreviousClick = async () => {
    //     this.setState({ page: page - 1 })
    //     this.updateNews()
    // }
    const fetchMoreData = async () => {
        // this.setState({
        //     page: page + 1
        // })
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2c964cb96985406a9a4b5ef985466c40&page=${page + 1}&pageSize=${props.pageSize}`
        setPage(page+1)
        let data = await fetch(url)
        let parsedData = await data.json()
        // this.setState({
        //     articles: articles.concat(parsedData.articles),
        //     totalResullts: parsedData.totalResullts,
        // })
        setArticles(articles.concat(parsedData.articles))
        setTotalResullts(parsedData.totalResullts)
    };

    return (
        <>
            <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px'}} >
                Top {capitalizeFirstLetter(props.category)} Headlines
            </h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResullts}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between">
                    <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                    <button disabled={(page + 1 > Math.ceil(totalResullts / props.pageSize))} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
        </>
    )
}


News.defaultProps = {
    country: 'us',
    pageSize: 6,
    category: 'science'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}
export default News
