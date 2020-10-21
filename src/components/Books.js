import React, { Component } from "react";
import axios from "axios";
import BookItem from "./BookItem";

export class Books extends Component {
    state = {
        books: [],
        isLoaded: false,
    };

    componentDidMount() {
        axios
            .get("http://localhost:8000/wp-json/wp/v2/books")
            .then((res) =>
                this.setState({
                    books: res.data,
                    isLoaded: true,
                })
            )
            .catch((err) => console.log(err));
    }

    render() {
        const { books, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <div class="row">
                    {books.map((book) => (
                        <BookItem book={book} key={book.id} />
                    ))}
                </div>
            );
        }
        return <h3>Loading...</h3>;
    }
    state = {
        books: [],
        isLoaded: false,
    };
}

export default Books;
