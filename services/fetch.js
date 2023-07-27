export const fetchApi = {
    async getApi(url) {
        // const token = Storage.get()?.token
        let jsonData;
        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`
        }

        try {
            // , { headers }
            let response = await fetch(url)
            jsonData = await response.json()
        } catch (error) {
            console.log('Error:', error);
        }

        return jsonData;
    }
}