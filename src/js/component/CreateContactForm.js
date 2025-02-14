import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const CreateContactForm = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        phone: '',
        address: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
    
        await actions.addContact(formData);
    
        navigate("/contact-list");
    };
    

    return (
        <div className="add-contact-form container text-center mt-5">
            <h2>Añadir Nuevo Contacto</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="mb-3 mt-5">
                <label htmlFor="fullName" className="form-label" style={{fontWeight: 'bold'}}>
                        Nombre Completo
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                        Teléfono
                    </label>
                    <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">
                        Dirección
                    </label>
                    <textarea
                        className="form-control"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-secondary">
                    Guardar Contacto
                </button>
                <Link to="/">
                    <span className="ms-2">
                        Volver
                    </span>
                </Link>
            </form>
        </div>
    );
};

export default CreateContactForm;