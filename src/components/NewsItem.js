import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, publishedAt, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <span classname="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>{source}
                    </span>
                    <img src={!imageUrl ? "https://www.coindesk.com/resizer/y4c1BLEK5yJGzg2KaKQS6J4Y7uE=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/IJ34EQNWQND5XOF67EUFS5ZSZ4.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h6 className="card-title">{title}</h6>
                        <p className="card-text">{description}...</p>
                        <p classname="card-text"><small classname="text-muted">By {author ? author : "Unknown"} on {new Date(publishedAt).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More..</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
