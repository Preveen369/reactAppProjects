import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
    constructor() {
        super();
        this.state = {
            likes: 0,
            dislikes: 0,
            totalRatings: 0,
            handleLike: () => {
                this.setState((prevState) => ({
                    likes: prevState.likes + 1,
                    totalRatings: prevState.totalRatings + 1
                }));
            },
            handleDislike: () => {
                this.setState((prevState) => ({
                    dislikes: prevState.dislikes + 1,
                    totalRatings: prevState.totalRatings + 1
                }));
            }

        };
    }
    render() {
        return (
            <>
                <h1>Text Content Rating</h1>
                <div className='content-rating'>
                    <p>The samurai (侍) were a prominent warrior class in Japan, originally serving the imperial court and provincial lords
                        from the late 12th century. They played a significant political role until their abolition in the late 19th century
                        during the Meiji Restoration. Samurai were not just warriors; they embodied a unique code of conduct known as Bushido. </p>
                    <div className='rating-buttons'>
                        <button className="like-button" onClick={this.state.handleLike}>
                            Like ({this.state.likes})
                        </button>
                        <button className="dislike-button" onClick={this.state.handleDislike}>
                            Dislike ({this.state.dislikes})
                        </button>
                        <p>Total Ratings: {this.state.totalRatings}</p>
                    </div>
                </div>
            </>


        );
    }
}

export default ContentRating;
