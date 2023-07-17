// import React, { Component } from 'react'
// export class NewsItems extends Component {
//     render() {
import React from 'react'

const NewsItems = (props) => {


    // this is class based component so we use this  and use( this.props ) destructuring ]to get props
    let { title, description, imgUrl, newsUrl, author, publishedAt, source } = props;       //destructuring concept we will apply  ((class base to function base)changing - this.props to props)
    //if this.props ek object so after destructing this.props object above will be pulled
    return (
        <div>
            <div className="card " style={{ width: "18rem", height: "30rem" }} >
                <img src={!imgUrl ? "https://images.mktw.net/im-814106/social" : imgUrl} className="card-img-top" alt="..." style={{ height: "160px" }} />
                {/* when any value is null so we put ternary operator if img is null place default one (applies to all cases) */}

                {/* adding badges at top of card to view the source of news */}
                <div className="card-body">
                    <span class=" badge rounded-pill bg-warning" >
                        {source}
                        {/* <span class="visually-hidden">unread messages</span> */}
                    </span>
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(publishedAt).toGMTString()} </small></p>
                    <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}
// }

export default NewsItems