import axios from 'axios';

export default axios.create(
    {
        baseURL: "https://api.yelp.com/v3/businesses",
        headers: {
            Authorization: "Bearer3fuSgfsW1NM7NgHrctKJY24Kfk1DId0RSPPgad-Q-UE3flBl00E2tI9xapdimxYgjsWfmwWLIS3n1cNqHhbFvlD4XUSh1O6nspEAMJh_eceRVpnEQhZBK8Ejpy3sXnYx"
        }
    }
)