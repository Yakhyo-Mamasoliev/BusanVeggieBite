/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Box, Container, Stack, Grid } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import Typography from "@mui/material/Typography"; // Import from MUI core instead
import { CssVarsProvider } from "@mui/joy/styles";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "../../../components/divider";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveNewDishes } from "./selector";
import { serverApi } from "../../../lib/config";
import { Product } from "../../../lib/types/product";
import { ProductCollection } from "../../../lib/enums/product.enum";

//** REDUX SLICE & SELECTOR */
const newDishesRetriever = createSelector(retrieveNewDishes, (newDishes) => ({
	newDishes,
}));

export default function NewDishes() {
	const { newDishes } = useSelector(newDishesRetriever);

	console.log("newDishes", newDishes);

	return (
		<div className="new-products-frame" style={{ padding: "2rem 0" }}>
			<Container>
				<Stack className="main" spacing={4}>
					<Box
						className="category-title"
						style={{
							fontSize: "1.5rem",
							fontWeight: "bold",
							textAlign: "center",
						}}
					>
						Our New Meals
					</Box>
					<CssVarsProvider>
						<Grid container spacing={4} justifyContent="center">
							{newDishes.length > 0 ? (
								newDishes.slice(0, 3).map((product: Product) => {
									const imagePath = `${serverApi}/${product.productImages[0]}`;
									const sizeVolume =
										product.productCollection === ProductCollection.PIZZA
											? `${product.productVolume} SIZE`
											: `${product.productSize} SIZE`;
									return (
										<Grid item xs={12} sm={6} md={4} key={product._id}>
											<Card
												variant="outlined"
												className="card"
												sx={{
													borderRadius: "16px",
													boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
													"&:hover": {
														boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
														transform: "scale(1.03)",
														transition: "transform 0.3s, box-shadow 0.3s",
													},
												}}
											>
												<CardOverflow>
													<div
														className="product-sale"
														style={{
															backgroundColor: "#ff5722",
															color: "#fff",
															padding: "0.5rem",
															borderRadius: "8px",
															position: "absolute",
															top: "16px",
															left: "16px",
														}}
													>
														{sizeVolume}
													</div>
													<AspectRatio ratio="1">
														<img
															src={imagePath}
															alt={product.productName}
															style={{ borderRadius: "16px 16px 0 0" }}
														/>
													</AspectRatio>
												</CardOverflow>

												<CardOverflow
													variant="soft"
													className="product-detail"
													style={{ padding: "1rem" }}
												>
													<Stack className="info" spacing={1}>
														<Typography
															className="title"
															variant="h6" // Use variant from Material UI
															style={{ fontWeight: "600" }}
														>
															{product.productName}
														</Typography>
														<Divider width="2" height="24" bg="#d9d9d9" />
														<Typography
															className="price"
															variant="body1" // Use variant from Material UI
															style={{
																fontSize: "1.5rem",
																color: "#4CAF50",
																fontWeight: "bold",
															}}
														>
															₩{product.productPrice}
														</Typography>
													</Stack>
												</CardOverflow>
											</Card>
										</Grid>
									);
								})
							) : (
								<Box
									className="no-data"
									style={{
										textAlign: "center",
										fontSize: "3 rem",
										color: "#757575",
									}}
								>
									New products are not available!
								</Box>
							)}
						</Grid>
					</CssVarsProvider>
				</Stack>
			</Container>
		</div>
	);
}
