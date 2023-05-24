import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
	return (
		<div>
			<HeaderSection>
				<NavLeft>
					<Heading>UNI Resto Cafe</Heading>
				</NavLeft>
				<NavRight>
					<NavItems>
						<NavList>My Orders</NavList>
					</NavItems>
					<FontAwesomeIcon
						style={{ marginLeft: "12px" }}
						icon={faCartShopping}
					/>
					<CartCount>{props.value}</CartCount>
				</NavRight>
			</HeaderSection>
		</div>
	);
}

const HeaderSection = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: white;
	height: 60px;
`;
const NavLeft = styled.div``;
const Heading = styled.h1`
	margin-left: 8px;
	font-size: 16px;
	opacity: 0.7;
`;
const NavRight = styled.div`
	display: flex;
	align-items: center;
	margin-right: 12px;
	justify-content: space-around;
	position:relative;
`;
const NavItems = styled.ul`
	display: flex;
	justify-content: space-around;
`;
const NavList = styled.li`
	font-size: 12px;
`;
const NavIcons = styled.div``;
const CartImage = styled.i``;
const CartCount = styled.span`
	position: absolute;
	top: 11px;
	right: 0;
	background: red;
	border-radius: 50%;
	font-size: 10px;
	padding: 0px 3px;
	color: white;
`;
export default Header;
