import React from 'react';
import { useParams } from 'react-router-dom';

const Test = ({ item, imgSrc }) => {
    // useParams를 사용하여 현재 URL에서 id를 추출
    const { id } = useParams();

    return (
        <div>
            <div>Test</div>
            <figure className='author-pic'>
                <img src={process.env.PUBLIC_URL + imgSrc} alt={item.title} />
            </figure>

            <div className="text-wrap">
                <p className='author'>{item.author}</p>
                {/* 해당 id의 Test 컴포넌트가 렌더링되는 페이지에서 VIEW 버튼을 클릭하면 같은 페이지로 다시 이동 */}
                <button className="btn-view" onClick={() => window.history.back()}>VIEW</button>
            </div>
        </div>
    );
}


/* 코드에서는 AuthorInfo 컴포넌트에서 각 AuthorCard에 id를 props로 전달하고, Test 컴포넌트에서 useParams를 사용하여 현재 URL에서 id를 추출하여 사용하도록 하였습니다. 페이지 이동은 Link 컴포넌트를 사용하고, Test 컴포넌트에서 이전 페이지로 이동하기 위해 window.history.back()을 사용했습니다.
 */






export default Test;