import React, { useState, useEffect } from 'react'
import { Button, Card, Row, Col , Container } from 'react-bootstrap'
import newsListing from '../../data/news_listing.json'
import categories from '../../data/news_category-listing.json'
import Circles from '../../assets/img/cards-decor.png'
import Calendar from '../../assets/img/icons/calendar.png'
import Favorite from '../../assets/img/icons/favorite.png'
import Share from '../../assets/img/icons/share.png'
import './cards.scss'

const Cards = props => {

    const [visibility, setVisibility] = useState(newsListing);

    useEffect(() => {
        // Hold the category
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

        let selectedItems = newsListing.filter(item => {
            if (item.categoryID === valueId) {
                item.showOnHomepage = 'yes'
            }
            else if (item.categoryID !== valueId) {
                if (item.showOnHomepage === 'yes') {
                    item.showOnHomepage = 'no'
                }
                else {
                    item.showOnHomepage = 'no'
                }
            }
            return item;
        });

        // All Categories
        newsListing.filter(item => {
            if (visibility === 'All') {
                item.showOnHomepage = 'yes'
            }
            return item;
        })

        console.log(newsListing);

        // Set State
        setVisibility(newsListing);
        
    }, [visibility])

    return (
        <div>
            <section className="cards-sec">
                <div className="circles-shape">
                    <img src={Circles} alt={'Circles'} />
                </div>
                <Container>
                    <Row>
                        <div className="sec-head">
                            <p>Media</p>
                            <h1>Top News</h1>
                        </div>
                        <Col md={12}>
                            {/* Categories */}
                            <div className="categories-wrapper">
                                <Button variant="primary" value={'All'} onClick={(e) => setVisibility(e.target.value)}>All news</Button>
                                {
                                    categories.map(category => {
                                        return (
                                            <Button variant="primary" value={category.name} onClick={(e) => setVisibility(e.target.value)}>{category.name}</Button>
                                        )
                                    })
                                }
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        {
                            newsListing.map(item => {
                                return (
                                    (item.showOnHomepage === "yes" ? 
                                        <Col md={4} className="d-flex justify-content-center">
                                            {/* Cards */}
                                            <Card style={{ width: '90%' }}>
                                                <Card.Img variant="top" src={item.urlToImage} className="card-img" />
                                                <Card.Body>
                                                    <Card.Title>{item.title}</Card.Title>
                                                    <Card.Text className="published-date">
                                                        <div className="calendar-icon">
                                                            <img src={Calendar} alt={'Published Date'} />
                                                        </div>
                                                        <div>
                                                            <p className="mb-0">{item.publishedDate}</p>
                                                        </div>
                                                    </Card.Text>
                                                    {
                                                        categories.map(category => {
                                                            return (
                                                                (item.categoryID == category.id ? 
                                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                                        <div><p className="card-category">{category.name}</p></div>
                                                                        <div className="d-flex feature-icons">
                                                                            <div><img src={Favorite} alt={''} /></div>
                                                                            <div><img src={Share} alt={''} /></div>
                                                                        </div>
                                                                    </div>
                                                                : null)
                                                            )
                                                        })
                                                    }
                                                </Card.Body>
                                            </Card>
                                        </Col> : null
                                    )
                                );
                            })
                        }
                    </Row>

                    {/* View All Button */}
                    <Row>
                        <Col md={12}>
                            <div className="d-flex justify-content-center">
                                <Button variant="primary" className="main-btn" value={'All'} onClick={(e) => setVisibility(e.target.value)}>View All News</Button>
                            </div> 
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Cards