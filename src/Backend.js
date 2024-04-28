import axios from 'axios';

const Backend = () => {
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/');
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <button onClick={fetchData}>Fetch Data from Backend</button>
        </div>
    );
};

export default Backend;
