import React from "react";
import styles from '../../styles/posts.module.css'
import Link from 'next/link'
import { getSession } from "next-auth/react"


class Posts extends React.Component {
  constructor () {
    super();
    this.state = {
      post: []
    }
  }


  async componentDidMount() {
    await this.getdata();
  }

  getdata = async (req, ress) => {

    const session = await getSession({ req })


    if (session) {
    
    
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');

      // this will re render the view with new data
      this.setState({
        post: await res.json()
      });
    } catch (err) {
      console.log(err);
    }

  }
    else {
      ress.send({
        error: "You must be sign in to view the protected content on this page.",
      })
    }

  }

render() {
  
console.log("nnjaaaa", this.state.post);


  return (
    <div>
              <h1>All posts</h1>

      <tr>
        {
          this.state.post.map((d, i) => (
            <Link href={'/posts/'+ i} key={i}>
         <a key={i} className = { styles.single }>  
            <h3  key={i} className="list-group-item">{d.title}</h3>
            </a>  
            </Link>


          ))
          }
      </tr>
    </div>
  );
}
};
export default Posts;