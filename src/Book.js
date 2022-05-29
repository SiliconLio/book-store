import React from 'react'

const Book = (props) => {
  const {img, title, author} = props;
  const clickHandler = () => {
    alert('Button clicked');
  };
  const complexExample = (author) => {
      console.log(author)
  };
  return <article className= 'book' onMouseOver={() => {
    console.log(author)
  }}>
            <img src={img} alt="a book"/>
            <h1 onClick={() => console.log(title)}>{title}</h1>
            <h4>{author}</h4>
            <button type='button' onClick={clickHandler}>
            Button Test
            </button>
            <br />
            <button type="button" onClick={() => complexExample(author)}>
            more complex example
            </button>
         </article>
}


export default Book
