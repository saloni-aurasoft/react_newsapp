import PropTypes from "prop-types";
import React, {Component} from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        country: "us",
        pageSize: 8,
        category: "general"
    };

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    };

    constructor(props) { // constructor runs when any class object created
        super(props);
        console.log("hello i am a constructor");
        this.state = {
            articles: [], // articles array will return empty
            loading: true, // we want to show loading then we will make this true
            page: 1, // initial page no.=1
            totalResults: 0
        }; // in this constructor we used state to use the data dynamically
        document.title = `${
            this.props.category
        }-NewsMonkey daily newsShot`; // title will display
    }
    // we can either use this.state or this.props
    // it is a life cycle method part which runs after render method
    // fetch data from api

    // create a function which can be used on click prev and next button both and in component did mount

    async updateNews() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${
            this.props.country
        }&category=${
            this.props.category
        }&apiKey=${
            this.props.apiKey
        }&page=${
            this.state.page
        }&pageSize=${
            this.props.pageSize
        }`;
        this.setState({loading: true});
        let data = await fetch(url);
        this.props.setProgress(40);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false});
        this.props.setProgress(100);
    }

    async componentDidMount() {
        // an async function can wait until some promises are resolved
        // console.log("cdm");
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1419b05616884ddc8125f28483d0a0c3&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        // let data = await fetch(url);
        // // we will use fetchAPI- takes url and returns promises
        // // console.log(data)  //ex- this is also a promise
        // let parsedData = await data.json()
        // // console.log(parsedData);
        // this.setState({
        //     articles: parsedData.articles,
        //     totalResults: parsedData.totalResults,
        //     loading: false
        // })

        this.updateNews();
    }

    // creating function to handle previous and next click to page
    onPreviousClick = async () => {
        // console.log("previous")
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1419b05616884ddc8125f28483d0a0c3&page=${this.state.page - 1}&pageSize=10`;
        // this.setState({ loading: true });
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // // console.log(parsedData);
        // this.setState({
        //     articles: parsedData.articles,
        // })
        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parsedData.articles,
        //     loading: false
        // })

        this.setState({
            page: this.state.page - 1
        });
        this.updateNews();
    };
    // onnextclick
    onNextClick = async () => {
        // console.log("next")
        // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 10))) {   //we can change if else to if(! )
        //     //if this condition is getting true we will disable the next button
        //     this.setState({ loading: true })  //when api get call- this will true
        //     // }
        //     // else {
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1419b05616884ddc8125f28483d0a0c3&page=${this.state.page + 1}&pageSize=10`;
        //     this.setState({ loading: true });
        //     let data = await fetch(url);
        //     let parsedData = await data.json()
        //     // console.log(parsedData);
        //     this.setState({
        //         page: this.state.page + 1,
        //         articles: parsedData.articles,
        //         loading: false
        //     })
        // }
        this.setState({
            page: this.state.page + 1
        });
        this.updateNews();
    };

    // fetchMore () to fetch data on scroll
    fetchMoreData = async () => {
        this.setState({
            page: this.state.page + 1
        });
        const url = `https://newsapi.org/v2/top-headlines?country=${
            this.props.country
        }&category=${
            this.props.category
        }&apiKey=${
            this.props.apiKey
        }&page=${
            this.state.page
        }&pageSize=${
            this.props.pageSize
        }`;
        // this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles), // concatinating articles
            totalResults: parsedData.totalResults,
            loading: false
        });
    };

    render() { // console.log("render")
        return (
            <div className="container my-5 ">
                <h3 className="text-center">NewsMonkey-Tops Head-Lines Of The Day</h3>
                {
                this.state.loading && <Spinner/>
            }
                {" "}
                {/**logic- if loading -true show spinner else no }
                {/* adding infinite scroll bar on place of spinner*/}
                <InfiniteScroll dataLength={
                        this.state.articles.length
                    }
                    next={
                        this.fetchMoreData
                    }
                    hasMore={
                        this.state.articles.length !== this.state.totalResults
                    }
                    loader={<Spinner/>}>
                    <div className="container">
                        <div className="row">
                            {/*we will iterate articles through this.state.article */}
                            {/* we will use state and map to fetch element from array in jsx */}
                            {/* replacing-  !this.state.loading && */}
                            {
                            this.state.articles.map((element) => {
                                { /* when this.state.loading not true show the content*/
                                }
                                return (
                                    <div className="col-md-4 d-flex justify-content-center pb-5 "
                                        key={
                                            element.url
                                    }>
                                        <NewsItems title={
                                                element.title ? element.title.slice(0, 50) : " "
                                            }
                                            description={
                                                element.description ? element.description.slice(0, 88) : ""
                                            }
                                            imgUrl={
                                                element.urlToImage
                                            }
                                            newsUrl={
                                                element.url
                                            }
                                            author={
                                                element.author
                                            }
                                            publishedAt={
                                                element.publishedAt
                                            }
                                            source={
                                                element.source.name
                                            }/> {/* creating newsitem inside news component */} </div>
                                );
                            })
                        } </div>
                    </div>
                </InfiniteScroll>
                {/*  * to manage pages we create buttons, create function on both back and forward  */}
                {/* <div className='container d-flex justify-content-between'>
                    <button type="button" className="btn btn-dark" onClick={this.onPreviousClick} disabled={this.state.page <= 1}>&larr;Previous</button>       */}
                {
                /**when no previous page - disable button */
                /** &larr and &rarr used for arrows */
            }
                {/* <button type="button" className="btn btn-dark" onClick={this.onNextClick} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 10)}>Next &rarr;</button>
                </div> */} </div>
        );
    }
}

export default News;
