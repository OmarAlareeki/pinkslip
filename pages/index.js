// pages/index.js 
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import fire from '../config/fire-config';
import Nav from '../components/Nav';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [views, setViews] = useState(0)
  const router = useRouter();

  fire.auth()
    .onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true)
      } else {
        setLoggedIn(false)
      }
    })


  // updates the list of blogs links every time there is a change to the list.
  useEffect(() => {
    fire.firestore()
      .collection('blogs')
      .onSnapshot(snap => {
        const blogs = snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setBlogs(blogs);
      });
  }, []);

  function handleViewsCounter(idRef) {
    const idReference = fire.firestore().collection('blogs').doc(idRef);
    const viewsPlusOne = idReference.update({ views: fire.firestore.FieldValue.increment(1) })
    return viewsPlusOne;
  }
  

  return (
    <div>
      <Head>
        <title>PINKSLIP</title>
      </Head>
      <Nav />
      <div style={{
        padding: '10px',
        margin: '10px',

      }}>
        {loggedIn && <Link href="/createPost">
          <a style={{
            border: '1px solid #f2f2f2',
            padding: '10px',
            borderRadius: '10px',
            boxShadow: 'rgb(246, 246, 246) 0px -50px 36px -28px inset'
          }}>Post a vehicle</a>
        </Link>}
      </div>
      <ul style={{
        display: 'flex', flexWrap: 'wrap', listStyle: 'none',
      }}>
        {blogs.map(blog =>

          <li key={blog.id}>
            <Link href="blog/[id]" as={'blog/' + blog.id} >
              <a onClick={() => { handleViewsCounter(blog.id) }}>{blog.title}</a>
            </Link> <br></br>
            <span>{blog.views} views</span>
            <h6>{blog.odometer}</h6>
            <h6>{blog.model + " " + blog.make}</h6>
            <span>{blog.price}</span>
            <span>{blog.titleStatus}</span>
          </li>
        )}
      </ul>
    </div>
  )
}
export default Home;