import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/uselocalStorage";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([
        {
            title: "How to use Typescript with React",
            author: "Edozie Onyeanusi",
            post: "Commodo elit at imperdiet dui accumsan sit amet. Sagittis nisl rhoncus mattis rhoncus urna. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Sagittis orci a scelerisque purus semper.",
            blogID: "1"
        },
        {
            title: "Technical Writing for Developers",
            author: "Jedidiah Anadi",
            post: "Ac felis donec et odio pellentesque diam volutpat commodo. Neque convallis a cras semper auctor neque vitae tempus. Nulla porttitor massa id neque aliquam vestibulum morbi. Turpis cursus in hac habitasse platea dictumst.",
            blogID: "2"
        },
        {
            title: "Navigating Docker",
            author: "Charles Best",
            post: "Bibendum ut tristique et egestas. Turpis massa sed elementum tempus egestas sed sed. Vel pharetra vel turpis nunc. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Ac auctor augue mauris augue neque gravida in fermentum.",
            blogID: "3"
        }
    ]);

    const { setItem } = useLocalStorage('blogs');

    useEffect(() => {
        setItem(blogs)
    }, [blogs, setItem])

    const contextValue = { blogs, setBlogs }

    return (
        <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
    )
};

export default DataContext;