import { useState, createContext } from "react";

const DataContext = createContext({});

export const DataProvider = ({children}) => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [post, setPost] = useState(''); 

    const submitForm = (e) => {
        e.preventDefault();
        const blog = {title, author, post};
        console.log(blog);
        setTitle('')
        setAuthor('')
        setPost('')
    }

    return(
        <DataContext.Provider value = {{
            title,
            author,
            post,
            submitForm
        }}>
            {children}
        </DataContext.Provider>
    )
};

export default DataContext;