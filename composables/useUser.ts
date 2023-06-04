const useUser = () => {
    const user = useState('user', () => {})

    const setUserData = (userData: any) => {
        user.value = userData;
    }

    return {
        user,
        setUserData
    }
}
export default useUser