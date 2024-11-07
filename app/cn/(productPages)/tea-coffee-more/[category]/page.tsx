import React from 'react';

const TeaCoffeeMore = (props:{params:{category:string}}) => {
    const {params:{category}} = props
    console.log(category)
    return (
        <main>
            {category}
        </main>
    );
};

export default TeaCoffeeMore;