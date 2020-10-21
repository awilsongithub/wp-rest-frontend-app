import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export class BookItem extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        imgUrl: "",
        author: "",
        isLoaded: false,
    };

    static propTypes = {
        book: PropTypes.object.isRequired,
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        const { featured_media, author } = this.props.book;
        const getImgUrl = axios.get(
            `http://localhost:8000/wp-json/wp/v2/media/${featured_media}`
        );
        const getAuthor = axios.get(
            `http://localhost:8000/wp-json/wp/v2/users/${author}`
        );
        Promise.all([getImgUrl, getAuthor]).then((res) => {
            this.setState({
                imgUrl: res[0].data.media_details.sizes.full.source_url,
                author: res[1].data.name,
                isLoaded: true,
            });
            console.log(res);
            console.log(this.state.imgUrl);
        });
    };

    render() {
        const { title, excerpt } = this.props.book;
        const { imgUrl, author, isLoaded } = this.state;

        if (isLoaded) {
            return (
                <div class="col col-md-6 col-lg-4">
                    <div class="card">
                        <img
                            class="card-img-top"
                            src={imgUrl}
                            alt="Card image cap"
                        />

                        <div class="card-body">
                            <h5 class="card-title text-truncate">
                                {title.rendered}
                            </h5>
                            <h6 class="card-subtitle mb-2 text-muted text-truncate">
                                by {author}
                            </h6>

                            <div
                                class="card-text max-h-50px mb-3"
                                dangerouslySetInnerHTML={{
                                    __html: excerpt.rendered,
                                }}
                            ></div>
                            <a href="#" class="btn btn-primary">
                                Go somewhere
                            </a>
                        </div>
                    </div>
                </div>
            );
        }
        return null;
    }
}

export default BookItem;
