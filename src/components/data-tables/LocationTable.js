import React from "react";
import "../css/dataTable.css";
import { useState } from "react";
import TitleBar from "../TitleBar";

const LocationTable = ()=>{
    const [data, setData] = useState([
        {
          id: 1,
          name: "John Doe",
          employeeId: "E123",
          position: "Software Engineer",
          location: "New York",
          email: "john@example.com",
          phone: "123-456-7890",
          status: "Active",
        },
        {
          id: 2,
          name: "John Doe",
          employeeId: "E127",
          position: "Software Engineer",
          location: "New York",
          email: "john@example.com",
          phone: "123-456-7890",
          status: "Active",
        },
        {
          id: 3,
          name: "John Doe",
          employeeId: "E124",
          position: "Web developer",
          location: "New York",
          email: "john@example.com",
          phone: "123-456-7890",
          status: "Active",
        },
        {
          id: 4,
          name: "John Doe",
          employeeId: "E124",
          position: "Web developer",
          location: "New York",
          email: "john@example.com",
          phone: "123-456-7890",
          status: "Active",
        },
        {
          id: 5,
          name: "John Doe",
          employeeId: "E124",
          position: "Web developer",
          location: "New York",
          email: "john@example.com",
          phone: "123-456-7890",
          status: "Active",
        },
        {
          id: 6,
          name: "John Doe",
          employeeId: "E124",
          position: "Web developer",
          location: "New York",
          email: "john@example.com",
          phone: "123-456-7890",
          status: "Active",
        },
        {
          id: 7,
          name: "John Doe",
          employeeId: "E124",
          position: "Web developer",
          location: "New York",
          email: "john@example.com",
          phone: "123-456-7890",
          status: "Active",
        },
        {
          id: 8,
          name: "John Doe",
          employeeId: "E124",
          position: "Web developer",
          location: "New York",
          email: "john@example.com",
          phone: "123-456-7890",
          status: "Active",
        },
        {
          id: 9,
          name: "John Doe",
          employeeId: "E124",
          position: "Web developer",
          location: "New York",
          email: "john@example.com",
          phone: "123-456-7890",
          status: "Active",
        },
        // Add more data rows as needed
      ]);
      const handleCheckboxChange = (id) => {
        setData(
          data.map((item) =>
            item.id === id ? { ...item, selected: !item.selected } : item
          )
        );
      };
    return(
        <>
        <TitleBar title={"Locations"} count={"47"} addbtn={"Add Location"} url={'/location/create'}/>
      <section className="py-3 tableparent">
        <table className="mytable">
        <thead>

            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th scope="col">Name</th>
              <th scope="col">Employee ID</th>
              <th scope="col">Position</th>
              <th scope="col">Location</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
        </thead>
          
            {data.map((item) => ( <tbody>
            <tr>
              <td>
                <input type="checkbox" 
                 checked={item.selected || false}
                onChange={() => handleCheckboxChange(item.id)}
                />
              </td>
              <td>{item.name}</td>
              <td>{item.employeeId}</td>
              <td>{item.position}</td>
              <td>{item.location}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.status}</td>
              <td>....</td>
            </tr>
            
          </tbody>
          ))}
        </table>
      </section>


        </>
    );
};
export default LocationTable;