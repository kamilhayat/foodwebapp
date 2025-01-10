import { React, useState, useEffect } from 'react'


const About = () => {

  const [aboutData, setAboutData] = useState({});
  useEffect(() => {
    fetchData();

  }, []);
  const fetchData = async () => {
    try{
      const data = await fetch("https://api.github.com/users/kamilhayat")
      const jsonData = await data.json();
      // console.log(jsonData);
      setAboutData(jsonData);

    }catch(error){
      console.error("Error fetching data:", error.message);
    }
  }
  

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
    <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="flex justify-center">
          <img
            src={aboutData.avatar_url}
            alt="User Avatar"
            className="w-32 h-32 rounded-full border-4 border-blue-500"
          />
        </div>
        <h1 className="text-center text-2xl font-bold mt-4 text-gray-800">
          {aboutData.name || "Name not available"}
        </h1>
        <p className="text-center text-gray-600 mt-2">
          {aboutData.bio || "Bio not available"}
        </p>
        <div className="mt-6">
          <div className="flex items-center mb-3">
            <span className="text-gray-600 font-semibold">Location:</span>
            <span className="ml-2 text-gray-800">
              {aboutData.location || "Not available"}
            </span>
          </div>
          <div className="flex items-center mb-3">
            <span className="text-gray-600 font-semibold">Portfolio:</span>
            <a
              href={aboutData.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-blue-500 hover:underline"
            >
              {aboutData.blog || "Not available"}
            </a>
          </div>
          <div className="flex items-center mb-3">
            <span className="text-gray-600 font-semibold">Twitter:</span>
            <a
              href={`https://twitter.com/${aboutData.twitter_username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-blue-500 hover:underline"
            >
              {aboutData.twitter_username || "Not available"}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About