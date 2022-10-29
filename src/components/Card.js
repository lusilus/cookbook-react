import React from 'react'

function Card({idx, recipe}) {
    const {url} = recipe.fields.url.fields.file
    const {title,cookingTime,category,ingredients, method,rating} = recipe.fields

    //const stars = [<span>&#9733;</span>, <span>&#9733;</span>, <span>&#9733;</span>, <span>&#9733;</span>,<span>&#9733;</span>]

/*     let starArray = 
        [...Array(5)].map((star, index) => {
            index += 1;
            return (
            <span key={index}>&#9733;</span>
            );
        })
        console.log('Array is' + starArray); */

    const starRating =
/*      starArray.map(function(content) {
        // map content to html elements
        return <>{content}</>;

    }) */
    [...Array(5)].map((star, index) => {
        index += 1;
        return (
        <span key={index}>&#9733;</span>
        );
    })
    .reduce(function(r, element, index) {
        // create element groups with size 3, result looks like:
        // [[elem1, elem2, elem3, elem4], [elem5], ...]
        index % rating === 0 && r.push([]);
        r[r.length - 1].push(element);
        return r;

    }, []).map(function(rowContent, index) {
        // surround every group with 'span'
        return <span key={index} className="star">{rowContent}</span>;
    });

  return (
    <div className="card">
        <h2>{title}</h2>
        <div className="star-rating">{starRating}</div>
        <picture>
            <source srcSet={`https:${url}?w=500&h=500&fm=webp`} type="image/webp" />
            <img src={`https:${url}?w=500&h=500`} alt="" />
        </picture>
        <div>{cookingTime}</div>
        <div>{category}</div>
        <div>{ingredients}</div>
        <div>{method}</div>
    </div>
  )
}

export default Card