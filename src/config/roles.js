import Clinic from '../pages/Clinic';
import ClinicProfile from '../pages/ClinicProfile';
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
    },
    clinic: {
        path: '/',
        page: Clinic
    },
    clinicProfile : {
        path: '/clinic',
        page: ClinicProfile
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
    CLINIC: [
        components.clinic,
        components.clinicProfile
    ]
    // ADMIN: [
    //     components.admin
    // ]
};
export default roles;