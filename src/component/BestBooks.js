import React from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

 class Books extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            BestBooksData: []
        }

    }


    
    componentDidMount = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/books`).then((bestBooksRes) => {

            this.setState({ BestBooksData: bestBooksRes.data });
        }).catch(error => alert(error.message));
    }
    render() {
        return (
            <div>
                {
                    this.state.BestBooksData.length > 0 &&
                    <>
                        {
                            this.state.BestBooksData.map(book => {
                                return (
                                    <>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Body>
                                                <Card.Title>{book.title}</Card.Title>
                                                <Card.Text>
                                                    {book.description}
                                                </Card.Text>
                                                <Card.Text>
                                                    {book.status}
                                                </Card.Text>
                                                <Card.Text>
                                                    {book.email}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </>
                                )
                            })
                        }
                    </>
                }
            </div>
        )
    }
}
export default Books
