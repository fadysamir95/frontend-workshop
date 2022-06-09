import React from 'react'
import newsListing from '../data/news_listing.json'
import categories from '../data/news_category-listing.json'
import { Card } from 'react-bootstrap';
import './Cards.css'

const Cards = props => {

    // const [newsListing, setnewsListing] = useState([]);

    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        newsListing.map(item => {
                            return (
                                <div className="col-md-4">
                                    <Card style={{ width: 'auto' }}>
                                        <Card.Img variant="top" src={item.urlToImage} />
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text>{item.publishedDate}</Card.Text>
                                            {
                                                categories.map(category => {
                                                    return (
                                                        (item.categoryID == category.id ? <div>{category.name}</div> : null)
                                                    )
                                                })
                                            }
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Cards
