
import './App.css'
import axios from 'axios';
import Counter from './couter';
import {useEffect} from 'react'



function App() {
  const downlosed = async () => {
    try {
      const response = await axios.post(
        "http://192.168.0.104:8082/adminget/get_history_by_date",
        {},
        { responseType: 'blob' } // Important for binary data
      );
  
      // Create a blob URL and download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "history_testing.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };


  const tesingapi = async () => {
    const data = await axios.post("https://uatv4.topwallet.ph/userget/get_data");
    console.log(data);
  };
  
  useEffect(() => {
    tesingapi();
  }, []);

  


  return (
    <>
<h1>sathish</h1>
<button onClick={downlosed}>downlod</button>
<h1>increment decrement reset</h1>
<Counter/>
<button onClick={tesingapi}>apitesting</button>
    </>
  )
}

export default App
