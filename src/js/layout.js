import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes, useActionData } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext, { Context } from "./store/appContext";
import CreateContactForm from './component/CreateContactForm';
import deleteContactDispatcher from './store/deleteContactDispatcher';

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

const ContactList = () => {
    const { store, actions } = useContext(Context);

    useEffect (() =>{
        actions.updateContactList(); 
    }, []);

	const handleDeleteContact = async (id) => {
        try {
            await deleteContactDispatcher.delete(id);
            actions.updateContactList(); 
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <>
            <ul>
                {store.contacts.map((contact) => (
                    <li key={contact.id}>
                        <div>
                            <strong>Name:</strong> {contact.name}
                        </div>
                        <div>
                            <strong>Phone:</strong> {contact.phone}
                        </div>
                        <div>
                            <strong>Email:</strong> {contact.email}
                        </div>
                        <div>
                            <strong>Address:</strong> {contact.address}
                        </div>
                            <button onClick={() => handleDeleteContact(contact.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

const Layout = () => {
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
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

