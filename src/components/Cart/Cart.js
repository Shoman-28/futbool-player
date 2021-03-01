import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    
    const totalSalary = cart.reduce((sum, salary) => sum + salary.salary, 0)
    return (
        <div>
            <h4>Total Amount: {totalSalary}</h4>
        </div>
    );
};

export default Cart;