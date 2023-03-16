import axios from "axios";

const apiURL = "http://localhost:3000";

const api = axios.create({
    baseURL: apiURL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const getUsers = () => {
    return api.get("/users").then((response) => {
        return response.data.map((user) => {
            return {
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email,
                phone: user.phone,
                website: user.website,
                address: {
                    street: user.address.street,
                    suite: user.address.suite,
                    city: user.address.city,
                    zipcode: user.address.zipcode,
                },
                company: {
                    name: user.company.name,
                },
            }
        })
    })
};

