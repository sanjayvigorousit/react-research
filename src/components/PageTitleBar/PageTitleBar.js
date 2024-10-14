import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageTitleBar = (props) => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };
    let { title } = props;

    return (
        <div className="flex justify-between items-center py-3 px-4 bg-dark-blue">
            <span className="text-xl lg:text-2xl text-center text-white capitalize">{title}</span>
            <button onClick={() => handleGoBack()} className="rounded-none cursor-pointer btn btn-type" type="submit">Back</button>
        </div>
    )
}

export default PageTitleBar