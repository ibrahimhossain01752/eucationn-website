import React from 'react';
import AdmisionAid from './AdmisionAid/AdmisionAid';
import Apply from './Apply/Apply';
import TutionFess from './TutionFees/TutionFess';

const Home = () => {
    return (
        <div>
            <AdmisionAid></AdmisionAid>
            <Apply></Apply>
            <TutionFess></TutionFess>
        </div>
    );
};

export default Home;