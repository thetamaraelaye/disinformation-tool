//import the dotenv module
import dotenv from "dotenv";
dotenv.config();
//import the request module
import request from "request";
//import the nodejs inbuilt file system
import fs from "fs";

//get the env variables from the env file
const SCRAPER_CONSUMER_KEY = process.env.SCRAPER_CONSUMER_KEY;
const SCRAPER_CONSUMER_SECRET = process.env.SCRAPER_CONSUMER_SECRET;
const url = process.env.BASE_URL;

//create a variable for storing the group data
let groupsData;
//api call to get groups that discuss about keyword --- "natural remedies for cancer"
let options = {
  method: "POST",
  //use string literals to construct the url
  url: `${url}search/groups?consumer_key=${SCRAPER_CONSUMER_KEY}&consumer_secret=${SCRAPER_CONSUMER_SECRET}`,
  headers: {
    "Content-Type": "application/json",
  },
  //the body of the request will contain the key word
  body: JSON.stringify({
    page_size: 30,
    typed_query: "natural cures to cancer",
  }),
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  groupsData = response.body;
  const parsedGroupData = JSON.parse(groupsData);
  console.log(groupsData);

  try {
    // console.log(parsedGroupData, "parsedGroupData"); //data is parsed incorrectly due to its comples structure
    // Loop through results and log each object
    parsedGroupData.data.results.forEach((result, index) => {
      const cleanedResults = parsedGroupData.data.results.map(
        (result, index) => {
          // Extracting relevant fields and cleaning data
          const cleanedData = {
            id: result.id || `Missing ID: ${index + 1}`, // Ensure ID is available, fallback if missing
            name: result.name ? result.name.trim() : `No Name`, // Remove any extra spaces from name
            description: result.description
              ? result.description.trim()
              : `No Description`, // Remove any extra spaces from description, if present
            url: result.url || `Missing URL: ${index + 1}`, // Ensure URL is available, fallback if missing
            photoUrl: result.photo_url || `Missing Photo URL: ${index + 1}`, // Ensure photo URL is available, fallback if missing
            info: result.info || `Missing Info: ${index + 1}`, // Ensure info is available, fallback if missing\
            members: result.members || `Missing Members: ${index + 1}`, // Ensure members is available, fallback if missing
            privacy: result.privacy || `Missing Privacy: ${index + 1}`, // Ensure privacy is available, fallback if missing
          };

          // You can perform additional checks or data cleaning here if needed
          return cleanedData;
        }
      );

      // Write cleaned data to a JSON file
      fs.writeFileSync("groupData.js", JSON.stringify(cleanedResults, null, 2));
    });
  } catch (error) {
    console.error("Error parsing JSON data:", error.message);
    return;
  }
});
