import React, { ChangeEvent, useState } from 'react';
import './home-page.scss';
import TutorialGame from '../../components/tutorial/tutorial';
const HomePage = () => {
    return (
        <div className="HomePage">
            <TutorialGame />
        </div>
    );
}

export default HomePage;
