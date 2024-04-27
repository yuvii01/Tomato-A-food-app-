import React, { createContext, useState } from 'react';


const Context = createContext();
const MainContext = (props) => {


    const [category, setCategory] = useState("");
    const [counter, setCounter] = useState(0);

    const food_list = [
        {
            _id: "1",
            name: "Greek salad",
            image: "/images/food_1.png",
            price: 12,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Salad"
        },
        {
            _id: "2",
            name: "Veg salad",
            image: "/images/food_2.png",
            price: 18,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Salad"
        },
        {
            _id: "3",
            name: "Clover Salad",
            image: "/images/food_3.png",
            price: 16,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Salad"
        },
        {
            _id: "4",
            name: "Chicken Salad",
            image: "/images/food_4.png",
            price: 24,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Salad"
        },
        {
            _id: "5",
            name: "Lasagna Rolls",
            image: "/images/food_5.png",
            price: 14,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Rolls"
        },
        {
            _id: "6",
            name: "Peri Peri Rolls",
            image: "/images/food_6.png",
            price: 12,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Rolls"
        },
        {
            _id: "7",
            name: "Chicken Rolls",
            image: "/images/food_7.png",
            price: 20,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Rolls"
        },
        {
            _id: "8",
            name: "Veg Rolls",
            image: "/images/food_8.png",
            price: 15,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Rolls"
        },
        {
            _id: "9",
            name: "Ripple Ice Cream",
            image: "/images/food_9.png",
            price: 14,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Deserts"
        },
        {
            _id: "10",
            name: "Fruit Ice Cream",
            image: "/images/food_10.png",
            price: 22,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Deserts"
        },
        {
            _id: "11",
            name: "Jar Ice Cream",
            image: "/images/food_11.png",
            price: 10,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Deserts"
        },
        {
            _id: "12",
            name: "Vanilla Ice Cream",
            image: "/images/food_12.png",
            price: 12,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Deserts"
        },
        {
            _id: "13",
            name: "Chicken Sandwich",
            image: "/images/food_13.png",
            price: 12,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Sandwich"
        },
        {
            _id: "14",
            name: "Vegan Sandwich",
            image: "/images/food_14.png",
            price: 18,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Sandwich"
        },
        {
            _id: "15",
            name: "Grilled Sandwich",
            image: "/images/food_15.png",
            price: 16,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Sandwich"
        },
        {
            _id: "16",
            name: "Bread Sandwich",
            image: "/images/food_16.png",
            price: 24,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Sandwich"
        },
        {
            _id: "17",
            name: "Cup Cake",
            image: "/images/food_17.png",
            price: 14,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Cake"
        },
        {
            _id: "18",
            name: "Vegan Cake",
            image: "/images/food_18.png",
            price: 12,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Cake"
        },
        {
            _id: "19",
            name: "Butterscotch Cake",
            image: "/images/food_19.png",
            price: 20,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Cake"
        },
        {
            _id: "20",
            name: "Sliced Cake",
            image: "/images/food_20.png",
            price: 15,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Cake"
        },
        {
            _id: "21",
            name: "Garlic Mushroom",
            image: "/images/food_21.png",
            price: 14,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Pure Veg"
        },
        {
            _id: "22",
            name: "Fried Cauliflower",
            image: "/images/food_22.png",
            price: 22,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Pure Veg"
        },
        {
            _id: "23",
            name: "Mix Veg Pulao",
            image: "/images/food_23.png",
            price: 10,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Pure Veg"
        },
        {
            _id: "24",
            name: "Rice Zucchini",
            image: "/images/food_24.png",
            price: 12,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Pure Veg"
        },
        {
            _id: "25",
            name: "Cheese Pasta",
            image: "/images/food_25.png",
            price: 12,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Pasta"
        },
        {
            _id: "26",
            name: "Tomato Pasta",
            image: "/images/food_26.png",
            price: 18,
            description: "Food provides essential nutrients for overall health",
            category: "Pasta"
        }, {
            _id: "27",
            name: "Creamy Pasta",
            image: "/images/food_27.png",
            price: 16,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Pasta"
        },
        {
            _id: "28",
            name: "Chicken Pasta",
            image: "/images/food_28.png",
            price: 24,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Pasta"
        },
        {
            _id: "29",
            name: "Butter Noodles",
            image: "/images/food_29.png",
            price: 14,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Noodles"
        },
        {
            _id: "30",
            name: "Veg Noodles",
            image: "/images/food_30.png",
            price: 12,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Noodles"
        },
        {
            _id: "31",
            name: "Somen Noodles",
            image: "/images/food_31.png",
            price: 20,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Noodles"
        },
        {
            _id: "32",
            name: "Cooked Noodles",
            image: "/images/food_32.png",
            price: 15,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Noodles"
        }
    ];    


    return (
        <Context.Provider value={{category, setCategory,food_list, counter, setCounter}}>

            {props.children}
        </Context.Provider>
    );
}

export {Context};

export default MainContext;
