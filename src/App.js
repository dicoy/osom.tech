import React from "react";
import Navbar from "./ui/molecules/NavBar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages";
import ProductListing from "./pages/productListing";
import ProductDetails from "./pages/productDetails";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/products" >
					<Route path="" element={<ProductListing />} />	
					<Route path=":productId" element={<ProductDetails />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
