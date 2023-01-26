import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import CandidateProfile from './CandidateProfile';
import MyProfile from './MyProfile';

const Profile = () => {
    const {dbUser} = useContext(AuthContext)
    return (
        <div>
            {
dbUser?.type==='Agency' ? <MyProfile /> : <CandidateProfile />
            }
        </div>
    );
};

export default Profile;