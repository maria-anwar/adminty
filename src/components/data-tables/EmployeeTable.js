import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TitleBar from "../TitleBar";
import ClipLoader from "react-spinners/ClipLoader";
import { db, collection, getDocs } from "../../config/firebase";

const EmployeeTable = () => {
  const [data, setData] = useState([]);
  const [empId, setEmpId] = useState([]);
  const [locationData, setLocationData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let [color, setColor] = useState("#FC8955");
  let count = data.length;
  //example to fetch employyes //import db and get getDocs object
  
  const fetchPost = async () => {
    getDocs(collection(db, "employees")).then((response) => {
      const empData = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        
      }));
      setEmpId(empData.id)
      setData(empData);
      setIsLoading(false);
      console.log(empId);
      //console.log(empData);
    });
  };

 
  useEffect(() => {
    fetchPost();
  }, []);

  // const [data, setData] = useState([
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     employeeId: "E123",
  //     position: "Software Engineer",
  //     location: "New York",
  //     email: "john@example.com",
  //     phone: "123-456-7890",
  //     status: "Active",
  //   },
  //   {
  //     id: 2,
  //     name: "John Doe",
  //     employeeId: "E127",
  //     position: "Software Engineer",
  //     location: "New York",
  //     email: "john@example.com",
  //     phone: "123-456-7890",
  //     status: "Active",
  //   },
  //   {
  //     id: 3,
  //     name: "John Doe",
  //     employeeId: "E124",
  //     position: "Web developer",
  //     location: "New York",
  //     email: "john@example.com",
  //     phone: "123-456-7890",
  //     status: "Active",
  //   },
  //   {
  //     id: 4,
  //     name: "John Doe",
  //     employeeId: "E124",
  //     position: "Web developer",
  //     location: "New York",
  //     email: "john@example.com",
  //     phone: "123-456-7890",
  //     status: "Active",
  //   },
  //   {
  //     id: 5,
  //     name: "John Doe",
  //     employeeId: "E124",
  //     position: "Web developer",
  //     location: "New York",
  //     email: "john@example.com",
  //     phone: "123-456-7890",
  //     status: "Active",
  //   },
  //   {
  //     id: 6,
  //     name: "John Doe",
  //     employeeId: "E124",
  //     position: "Web developer",
  //     location: "New York",
  //     email: "john@example.com",
  //     phone: "123-456-7890",
  //     status: "Active",
  //   },
  //   {
  //     id: 7,
  //     name: "John Doe",
  //     employeeId: "E124",
  //     position: "Web developer",
  //     location: "New York",
  //     email: "john@example.com",
  //     phone: "123-456-7890",
  //     status: "Active",
  //   },
  //   {
  //     id: 8,
  //     name: "John Doe",
  //     employeeId: "E124",
  //     position: "Web developer",
  //     location: "New York",
  //     email: "john@example.com",
  //     phone: "123-456-7890",
  //     status: "Active",
  //   },
  //   {
  //     id: 9,
  //     name: "John Doe",
  //     employeeId: "E124",
  //     position: "Web developer",
  //     location: "New York",
  //     email: "john@example.com",
  //     phone: "123-456-7890",
  //     status: "Active",
  //   },
  //   // Add more data rows as needed
  // ]);

  const handleCheckboxChange = (id) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  return (
    <>
      <section className="xxs:px-3 xs:px-5 md:px-6 lg:px-8 xl:px-12 2xl:px-20">
        <TitleBar
          title={"Employees"}
          count={count}
          addbtn={"Add Employee"}
          url={"/employees/create"}
        />
        <section className="pt-3 md:pt-4 mb-10">
          <div className="relative overflow-x-auto shadow-md xxs:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-[#1997BE]">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    <input type="checkbox" />
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Employee ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Position
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Location
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Phone
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Action
                  </th>
                  {/* <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th> */}
                </tr>
              </thead>
              <tbody className="w-full">
                {isLoading ? (
                  <div className="flex justify-center py-10 w-[100%]">
                  <ClipLoader
                    color={color}
                    loading={isLoading}
                    size={70} 
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                  </div>
                ) : (
                  data.map((item) => (
                    <tr className="bg-white border-b hover:bg-blue-100">
                      <td className="px-6 py-4">
                        <input
                          type="checkbox"
                          checked={item.selected || false}
                          onChange={() => handleCheckboxChange(item.id)}
                        />
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        {item.fname}
                      </th>
                      <td className="px-6 py-4">{item.empId}</td>
                      <td className="px-6 py-4">{item.position}</td>
                      <td className="px-6 py-4">{item.location}</td>
                      <td className="px-6 py-4">{item.email}</td>
                      <td className="px-6 py-4">{item.phone}</td>
                      <td className="px-6 py-4">working..</td>
                      <td className="px-6 py-4 text-center">
                        <a
                          href="#"
                          className="font-medium text-blue-600 hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </>
  );
};

export default EmployeeTable;
