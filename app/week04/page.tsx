import Header from "../components/header";
import Footer from "../components/footer";

export default function ToDoLists(){

    // eslint-disable-next-line prefer-const
    let name = "Chanya Chiewsarikij";
    // eslint-disable-next-line prefer-const
    let major = "DBI";
    // eslint-disable-next-line prefer-const
    let studentNo = "026730462005-2";
    // eslint-disable-next-line prefer-const
    let active = true;
    const role = "Student";

    const toDoItem = [
        "เรียนวิชา Web Programming",
        "เรียนวิเคราะห์ข้อมูลเชิงธุรกิจ",
        "กินข้าวมื้อเย็นที่ Central ลาดพร้าว"
    ];

    const isActive = (active: boolean) => {
        if(active == true)
         return <>{role}</>;
        else
         return <>N/A</>;
    }

    const getToDoItem = toDoItem.map((item) => {
        //<li>{item}</li>
    return (
    // eslint-disable-next-line react/jsx-key
    <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-sm transition-all group">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
        />
        <span className="text-sm font-medium text-gray-700">{item}</span>
      </div>
      <button className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <svg xmlns="http://w3.org" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </li>
    );
    });

    console.log("Name: ", name);

    return (
      <>
      <Header />

<div className="flex items-center justify-center mt-10">
  <div className="w-full max-w-sm bg-white border border-slate-200 rounded-2xl shadow-sm p-6 text-center">
        
    {/*<!-- Name & Title -->*/}
    <h3 className="text-xl font-bold text-olive-800 mb-5">ชื่อ-สกุล: {name}</h3>
    <p className="text-sm font-medium text-olive-600 mb-3">รหัสนักศึกษา: {studentNo}</p>
    <p className="text-sm font-medium text-olive-600 mb-3">สาขาวิชา: {major}</p>
    <p className="text-sm font-medium text-olive-600 mb-3">สถานภาพนักศึกษา: {isActive(active)}</p>

  </div>
</div>
        {/*
        <p>ชื่อ-สกุล: {name}</p>
        <p>รหัสนักศึกษา: {studentNo}</p>
        <p>สาขาวิชา: {major}</p>
        <p>สถานภาพนักศึกษา: {isActive(active)}</p>
        <p>บทบาท: {role}</p>*/}
<div className="flex items-center justify-center mt-10">
        <h1 className = "text-xl font-bold text-olive-800 mb-5">รายการที่ต้องทำ</h1>
        <ul className = "list-disc pl-5 pr-5 space-y-3 text-slate-700">
            {getToDoItem}
        </ul>
        </div>
        <Footer />
      </>
    );
}