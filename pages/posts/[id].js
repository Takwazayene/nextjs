
import { useRouter } from "next/router"
import Link from "next/link";
import React from "react";
class Posts extends React.Component {
    constructor() {
        super();
        this.state = {
            ninjaa: []

        }
    }


    async componentDidMount() {
        await this.getdata();
    }

    getid = async () => {
       // const router = useRouter()
       // const { query: { id }, } = router
        //const takwa = id 
        //return takwa
    }



    getdata = async () => {
        try {

            const res = await fetch('https://jsonplaceholder.typicode.com/posts/5');
            // this will re render the view with new data
            this.setState({
                ninjaa: await res.json()
            });
        } catch (err) {
            console.log(err);
        }
    }

    render() {

        console.log("nnjaaaa", this.state.ninjaa);


        return (
            <div>

                <ul>
                    {

                        <li className="list-group-item"><button >{this.state.ninjaa.title}</button>{this.state.ninjaa.title}</li>

                        
                    }
                </ul>
            </div>
                            );
                        }
};
export default Posts;