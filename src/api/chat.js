const uri = import.meta.env.VITE_APP_SERVER_URI;

export const ask = async (query) => {
    const response = await fetch(`${uri}/ask?user_query=${query}`, {
        method: "POST"
    });
    const data = await response.json();
    return {success: true, data: {...{...data}}};
}