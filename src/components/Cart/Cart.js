import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    
    const totalSalary = cart.reduce((sum, salary) => sum + salary.salary, 0)
    return (
        <div>
            <p>Total salary: {totalSalary}</p>
        </div>
    );
};

export default Cart;