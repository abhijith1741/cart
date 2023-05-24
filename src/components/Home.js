import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Slider from "react-slick";
import Header from "../includes/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
	const [restaurants, setRestaurants] = useState([]);
	const [selectedRestaurant, setSelectedRestaurant] = useState();
	const [selectedCategory, setSelectedCategory] = useState([]);
	const [cart, setCart] = useState([]);
	let value = cart.length;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await axios(
					"https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099"
				);
				setRestaurants(result.data);
				setSelectedRestaurant(result.data[0]);
				setSelectedCategory(result.data[0].table_menu_list[0]);
				console.log(selectedCategory);
			} catch (error) {
				console.error("Error fetching data: ", error);
			}
		};

		fetchData();
	}, []);

	// let cartIncrement = (id) => {
	//   let new_item = selectedCategory.category_dishes.filter((item) => {
	//     return item.dish_id === id
	//   })
	//   setCart(cart => [...cart,new_item])
	//   console.log("clicked",cart)
	// }
	let cartIncrement = (id) => {
		let new_item = selectedCategory.category_dishes.find(
			(item) => item.dish_id === id
		);
		setCart((cart) => [...cart, new_item]);
	};

	let cartDecrement = (id) => {
		let updatedCart = [...cart];
		const index = updatedCart.findIndex((item) => item.dish_id === id);
		if (index !== -1) {
			updatedCart.splice(index, 1);
			setCart(updatedCart);
		}
	};

	const handleSelectCategory = (category) => {
		setSelectedCategory(category);
	};

	if (!selectedRestaurant) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<Header value={value} />
			<div className="category">
				<ul>
						{selectedRestaurant.table_menu_list.map((category) => (
							<li
								className="categoryList"
								key={category.menu_category_id}
								onClick={() => handleSelectCategory(category)}
							>
								<p>{category.menu_category}</p>
							</li>
						))}
				</ul>

				{selectedCategory && (
					<div>
						{selectedCategory.category_dishes.map((dish, index) => (
							<div className="item">
								<div key={index} id="dishes">
									<div className="top">
										<h3>{dish.dish_name}</h3>
										<p className="inr">
											{dish.dish_currency} {dish.dish_price}
										</p>
										<p>{dish.dish_description}</p>
										<div className="button">
											<button
												className="minus"
												onClick={() => cartDecrement(dish.dish_id)}
											>
												-
											</button>
											<button className="zero">
												{
													cart.filter((item) => item.dish_id === dish.dish_id)
														.length
												}
											</button>
											<button
												className="plus"
												onClick={() => cartIncrement(dish.dish_id)}
											>
												+
											</button>
										</div>
									</div>
									<div className="bottom">
										<a>
											<img src={dish.dish_image} alt={dish.dish_name} />
										</a>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</>
	);
}

export default Home;
