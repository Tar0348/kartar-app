"use client";

import { useEffect, useState } from "react";

export default function PetForm({ addPets, editingPets, updatePets, resetEditingPets }) {

    const [name, setName] = useState('');
    const [type, setType] = useState(30);
    const [contacts, setContacts] = useState('');

    useEffect(()=>{
      if(editingPets){
        setName(editingPets.name);
        setContacts(editingPets.contacts)
        setType (editingPets.type);
      }else{
        setName('');
        setContacts('');
        setType(30);
      }
    },[editingPets]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!name.trim()) return;

        if(editingPets){
          updatePets(
            editingPets.id, name, type, contacts
          )
        }else addPets(name, type, contacts);

        setName("");
        setContacts("");
        setType(30);
    }

        const handleCancel = (e) => {
            setName("");
            setContacts("");
            setType(30);
        }

    return (
        <form onSubmit={handleSubmit}>
      <div className="m-3 p-6 bg-white rounded-xl shadow-md">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">เพิ่มข้อมูลสัตว์เลี้ยง</h3>
        <div className="flex">
          <label className="mb-2 text-sm font-medium text-slate-700">ชื่อสัตว์เลี้ยง:</label>
          <input
            type="text"
            placeholder="Enter task..."
            className="w-11/12 ms-4 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease-content focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            value={name} 
            onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div className="flex gap-3">
          <label className="mt-4 py-4 text-sm font-medium text-slate-700">ประเภทสัตว์เลี้ยง:</label>
          <label className="mt-4 px-4 py-4 flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-lg">
            <input type="radio" name="completed" value='true' 
            checked={type === 10} 
            onChange={(e)=>setType(e.target.value === 30)} 
            className="h-4 w-4 accent-blue-600 cursor-pointer" />
            <span className="text-sm font-medium text-gray-700">น้องหมา</span>
          </label>
          <label className="ms-2 mt-4 px-4 flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-lg">
            <input type="radio" name="completed" value='false' 
            checked={type === 20}
            onChange={(e)=>setType(e.target.value === 30)} 
            className="h-4 w-4 accent-blue-600 cursor-pointer" />
            <span className="text-sm font-medium text-gray-700">น้องแมว</span>
          </label>
          <label className="ms-2 mt-4 px-4 flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-lg">
            <input type="radio" name="completed" value='false' 
            checked={type === 30}
            onChange={(e)=>setType(e.target.value === 30)} 
            className="h-4 w-4 accent-blue-600 cursor-pointer" />
            <span className="text-sm font-medium text-gray-700">อื่นๆ</span>
          </label>
        </div>
        <div className="flex gap-3">
          <label className="mt-4 py-4 text-sm font-medium text-slate-700">ข้อมูลผู้ติดต่อ:</label>
            <input
            type="text"
            placeholder="Enter task..."
            className="w-11/12 ms-4 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease-content focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            value={contacts} 
            onChange={(e)=>setContacts(e.target.value)}
          />
          
        </div>
        <div className="flex mt-4 gap-2 justify-center">
          <button className="bg-blue-600 text-white px-4 py-1 rounded">
            { editingPets ? "แก้ไขข้อมูล" : "เพิ่มข้อมูล"}
          </button>
          <button className="bg-gray-600 text-white px-4 rounded" 
          onClick={handleCancel}>
            เคลียร์
          </button>
        </div>
      </div>
    </form>
    );

}