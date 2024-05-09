const updateContactDispatcher = {
    put: async (contactId, updatedData) => {
        try {
            const response = await fetch(`https://playground.4geeks.com/contact/agendas/agendaMaria/contacts/${contactId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedData)
            });
            
            if (!response.ok) {
                throw new Error('Error al actualizar el contacto: ' + response.statusText);
            }

            return await response.json();
        } catch (error) {
            console.error('Error al actualizar el contacto:', error.message);
            throw error; 
        }
    }
};

export default updateContactDispatcher;