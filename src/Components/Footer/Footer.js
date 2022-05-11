import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "yellow",
				textAlign: "center",
				marginTop: "-50px" }}>
		Learn Candle Stick
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">1.</FooterLink>

		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">1.</FooterLink>

		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>

		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
