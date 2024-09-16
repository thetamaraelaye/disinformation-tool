//import the dotenv module
import dotenv from "dotenv";
dotenv.config();

//import the request module
import request from "request";


//import the nodejs inbuilt file system
import fs from "fs";

//import the data set for group data
import { groupData } from "./groupData.js"; 

//get the env variables from the env file
const SCRAPER_CONSUMER_KEY = process.env.SCRAPER_CONSUMER_KEY;
const SCRAPER_CONSUMER_SECRET = process.env.SCRAPER_CONSUMER_SECRET;
const url = process.env.BASE_URL;

// Step 3: Data Preprocessing and Keyword-Specific Analysis
//we already have the dataset of groups that discuss about keyword in groupData.js

//we will get the group feed of the group with the hughest number of posts, members and fequency


// Sample input data from the Facebook Groups API (parsed JSON string)

const parsedGroupData = groupData;

// Keywords to search for in group names or info
const keywords = ["cancer", "cure", "natural"];

// Step 1: Helper function to clean and process member count strings
const parseMembers = (membersString) => {
    if (membersString.includes("K")) return parseFloat(membersString) * 1000;
    if (membersString.includes("M")) return parseFloat(membersString) * 1000000;
    return parseInt(membersString, 10);
};

// Step 2: Helper function to get the number of posts per day from the group info
const getPostsPerDay = (groupInfo) => {
    const postsMatch = groupInfo.match(/(\d+)\s+posts\s+(a\s+day|a\s+month|a\s+year)/);
    if (!postsMatch) return 0;

    const [ , postCount, period ] = postsMatch;
    const count = parseInt(postCount, 10);

    switch (period) {
        case 'a day':
            return count;
        case 'a month':
            return count / 30; // Approximate posts per day
        case 'a year':
            return count / 365; // Approximate posts per day
        default:
            return 0;
    }
};

// Step 3: Process the group data and filter relevant groups
const processedData = parsedGroupData.map((group) => {
    const memberCount = parseMembers(group.members);
    
    // Check if the group name or info contains any of the keywords
    const matchesKeywords = keywords.some((keyword) => 
        group.name.toLowerCase().includes(keyword.toLowerCase()) ||
        group.info.toLowerCase().includes(keyword.toLowerCase())
    );

    //check if it is a public group
    if (!group.privacy) return null;

    return {
        id: group.id,
        name: group.name,
        url: group.url,
        photoUrl: group.photoUrl,
        members: memberCount,
        postsPerDay: getPostsPerDay(group.info), // Calculate posts per day
        privacy: group.privacy,
        matchesKeywords,
    };
});

// Step 4: Filter groups that match the keyword criteria
const keywordSpecificGroups = processedData.filter(group => group.matchesKeywords);

// Step 5: Find the group with the highest post frequency per day
const findIdealGroup = (processedData) => {
    // Filter groups that are public
    const publicGroups = processedData.filter(group => group.privacy === 'Public');
  
    if (publicGroups.length === 0) {
      console.log("No public groups found.");
      return null;
    }
  
    // Sort groups by the highest postsPerDay in descending order
    const sortedGroups = publicGroups.sort((a, b) => b.postsPerDay - a.postsPerDay);
  
    // Return the group with the highest post frequency (first in sorted array)
    return sortedGroups[0];
  };

// Step 6: Display or log the ideal group with the highest posts per day
const idealGroup = findIdealGroup(processedData);

if (idealGroup) {
  console.log("Ideal Group:", idealGroup);
} else {
  console.log("No suitable group found.");
}

// Step 7: Save the ideal group data to a file
fs.writeFileSync("idealGroup.json", JSON.stringify(idealGroup, null, 2));

// Step 8: Prepare for fetching posts from the ideal group using its ID



// // Step 9: Fetch the posts data from the selected group with the key word 


let groupFeed = {
    'method': "POST",
    'url': `${url}groups/feed?consumer_key=${SCRAPER_CONSUMER_KEY}&consumer_secret=${SCRAPER_CONSUMER_SECRET}&groupId=${244810232210782}`,
    'headers': {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        page_size: 30,
        ranking_setting: "TOP_POSTS",
        typed_query: "natural cures to cancer",
    }),
};
request.post(groupFeed, (error, response, body) => {
    if (error) {
        console.error("Error fetching group feed:", error);
        return;
    }

    const postsData = response.body
    console.log("Fetched Posts Data:", postsData);
    fs.writeFileSync("idealGroupFeed.js")
});
