import React from 'react';
import './userOutput.styles.scss';

const UserOutput = ({userName}) => (
    <div className="user-output">
        <h4>{userName}</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptas culpa facilis. Voluptatem quibusdam repellendus iure exercitationem! Quibusdam nostrum, alias facilis soluta nemo quae maiores culpa blanditiis vel nulla quos.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo culpa dicta distinctio, explicabo assumenda id sed quod vel voluptate iusto temporibus consequuntur odio mollitia recusandae ipsam atque sunt eius porro?</p>
    </div>
)
export default UserOutput