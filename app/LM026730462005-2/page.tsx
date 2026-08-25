"use client";

import Header from "../components/header";
import Footer from "../components/footer";

import { useState } from "react";
import PetForm from "./component/PetForm"
import PetHome from "./component/PetHome";

export default function PetsLists(){

    const [count, setCount] = useState(0);
    const [comp, setComp] = useState(30);
    const [open, setOpen] = useState(false);
    const [selectedPets, setSelectedPets] = useState(null);
    const [editingPets, setEditingPets] = useState(null);
    const [type, setType] = useState(30);

    const resetEditingPets = () => setEditingPets(null);

    // eslint-disable-next-line prefer-const
    let name = "Chanya Chiewsarikij";
    // eslint-disable-next-line prefer-const
    let major = "DBI";
    // eslint-disable-next-line prefer-const
    let studentNo = "026730462005-2";
    // eslint-disable-next-line prefer-const
    let active = true;
    const role = "Student";

    const myPets = [
        {
            id: 1,
            name: "ฝอยทอง",
            "type": 10,
            contacts: "สมชาย ใจดี (โทร.0911111111)"
        },
        {
            id: 2,
            name: "ขนมชั้น",
            type: 20,
            contacts: "มงคล สุขใจ"
        }
    ];

    const newPets = [
        {
            id: 3,
            name: "ทองหยิบ",
            type: 30,
            contacts: "สมหญิง รักงาน"
        }
    ];


    const updatePets = [...myPets, ...newPets];
    const [pets, setPets] = useState(updatePets);

    const isActive = (active: boolean) => {
        if(active == true)
         return <>{role}</>;
        else
         return <>N/A</>;
    }


    const newPetsList = updatePets.filter(
        (item) => {
            if(comp == null)
                return item.type == 10 || item.type == 20 || item.type == 30
            else
                return item.type == comp
        }
    );

    const handleDelete = (id) => {
        const updatePets = pets.filter(item => item.id != id);
        setPets(updatePets);
    }

    const handleView = (task) => {
        // alert('You choose handleView function. ');
        setSelectedPets(task);
        setOpen(true);
    }

    const handleEdit = (task) => {
        // alert(task);
        setEditingPets(task);
    }

    const updateTask = (id, name, type, contacts) => {
        setPets(
            (pets) => pets.map((t)=>
                t.id === id ? {
                 ...t,
                 Name: name,
                 Type: type,
                 Contacts: contacts
                } : t
            ));
            setEditingPets(null);
    }

    const getToDoItem = pets.map((item) => {
        //<li>{item}</li>
        const {id, name, type, contacts} = item;

    return (
    <li key ={id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-sm transition-all group">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
        />
        <span className="text-sm font-medium text-gray-700">รหัสรายการ: {id}</span>
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-sm font-medium text-gray-700">{type}</span>
        <span className="text-sm font-medium text-gray-700">ติดต่อ: {contacts}</span>
      </div>

    <div className="flex gap-2 mt-2">
        {/* View */}
        <button onClick={(e)=>handleView(item)} className="bg-green-500 text-white px-3 py-1 rounded">View</button>
       
        {/* Edit */}
        <button onClick={(e)=>handleEdit(item)} className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>
    </div>

      <button className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      onClick={(e) => handleDelete(id)}>
        <svg xmlns="http://w3.org" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </li>
    );
    });

    console.log("Name: ", name);

    const handleComplete = (comp) => {
        setComp(comp);
    }

    const addPets = (name, type, contacts) => {
        const newPets = {
            id: pets.length+1,
            name: name, 
            type: setType,
            contacts: contacts
        };

        setPets([...myPets, newPets]);
    }

    return (
      <>
      <Header />



    <PetForm 
       addPets={addPets}
       editingPets={editingPets}
       updatePets={updatePets}
       resetEditingPets={resetEditingPets}
    />

    <div className="flex mt-6 space-x-4 items-center justify-center">
        <botton onClick ={() => handleComplete(null)} className="px-5 py-2 bg-cyan-400 text-white text-semibold 
    rounded-lg shadow-md hover:bg-blue-700 transition">ทั้งหมด</botton>
        <botton onClick ={() => handleComplete(10)} className="px-5 py-2 bg-emerald-500 text-white text-semibold 
    rounded-lg shadow-md hover:bg-blue-700 transition">น้องหมา</botton>
        <botton onClick ={() => handleComplete(20)} className="px-5 py-2 bg-rose-500 text-white text-semibold 
    rounded-lg shadow-md hover:bg-blue-700 transition">น้องแมว</botton>
    <botton onClick ={() => handleComplete(30)} className="px-5 py-2 bg-rose-500 text-white text-semibold 
    rounded-lg shadow-md hover:bg-blue-700 transition">อื่นๆ</botton>
    </div>

        {/*
        <p>ชื่อ-สกุล: {name}</p>
        <p>รหัสนักศึกษา: {studentNo}</p>
        <p>สาขาวิชา: {major}</p>
        <p>สถานภาพนักศึกษา: {isActive(active)}</p>
        <p>บทบาท: {role}</p>*/}
<div className="flex flex-col items-center justify-center mt-10">
        <h1 className = "text-xl font-bold text-olive-800 mb-2">รายการสัตว์เลี้ยงในระบบ</h1>
        <h2 className="text-2xl font-bold text-olive-800 mb-5">ทั้งหมด{pets.length}รายการ</h2>
        <ul className = "list-disc pl-5 pr-5 space-y-3 text-slate-700">
            {getToDoItem}
        </ul>
        </div>
        <PetHome 
            open={open}
            onClose={()=>{
                setOpen(false);
                setSelectedPets(null);
            }}
            Pets={selectedPets}
        />
        <div className="flex items-center justify-center mt-10">
  <div className="w-full max-w-sm bg-white border border-slate-200 rounded-2xl shadow-sm p-6 text-center">
        
    {/*<!-- Name & Title -->*/}
    <h3 className="text-xl font-bold text-olive-800 mb-5">ชื่อ-สกุล: {name}</h3>
    <p className="text-sm font-medium text-olive-600 mb-3">รหัสนักศึกษา: {studentNo}</p>
    <p className="text-sm font-medium text-olive-600 mb-3">สาขาวิชา: {major}</p>
    <p className="text-sm font-medium text-olive-600 mb-3">สถานภาพนักศึกษา: {isActive(active)}</p>

  </div>
</div>
        <Footer />
      </>
    );
}