import React,{useState} from 'react'
import "./box.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from './Navbar.js';

const uniqueList =[...new Set(Menu.map((curElem)=>`${curElem.category}`)),"All"];
console.log(uniqueList);

const Restaurant = () => {
    const [menuData, setmenuData] = useState(Menu);
    const [menuList,setMenuList]=  useState(uniqueList);
    const filterItem =(category)=>{
        if(category==="All"){
            setmenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category; 
        });
        setmenuData(updatedList);
    };
    return(
    <> 
    <Navbar filterItem ={filterItem} menuList={menuList} />
    <MenuCard menuData={menuData}/>
    </>
    ); 
}

export default Restaurant;
