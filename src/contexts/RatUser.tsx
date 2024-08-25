import React from 'react';
import { UserContext } from '../models';

const defaultValue: UserContext = { 
    data: {}, 
    getUserData: () => void 0 
};

const RatUser = React.createContext<UserContext>(defaultValue);

export default RatUser;
