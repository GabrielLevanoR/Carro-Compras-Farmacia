import React, { Component } from 'react'

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
        ],
        cart: [],
        total: 0
        
    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


