import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes, useActionData } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext, { Context } from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const ContactList = () => {
	const { store, actions } = useContext(Context);

	useEffect (() =>{
		actions.updateContactList(); 
	

	}, [])
	return (<>
	  <ul>
		{store.contacts.map((contact)=>(<li>{contact.name}</li>))}
	  </ul>

	</>)

}

const CreateContactForm = () => {

}

const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || ""; //variables de entorno

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="/contact-list" element={<ContactList />} />
						<Route path="/create-contact-form" element={<CreateContactForm />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
