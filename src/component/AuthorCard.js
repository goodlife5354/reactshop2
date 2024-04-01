import React from 'react';
import { Link } from 'react-router-dom';

const AuthorCard = ({ item, imgSrc, id }) => {
    return (
        <div className="author-area">
            <Link to={`/sub2/sub2-1/${id}/`}>
                <figure className='author-pic'>
                    <img src={process.env.PUBLIC_URL + imgSrc} alt={item.title} />
                </figure>
            </Link>
            <div className="text-wrap">
                <p className='author'>{item.author}</p>
                {/* 각 AuthorCard를 클릭하면 해당 id의 Test 컴포넌트가 렌더링되는 페이지로 이동 */}
                <Link to={`/sub2/sub2-1/${id}/`}><button className="btn-view">VIEW</button></Link>
            </div>
        </div>
    );
}

export default AuthorCard;