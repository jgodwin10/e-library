import React, { useState } from 'react'
import axios from "axios";

const Hello = () => {

     const [title, setTitle] = useState("");
     const [file, setFile] = useState("");
    const [image, setImage] = useState('');
    

     const submitImage = async (e) => {
       e.preventDefault();
       const formData = new FormData();
       formData.append("title", title);
         formData.append("file", file);
         formData.append('image', image)
       console.log(title, file, image);

       const result = await axios.post(
         "http://localhost:3000/upload-files",
         formData,
         {
           headers: { "Content-Type": "multipart/form-data" },
         }
       );
       console.log(result);
       if (result.data.status == "ok") {
         alert("Uploaded Successfully!!!");
         getPdf();
       }
     };






   return (
     <div className="App">
       <form className="formStyle" onSubmit={submitImage}>
         <h4>Upload Pdf in React</h4>
         <br />
         <input
           type="text"
           className="form-control"
           placeholder="Title"
           required
           onChange={(e) => setTitle(e.target.value)}
         />
         <br />
         <input
           type="file"
           class="form-control"
           accept="application/pdf"
           required
           onChange={(e) => setFile(e.target.files[0])}
         />
         <input
           type="file"
           class="form-control"
           required
           onChange={(e) => setImage(e.target.files[0])}
         />
         <br />
         <button class="btn btn-primary" type="submit">
           Submit
         </button>
       </form>
     </div>
   );
}

export default Hello
