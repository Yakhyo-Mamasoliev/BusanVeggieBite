import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Divider from "../../../components/divider";
export default function Statistics() {
	return (
		<div className="static-frame">
			<Container>
				<Stack className="info">
					<Stack className="static-box">
						<Box className="static-num">60</Box>
						<Box className="static-text">Restaurants</Box>
					</Stack>
					<Divider height="64" width="2" bg="#E3C08D" />
					<Stack className="static-box">
						<Box className="static-num">33</Box>
						<Box className="static-text">Experience</Box>
					</Stack>
					<Divider height="64" width="2" bg="#E3C08D" />
					<Stack className="static-box">
						<Box className="static-num">17+</Box>
						<Box className="static-text">Menu</Box>
					</Stack>
					<Divider height="64" width="2" bg="#E3C08D" />
					<Stack className="static-box">
						<Box className="static-num">50M+</Box>
						<Box className="static-text">Clients</Box>
					</Stack>
				</Stack>
			</Container>
		</div>
	);
}
