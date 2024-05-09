const createContactDispatcher = {
    post: async (contactData) => {
        try {
            contactData.name = contactData.full_name;
            const response = await fetch('https://playground.4geeks.com/contact/agendas/agendaMaria/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(contactData)
            });
            
            if (!response.ok) {
                throw new Error('Error al crear el contacto: ' + response.statusText);
            }

            return await response.json();
        } catch (error) {
            console.error('Error al crear el contacto:', error.message);
            throw error; 
        }
    }
}

export default createContactDispatcher;
