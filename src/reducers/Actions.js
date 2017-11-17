module.exports = () => {
    let i = 0;

    return {
        login: {
            setEmail: i++,
            setPassword: i++,
            setFirstName: i++,
            setLastName: i++,
            setPasswordRepeat: i++,
            setAddress: i++,
            setCity: i++,
            setAddressState: i++,
            setZipcode: i++,
            setDriversLiscenseNumber: i++,
            clearPassword: i++
        }
    };
};
