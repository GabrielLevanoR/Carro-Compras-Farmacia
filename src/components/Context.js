import React, { Component } from 'react';

export const DataContext = React.createContext();

export class DataProvider extends Component {


    state = {
        products: [
            {
                "_id": "1",
                "title": "Simvastatina",
                "src": "https://s.cornershopapp.com/product-images/3887229.jpg?versionId=6Yh.00wcHOU_s1D2zZxtAxYs9ocPb_brhttps://www.upsieutoc.com/images/2020/06/27/img1.jpg",
                "description": "Lorem ipsum dolor sit amet",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet purus a orci laoreet tincidunt a eget eros. Mauris sit amet tortor nisi. Fusce rutrum iaculis odio sit amet semper.",
                "price": 23,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "Aspirina",
                "src": "https://www.farmalisto.com.pe/10952-large_default/aspirina-100mg-caja-con-100-tabletas.jpg",
                "description": "Lorem ipsum dolor sit amet",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet purus a orci laoreet tincidunt a eget eros. Mauris sit amet tortor nisi. Fusce rutrum iaculis odio sit amet semper..",
                "price": 19,
                "colors": ["red", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "Omeprazol",
                "src": "https://s.cornershopapp.com/product-images/3876494.jpg?versionId=dyu1M0CzdH.2p.NgS4iguL78DDrIG101",
                "description": "Lorem ipsum dolor sit amet",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet purus a orci laoreet tincidunt a eget eros. Mauris sit amet tortor nisi. Fusce rutrum iaculis odio sit amet semper..",
                "price": 50,
                "colors": ["lightblue", "white", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "Lexotiroxina sódica",
                "src": "https://s.cornershopapp.com/product-images/1096702.png?versionId=qBrNNfDijHHM_3oEyqMkb48yVUwkcTQE",
                "description": "Lorem ipsum dolor sit amet",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet purus a orci laoreet tincidunt a eget eros. Mauris sit amet tortor nisi. Fusce rutrum iaculis odio sit amet semper..",
                "price": 15,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "Ramipril",
                "src": "https://prixz.com/salud/wp-content/uploads/2020/10/Ramipril-%C2%BFQue-es-y-para-que-sirve-.jpg",
                "description": "Lorem ipsum dolor sit amet",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet purus a orci laoreet tincidunt a eget eros. Mauris sit amet tortor nisi. Fusce rutrum iaculis odio sit amet semper.",
                "price": 10,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "Amlodipina",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img6.jpg",
                "description": "Lorem ipsum dolor sit amet",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet purus a orci laoreet tincidunt a eget eros. Mauris sit amet tortor nisi. Fusce rutrum iaculis odio sit amet semper.",
                "price": 17,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            }
        ]

    };
    render() {
        const { products } = this.state;
        return (
            <DataContext.Provider value={{ products }}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}
