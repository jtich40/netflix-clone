import { useContext, useState } from "react";
import storage from "../../firebase";
import "./newProduct.css";
import { createMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";

export default function NewProduct() {
  
  const [movie, setMovie] = useState(null)
  const [image, setImage] = useState(null)
  const [imageTitle, setImageTitle] = useState(null)
  const [imageThumbnail, setImageThumbnail] = useState(null)
  const [trailer, setTrailer] = useState(null)
  const [video, setVideo] = useState(null)
  const [uploaded, setUploaded] = useState(0)

  const { dispatch } = useContext(MovieContext)

  const handleChange = (e) => {
    const value = e.target.value
    setMovie({ ...movie, [e.target.name]: value })
  }

  const upload = items => {
    items.forEach(item => {
      // set the file name to the current time, label of file, and name of file
      const fileName = new Date().getTime() + item.label + item.file.name
      // upload the file to firebase storage
      const uploadTask = storage.ref(`/items/${fileName}`).put(item.file)
      // listen to state changes of the upload
      uploadTask.on("state_changed", snapshot => {
        // get the progress of the upload and print it to the console
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log(`Upload is ${progress}% done`)
      }, 
      err => console.log(err), 
      // when the upload is complete, store the file in the firebase storage
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then(url => {
          // set the state of the movie object to the url of the file
          setMovie(prev => { 
            return { ...prev, [item.label]: url }
          })
          // increment the uploaded state by 1
          setUploaded(prev => prev + 1)
        })
    })
  })
}

// compiles all the files into one object and uploads them to the server
const handleUpload = e => {
  e.preventDefault()
  upload([
    { file: image, label: "image" },
    { file: imageTitle, label: "imageTitle" },
    { file: imageThumbnail, label: "imageThumbnail" },
    { file: trailer, label: "trailer" },
    { file: video, label: "video" },
  ])
}

const handleSubmit = e => {
  e.preventDefault()
  createMovie(movie, dispatch)
}

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input 
          type="file" 
          id="image" 
          name="image" 
          onChange={e => setImage(e.target.files[0])} 
          />
        </div>
        <div className="addProductItem">
          <label>Title Image</label>
          <input 
          type="file" 
          id="imageTitle" 
          name="imageTitle"
          onChange={e => setImageTitle(e.target.files[0])}  
          />
        </div>
        <div className="addProductItem">
          <label>Thumbnail Image</label>
          <input 
          type="file" 
          id="imageThumbnail" 
          name="imageThumbnail" 
          onChange={e => setImageThumbnail(e.target.files[0])} 
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input 
          type="text" 
          placeholder="John Wick" 
          name="title" 
          onChange={handleChange} 
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input 
          type="text" 
          placeholder="description" 
          name="description" 
          onChange={handleChange} 
          />
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input 
          type="text" 
          placeholder="Year" 
          name="year" 
          onChange={handleChange} 
          />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input 
          type="text" 
          placeholder="Genre" 
          name="genre" 
          onChange={handleChange} 
          />
        </div>
        <div className="addProductItem">
          <label>Duration</label>
          <input 
          type="text" 
          placeholder="Duration" 
          name="duration" 
          onChange={handleChange} 
          />
        </div>
        <div className="addProductItem">
          <label>Age Limit</label>
          <input 
          type="text" 
          placeholder="Age Limit" 
          name="ageLimit" 
          onChange={handleChange} 
          />
        </div>
        <div className="addProductItem">
          <label>isSeries?</label>
          <select name="isSeries" id="isSeries" onChange={handleChange}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Trailer</label>
          <input 
          type="file" 
          name="trailer" 
          onChange={e => setTrailer(e.target.files[0])} 
          />
        </div>
        <div className="addProductItem">
          <label>Video</label>
          <input 
          type="file" 
          name="video" 
          onChange={e => setVideo(e.target.files[0])} 
          />
        </div> 
        {uploaded === 5 ? (
        <button className="addProductButton" onClick={handleSubmit}>Create</button>
        ) : (
        <button className="addProductButton" onClick={handleUpload} >Upload</button>
        )}
        </form>
    </div>
  );
}
