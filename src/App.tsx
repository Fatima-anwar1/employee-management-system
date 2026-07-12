
//import Navbar from './components/navbar';
//import Hero from './components/hero'; // Ye import add karo
//import Slider from './components/slider';
//import Cards from './components/cards';
//import About from './components/about';    
//import Contact from './components/contact'; 
//import Footer from './components/footer'; // Footer bhi add karlo
import {useState, useEffect} from "react"

// Yahan interface define karein
interface Product {
  title: string;
}

 function App() {


  
  
  const data = [{
    title:"product no 1"
  },
   {
      title: "product no 2"
   },
   {
    title:"product no 3"
  }]
  
const[product , setProduct] = useState<Product[]> ([])

  useEffect(() => {
     setProduct(data)
  }, [])
 console.log(product)



 //json , map , usestate, useffect , get , post(add), delete, update
   
  return (
     <>
   {/* <h1>{count}</h1>
      <button className="bg-black px-3.5 py-2.5 text-white" onClick={()=> setCount(count + 1)}>Icrement</button>
       <button className="bg-purple-500 px-3.5 py-2.5 text-white" onClick={()=> setCount(count - 1)}>Decrement</button> */}

     </>
  )
}
export default App;

   // <div className="min-h-screen w-full overflow-x-hidden bg-slate-900 text-white">
      
      //<Navbar />
      //<Slider />  {/* Navbar sabse upar }
      //<Hero />    {/* Phir Hero section }
      
     // <About />   {/* About section }
     // <Cards />   {/* Cards section }
     // <Contact /> {/* Contact section }
     // <Footer />  {/* Footer }
   // </div> 
