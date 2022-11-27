import * as React from 'react';
import './style.css';
import Books from './Books';


const books = [
  {
    title: 'Book 1',
    icon: '📚'
  },
  {
    title: 'Book 2',
    icon: '📚'
  },
  {
    title: 'Book 3',
    icon: '📚'
  },
]

export default function App() {
  return (
    <section>
         {books.map(book => (<Books title={book.title} icon={book.icon}/>))}
    </section>
  );
}