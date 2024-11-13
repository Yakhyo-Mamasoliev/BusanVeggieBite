import React from "react";
import { Box, Stack } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import { useSelector } from "react-redux";
import { Order, OrderItem } from "../../../lib/types/order";
import { Product } from "../../../lib/types/product";
import { serverApi } from "../../../lib/config";
import { createSelector } from "@reduxjs/toolkit";
import { retrieveFinishedOrders } from "./selector";

/** REDUX SLICE & SELECTOR */
const finishedOrdersRetriever = createSelector(
	retrieveFinishedOrders,
	(finishedOrders) => ({ finishedOrders })
);

export default function FinishedOrders() {
	const { finishedOrders } = useSelector(finishedOrdersRetriever);

	return (
		<TabPanel value={"3"}>
			<Stack>
				{finishedOrders?.map((order: Order) => {
					const totalProductPrice = order.orderItems.reduce((total, item) => {
						return total + item.itemPrice * item.itemQuantity;
					}, 0);

					const deliveryFee = totalProductPrice < 30000 ? 3000 : 0;

					return (
						<Box key={order._id} className={"order-main-box"}>
							<Box className={"order-box-scroll"}>
								{order?.orderItems?.map((item: OrderItem) => {
									const product: Product = order.productData.filter(
										(ele: Product) => item.productId === ele._id
									)[0];
									const imagePath = `${serverApi}/${product.productImages[0]}`;
									return (
										<Box key={item._id} className={"orders-name-price"}>
											<img src={imagePath} className={"order-dish-img"} />
											<p className={"title-dish"}>{product.productName}</p>
											<Box className={"price-box"}>
												<p>₩{item.itemPrice}</p>
												<img src={"/icons/close.svg"} />
												<p>{item.itemQuantity}</p>
												<img src={"/icons/pause.svg"} />
												<p style={{ marginLeft: "15px" }}>
													₩{item.itemQuantity * item.itemPrice}
												</p>
											</Box>
										</Box>
									);
								})}
							</Box>

							<Box className={"total-price-box"}>
								<Box className={"box-total"}>
									<p>Product price</p>
									<p>₩{totalProductPrice}</p>
									<img src={"/icons/plus.svg"} style={{ marginLeft: "20px" }} />
									<p>Delivery cost</p>
									<p>₩{deliveryFee}</p>
									<img
										src={"/icons/pause.svg"}
										style={{ marginLeft: "20px" }}
									/>
									<p>Total</p>
									<p>₩{totalProductPrice + deliveryFee}</p>
								</Box>
							</Box>
						</Box>
					);
				})}

				{!finishedOrders ||
					(finishedOrders.length === 0 && (
						<Box
							display={"flex"}
							flexDirection={"row"}
							justifyContent={"center"}
						>
							<img
								src={"/icons/noimage-list.svg"}
								style={{ width: 300, height: 300 }}
							/>
						</Box>
					))}
			</Stack>
		</TabPanel>
	);
}
