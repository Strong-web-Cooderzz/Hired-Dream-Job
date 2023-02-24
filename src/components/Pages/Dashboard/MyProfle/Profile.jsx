import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import CandidateProfile from './CandidateProfile';
import EmployerProfile from './EmployerProfile';

const Profile = () => {
	const { dbUser } = useContext(AuthContext)
	return (
		<div>
			{
				dbUser?.type === 'Agency' ? <EmployerProfile /> : <CandidateProfile />
			}

		</div>
	);
};

export default Profile;
