
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const [packageFamilies, setPackageFamilies] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const token = sessionStorage.getItem("authToken");
      try {
        const result = await axios.post(
          "/api_get_package_families",
          {},
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(result);
        const data = await result.data.packageFamilies;
        setPackageFamilies(data);
        setFilteredData(data);
      } catch (error) {
        console.error("An error occurred:", error.response);
      }
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   const filtered = packageFamilies.filter((item) =>
  //     item.name.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  //   setFilteredData(filtered);
  // }, [searchQuery, packageFamilies]); // Dependencies

  // const handleSearchInput = (e) => {
  //   const query = e.target.value;
  //   setSearchQuery(query);
  // };

  return (
    <div className="m-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">My packages</h1>
        <div className="flex items-center gap-4">
          <Link
            to="/logout"
            className="px-4 py-2 bg-gray-800 text-white rounded"
          >
            Logout
          </Link>
        </div>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
          value={searchQuery}
          // onChange={handleSearchInput}
        />
      </div>
      <table className="min-w-full bg-white border rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border-b">Package Name</th>
            <th className="py-2 px-4 border-b">Net Score</th>
            <th className="py-2 px-4 border-b">Ramp up</th>
            <th className="py-2 px-4 border-b">Maintenance</th>
            <th className="py-2 px-4 border-b">Newest Version</th>
            <th className="py-2 px-4 border-b"></th>
          </tr>
        </thead>

        <tbody>
          {filteredData.length === 0 ? (
            <tr>
              <td className="py-2 px-4 border-b" colSpan="6">
                Upload your first package!
              </td>
            </tr>
          ) : (
            filteredData.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="py-2 px-4">{item.package_family_name}</td>
                <td className="py-2 px-4">{item.netScore}</td>
                <td className="py-2 px-4">{item.rampUp}</td>
                <td className="py-2 px-4">{item.maintenance}</td>
                <td className="py-2 px-4">{item.newestVersion}</td>
                <td className="py-2 px-4">
                  <Link
                    to="/package-details"
                    className="text-xs bg-blue-500 text-white rounded hover:bg-blue-600"
                    style={{ display: "block", padding: "8px" }}
                  >
                    Details
                  </Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="mt-4">
        <Link
          to="/create-package"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover-bg-blue-600"
        >
          Create package
        </Link>
      </div>
      <div style={{ position: "absolute", top: "0", right: "0" }}>
        <Link
          to="/settings"
          className="ml-4 px-4 py-2 bg-gray-800 text-white rounded"
        >
          Settings
        </Link>
      </div>

    </div>
    );
};

export default Home;

