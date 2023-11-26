
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  

  const [packageFamilies, setPackageFamilies] = useState([]);

  const navigate = useNavigate();

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
        console.log("Data", data);
        
      } catch (error) {
        console.error("An error occurred:", error.response);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const updatedFilteredData = packageFamilies.filter(item =>
      item.package_family_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(updatedFilteredData);
  }, [searchQuery, packageFamilies]); // This useEffect will run whenever searchQuery or packageFamilies changes
  


  const handleReset = async () => {
    const token = sessionStorage.getItem("authToken");
    try {
      const response = await fetch('/api_clear_packages', {
        method: 'POST', // Adjust the method as needed (POST, GET, etc.)
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
          // You may need to include additional headers based on your backend requirements
        },
        // You can include a request body if needed
        // body: JSON.stringify({ /* Your data here */ }),
      });
      if (response.ok) {
        alert("Package deletion successful");
        console.log("Package deletion successful");
        window.location.reload(true);
      } else {
        alert("Package deletion failed: " + response.data.message);
        console.log("Package deletion failed", response.data.message);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
    };

const handleSearchInput = (event) => {
  setSearchQuery(event.target.value);
};


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
        <div className="flex items-center gap-4">
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-gray-800 text-white rounded"
          >
            Reset
          </button>
        </div>
      </div>
      <input
  type="text"
  placeholder="Search..."
  className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
  value={searchQuery}
  onChange={handleSearchInput}
/>

      <table className="min-w-full bg-white border rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border-b">Package Name</th>
            <th className="py-2 px-4 border-b">Net Score</th>
            <th className="py-2 px-4 border-b">Ramp up</th>
            <th className="py-2 px-4 border-b">Maintenance</th>
            <th className="py-2 px-4 border-b">Bus Factor</th>
            <th className="py-2 px-4 border-b">Correctness</th>
            <th className="py-2 px-4 border-b">License</th>
            <th className="py-2 px-4 border-b">Dependency Pinning</th>
            <th className="py-2 px-4 border-b">Code Review Coverage</th>
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
                <td className="py-2 px-4">{item.net_score}</td>
                <td className="py-2 px-4">{item.ramp_up_score}</td>
                <td className="py-2 px-4">{item.responsive_maintainer_score}</td>
                <td className="py-2 px-4">{item.bus_factor_score}</td>
                <td className="py-2 px-4">{item.correctness_score}</td>
                <td className="py-2 px-4">{item.license_score}</td>
                <td className="py-2 px-4">{item.dependency_pinning_score}</td>
                <td className="py-2 px-4">{item.code_review_coverage_score}</td>
                <td className="py-2 px-4">
                  <Link
                    to={`/package-details/${item.package_family_id}`}
                    className="w-full px-4 py-2 bg-blue-500 text-white rounded hover-bg-blue-600"
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

