import React, { useState, useEffect } from 'react'
import newsListing from '../data/news_listing.json'
import categories from '../data/news_category-listing.json'
// import * as newsListing from '../data/news_listing.json'
import { Button, Card } from 'react-bootstrap';
import './Cards.css'

const Cards = props => {

    const [visibility, setVisibility] = useState([]);

    useEffect(() => {

        let selectedCategory = categories.filter(category => {
            if (category.name === visibility) {
                return category
            }
        });

        let currentCategoryId = selectedCategory.map(category => {
            let id = category.id;
            return id;
        })

        let valueId = currentCategoryId.join();
        console.log(valueId);

        let selectedItems = newsListing.filter(item => {
           if (item.categoryID === valueId) {
                item.showOnHomepage = 'yes'
            }
            else if (item.categoryID !== valueId) {
                if (item.categoryID === 'yes') {
                    item.showOnHomepage = 'no'
                }
                else {
                    item.showOnHomepage = 'no'
                } 
            }
        });
        console.log(selectedItems);

    }, [visibility])

    return (
        <div>
            <div className="container">

                <div className="row">
                    <div className="col-md-12">
                        {
                            categories.map(category => {
                                return (
                                    <Button variant="primary" value={category.name} onClick={(e) => setVisibility(e.target.value)}>{category.name}</Button>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="row">
                    {
                        newsListing.map(item => {
                            return (
                                (item.showOnHomepage == "yes" ? 
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
                                    </div> : console.log()
                                )
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Cards
