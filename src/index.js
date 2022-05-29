// source: https://www.youtube.com/watch?v=4UZrsTqkcW4

import React from 'react';
import ReactDom from 'react-dom';

//CSS
import './index.css';

//books file
import {data} from './books';
import Book from './Book';
import {greeting} from './testing/testing'
//setup vars

// setting up books array 


function BookList(a) {
      console.log(greeting);
       return (
      <section className= 'book-list'>
        {data.map((book) => {
          return (
            <Book key={book.id} {...book}></Book>
          );
        })}
      </section>
  );
 
  }
 

ReactDom.render(<BookList/>, document.getElementById('root'));