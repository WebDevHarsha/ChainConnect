import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";

function Profile() {
  const [data, setdata] = useState({
    address: "",
    Balance: null,
  });

  const btnhandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));
    } else {
      alert("Install MetaMask extension!!");
    }
  };

  const getbalance = (address) => {
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [address, "latest"],
      })
      .then((balance) => {
        console.log("Raw Balance:", balance); // Log the raw balance received from MetaMask
        const balanceInEther = ethers.utils.formatUnits(balance, "ether");
        console.log("Formatted Balance:", balanceInEther); // Log the formatted balance for debugging
        setdata((prevData) => ({
          ...prevData,
          Balance: balanceInEther,
        }));
      })
      .catch((err) => {
        console.error("Error fetching balance:", err);
      });
  };
<<<<<<< HEAD
  

=======
>>>>>>> 3aed326dd40502be225c59eec5095e40e494e2fc
  const accountChangeHandler = (account) => {
    setdata({
      address: account,
      Balance: null,
    });

    getbalance(account);
  };
<<<<<<< HEAD
  
=======

>>>>>>> 3aed326dd40502be225c59eec5095e40e494e2fc
  const [showExperienceForm, setShowExperienceForm] = useState(false);
  const [selectedRole, setSelectedRole] = useState("FREELANCER"); // Default role
  const navigate = useNavigate();
  const formRef = useRef();

  const status = useSelector((state) => state.auth.status);

  const storedUserData = JSON.parse(localStorage.getItem("user")) || {};
  const { name, email, $createdAt, emailVerification } = storedUserData;

  const DateFormatting = () => {
    const dateString = $createdAt;
    const date = new Date(dateString);

    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  };

  useEffect(() => {
    if (!status || !storedUserData) {
      navigate("/");
    }
  }, []);

  const handleAddExperienceClick = () => {
    setShowExperienceForm((prev) => !prev);
    window.scrollTo({
      top: formRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  return (
    <>
      <Navbar />
      <div className={`flex flex-col items-center justify-start ${showExperienceForm ? "h-auto" : "min-h-screen"} bg-gray-800`}>
        <div
          className="rounded-lg border shadow-sm w-full max-w-2xl mx-auto bg-gray-900 text-white"
          data-v0-t="card"
        >
          <div className="space-y-1.5 p-6 flex flex-col items-start">
            <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight text-white">
              Profile
            </h3>
            <p className="text-sm text-gray-300">
              Manage your profile information.
            </p>
          </div>
          <div className="p-6 space-y-4 overflow-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300">
                  Name
                </label>
                <p className="text-gray-200">{name}</p>
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300">
                  Email
                </label>
                <p className="text-gray-200">{email}</p>
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300">
                  Account Created Date
                </label>
                <p className="text-gray-200">{DateFormatting()}</p>
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300">
                  Email Verification
                </label>
                <p className="text-gray-200">False</p>
              </div>
              {data.address && (
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300">
                    Address
                  </label>
                  <p className="text-gray-200">{data.address}</p>
                </div>
              )}
              {data.Balance && (
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300">
                    Balance:
                  </label>
                  <p className="text-gray-200">{data.Balance}</p>
                </div>
              )}
            </div>
          </div>
          <div className="items-center p-6 flex justify-between ">
            <button
              onClick={handleAddExperienceClick}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-white text-black hover:bg-gray-200 hover:text-gray-900"
            >
              Add Work Experience
            </button>
            <div className="App">
              <button onClick={btnhandler} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-white text-black hover:bg-gray-200 hover:text-gray-900">
                Connect to wallet
              </button>
            </div>

<<<<<<< HEAD
=======

>>>>>>> 3aed326dd40502be225c59eec5095e40e494e2fc
          </div>
        </div>
      </div>

      
      {showExperienceForm && (
        <div ref={formRef} className="bg-gray-700 pt-5 overflow-y-hidden text-white w-full h-full">
          <div className="dark w-full max-w-lg space-y-6 text-white">
            <div className="space-y-2 w-screen">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-center pt-10">
                Profile
              </h1>
              <p className="text-gray-400 text-center">
                Update your profile information
              </p>
            </div>
            <div className="flex flex-col w-screen items-center justify-start min-h-screen p-4">
              <div className="w-full max-w-4xl bg-[#334155] text-white rounded-lg p-8">
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="role"
                      className="block text-sm font-medium mb-2"
                    >
                      Role
                    </label>
                    <select
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed text-black disabled:opacity-50"
                      id="role"
                      value={selectedRole}
                      onChange={handleRoleChange}
                    >
                      <option value="FREELANCER">Freelancer</option>
                      <option value="CLIENT">Client</option>
                    </select>
                  </div>

                  {selectedRole === "FREELANCER" && (
                    <>
                      <div>
                        <label
                          htmlFor="bio"
                          className="block text-sm font-medium mb-2"
                        >
                          Bio
                        </label>
                        <textarea
                          className="flex min-h-[80px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full text-black"
                          id="bio"
                          placeholder="Enter your bio"
                          defaultValue={""}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="headline"
                          className="block text-sm font-medium mb-2"
                        >
                          Headline
                        </label>
                        <input
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-black disabled:cursor-not-allowed disabled:opacity-50"
                          id="headline"
                          placeholder="Enter your headline"
                        />
                      </div>
                      <div>
                    <label className="block text-sm font-medium mb-2">
                      Social Media Links
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed text-black disabled:opacity-50"
                        placeholder="Link 1"
                      />
                      <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed text-black disabled:opacity-50"
                        placeholder="Link 2"
                      />
                      <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed text-black disabled:opacity-50"
                        placeholder="Link 3"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="project"
                      className="block text-sm font-medium mb-2"
                    >
                      Project
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                      id="project"
                      placeholder="Enter your project"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="project-link"
                      className="block text-sm font-medium mb-2"
                    >
                      Project Link
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                      id="project-link"
                      placeholder="Enter your project link"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="project-image"
                      className="block text-sm font-medium mb-2"
                    >
                      Project Image
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
                      id="project-image"
                      type="file"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-[#2563eb] hover:bg-[#1d4ed8]">
                      Save
                    </button>
                  </div>
                    </>
                  )}

                  {selectedRole === "CLIENT" && (
                    <>
                      <div>
                        <label
                          htmlFor="organization"
                          className="block text-sm font-medium mb-2"
                        >
                          Organization/Client
                        </label>
                        <input
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed text-black disabled:opacity-50"
                          id="organization"
                          placeholder="Enter your organization/client"
                        />
                      </div>
                    </>
                  )}

                  {/* Common fields for both roles */}
                  <div className="flex justify-end">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-[#2563eb] hover:bg-[#1d4ed8]">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
