import { useState} from 'react';
import { useHistory} from 'react-router-dom';
const Create = () => {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('');
    const [category,setCategory]=useState('nature');
    const [isLoading,setIsLoading]=useState(false);
    const history=useHistory();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog={title,body,author,category};
        setIsLoading(true)
        fetch(' http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log("new blog added");
            setIsLoading(false);
            history.push('/');
        });
      
    }
    return (
        
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Blog Title : </label>
                <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <label htmlFor="">Blog Body : </label>
                <textarea required value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
                <label htmlFor="">Blog Category : </label>
                <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                    <option value="nature">Nature</option>
                    <option value="travel">Travel</option>
                    <option value="sports">Sports</option>
                    <option value="food">Food</option>
                    <option value="pets">Pets</option>
                    <option value="mentalhealth">Mental Health</option>
                    <option value="fitness">Fitness</option>
                    <option value="photography">Photography</option>
                    <option value="music">Music</option>
                    <option value="finance">Fitness</option>
                </select>
                <label htmlFor="">Blog Author : </label>
                <input type="text" required value={author} onChange={(e)=>setAuthor(e.target.value)}/>
                   
                {!isLoading && <button>Add Blog</button>}
                {isLoading && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
}

export default Create;