import React from 'react'

// export class NewsItem extends Component {
    const NewsItem = (props) => {
        let { title, description, imageUrl, newsUrl, author, publishedAt, source } = props;
        return (
            <div className='my-3'>
                <div className="card" style={{ height: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                        <span className="badge rounded-pill bg-danger">{source}</span>
                    </div>
                    <img 
                        src={!imageUrl ? "default_image_url_here" : imageUrl} 
                        className="card-img-top" 
                        alt="..." 
                        style={{ height: '200px', objectFit: 'cover' }} 
                    />
                    <div className="card-body">
                        <h6 className="card-title" style={{ height: '3em', overflow: 'hidden' }}>{title}</h6>
                        <p className="card-text" style={{ height: '4.5em', overflow: 'hidden' }}>{description}...</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(publishedAt).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More..</a>
                    </div>
                </div>
            </div>
        )
    }
    
    export default NewsItem
    
