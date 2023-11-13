import React from 'react'

// export class NewsItem extends Component {
const NewsItem = (props) =>{
    // render() {
        let { title, description, imageUrl, newsUrl, author, publishedAt, source } = props;
        return (
            <div className='my-3'>
                <div className="card">
                    <div  style={{display: 'flex', justifyContent: 'flex-end', position:'absolute', right: '0'}}>
                    <span className="badge rounded-pill bg-danger">{source}
                    </span>
                    </div>
                    <img src={!imageUrl ? "https://www.coindesk.com/resizer/y4c1BLEK5yJGzg2KaKQS6J4Y7uE=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/IJ34EQNWQND5XOF67EUFS5ZSZ4.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h6 className="card-title">{title}</h6>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(publishedAt).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More..</a>
                    </div>
                </div>
            </div>
        )
    }

export default NewsItem
