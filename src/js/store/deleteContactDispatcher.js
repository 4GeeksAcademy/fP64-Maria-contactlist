const deleteContactDispatcher = {
    delete: async (contactId) => {
        try {
            const response = await fetch(`https://playground.4geeks.com/contact/agendas/agendaMaria/contacts/${contactId}`, {
                method: 'DELETE'
            });
            
            if (!response.ok) {
                throw new Error('Error al eliminar el contacto: ' + response.statusText);
            }

            return await response.json();
        } catch (error) {
            console.error('Error al eliminar el contacto:', error.message);
            throw error; 
        }
    }
}

export default deleteContactDispatcher;
