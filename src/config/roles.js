import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Reservation from '../pages/Reservation'

const components = {
    home: {
        path: '/',
        page: Home,
    },
    profile: {
        path: '/profile',
        page: Profile
    },
    reservation: {
        path: '/',
        page: Reservation
    }
};

const roles = {
    GUEST: [
        components.home
    ],
    USER: [
        components.reservation,
        components.profile
    ],
    // ADMIN: [
    //     components.admin
    // ]
};
export default roles;