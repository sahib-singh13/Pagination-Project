import Header from "./Components/Header"
import Blog from "./Components/Blog"
import Pagination from "./Components/Pagination"
import { useContext } from "react"
import { AppContext } from "./Context/AppContext"
import { useEffect } from "react"
import "./App.css"

export default function App() {
  const {fetchBlogPosts}=useContext(AppContext);
  useEffect(() =>{
    fetchBlogPosts();
  },[]);

  return (
    <div>
       <Header/>
       <Blog/>
       <Pagination/>
    </div>
  )
};