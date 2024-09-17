import fs from 'fs';
import path from 'path';
import util from 'util';
import dotenv from "dotenv";

dotenv.config();


(async () => {
    const cwd = process.cwd();

    try {
        const readFile = util.promisify(fs.readFile);
        const feedJsonPath = path.join(cwd, 'feeds.json');
        const feedJson = await readFile(feedJsonPath);
        const feeds = JSON.parse(feedJson);

        const gfEdges = feeds.map((node) => {
            const { group_feed } = node;
            return group_feed.edges;
        });

        const edges = gfEdges[0];
       // console.log('start of data mapping');
        const data = edges.map((items) => {
            const node = items.node;
            return {
                id: node.id,
                message: node.message && node.message.text,
                url: node.url,
                postId: node.post_id,
                reactionCount: node.feedback && node.feedback.reactors.count,
                likeCounts: node.feedback && node.feedback.likers.count,
                reshares: node.feedback && node.feedback.reshares.count,
            };
        });

        data.splice(0, 1);
       // console.log(data);
    } catch (e) {
        console.error(`Error reading file ${e.message}`);
    }
})();

//the clean data is displayed on the console
const cleanGroupFeed = [
    {
        id: 'UzpfSTEwMDAzMDY1MzM3NzUzNjpWSzoyNzAyMzMwODUwMzkzNDI1OA',
        message: "Why choose GFOXX Spirulina? 🤔  ➡️  𝐂𝐁a556790918 is cultivated from the world's largest algae farm! It undergoes a 1-step producion process to ensure its high quality. Because of this, it obtained multiple certifications from various quality inspection institutions worldwide. All the more that you should consider this safe and effeci𝐯e product 👌💯    ❗ Know your source. It's not just your ordinary spirulina; it's 𝐆𝐅𝐎𝐗𝐗 𝐒𝐏𝐈𝐑𝐔𝐋𝐈𝐍𝐀! 💚  #SpirulinaWithProbiotics #gfoxxinternationalproducts #SuperfoodSupplements #follower",
        url: 'https://www.facebook.com/groups/CureOfCancer/permalink/27023308503934258/',
        postId: '27023308503934258',
        reactionCount: 0,
        likeCounts: 0,
        reshares: 0
    },
    {
        id: 'UzpfSTYxNTU2NjcyNDIyNTE0OlZLOjI3MDIyNTM5MjEwNjc3ODU0',
        message: "Skye's Med Bed",
        url: 'https://www.facebook.com/groups/CureOfCancer/permalink/27022539210677854/',
        postId: '27022539210677854',
        reactionCount: 0,
        likeCounts: 0,
        reshares: 0
    },
    {
        id: 'UzpfSTEwMDA2NzE3Mjc2Njg2NzpWSzoyNzAxMDE2Nzk1ODU4MTY0Ng',
        message: 'Liver Cancer and TACE AND Treatment #livercancer #liver #cancer #cancercare #fyp #reels #foryou #CancerAwareness #cancersurvivor #CancerResearch',
        url: 'https://www.facebook.com/groups/CureOfCancer/permalink/27010167958581646/',
        postId: '27010167958581646',
        reactionCount: 1,
        likeCounts: 1,
        reshares: 0
    },
    {
        id: 'UzpfSTYxNTUxNjE0MTEyMDc4OlZLOjI2OTk5MTMxNzk2MzUxOTI5',
        message: null,
        url: 'https://www.facebook.com/groups/CureOfCancer/permalink/26999131796351929/',
        postId: '26999131796351929',
        reactionCount: 0,
        likeCounts: 0,
        reshares: 0
    },
    {
        id: 'UzpfSTEwMDA2NDI3NTMwNTIxNDpWSzoyNjk5ODIwNDIzOTc3ODAxOA',
        message: null,
        url: 'https://www.facebook.com/groups/CureOfCancer/permalink/26998204239778018/',
        postId: '26998204239778018',
        reactionCount: 0,
        likeCounts: 0,
        reshares: 0
    },
    {
        id: 'UzpfSTYxNTUxMDE0NDgxNTcwOlZLOjI2OTk0NDY0ODg2ODE4NjIw',
        message: "🇯🇫🇷 **DOCTOR-W MASSAGE OILS**    *Originally developed for cancer patients, but these oils will elevate your life, too!*    Unlock the ultimate in relaxation, nourishment, and luxurious skincare with our exclusive range of aromatherapy oils, designed not only to soothe the body but also to uplift the soul. Originally crafted with cancer patients in mind, these blends combine healing ingredients with the finest essential oils to deliver deep benefits while transforming your self-care routine into a blissful experience.     Each bottle is infused with:    - **Castor Oil**: Deeply hydrates and nourishes the skin  - **Arnica Oil**: Relieves tired muscles and supports recovery  - **Vitamins D3 & E**: Enhances skin health and radiance    These oils are more than just a treat for the skin||they're a complete sensory experience, perfect for massage, daily moisturization, or simply for their beautiful, natural scent.    ✨ **Special Offer: Half Price Until December 31, 2024**    Get a 120ml bottle for just $20 and enjoy an aromatic journey with the following varieties:    **Varieties:**    - Amber    - Basil    - Bay Laurel    - Bay Laurel + Pine Needle    - Bay Laurel + Juniper    - Bergamot    - Calendula    - Chamomile    - Chrism    - Citrus Paradise    - Dragon Blood    - Eucalyptus    - Eucalyptus + Camphor    - Eucalyptus + Juniper    - Frankincense + Myrrh    - Grapefruit    - Holy Basil    - Hyssop    - Hyssop + Camphor    - Hyssop + Eucalyptus    - Lavender    - Lemon    - Lemon + Eucalyptus    - Lime    - Mandarin    - Mandragora    - Maychang    - Neroli    - Orange    - Palo Santo    - Palo Santo + Camphor    - Pine Needle    - Pine Needle + Camphor    - Seven Thieves    - White Sage    - White Sage + Peppermint      Treat yourself or a loved one to the gift of luxurious wellness. DM to order now and let these oils elevate your everyday rituals!",
        url: 'https://www.facebook.com/groups/CureOfCancer/permalink/26994464886818620/',
        postId: '26994464886818620',
        reactionCount: 0,
        likeCounts: 0,
        reshares: 0
    },
    {
        id: 'UzpfSTYxNTUxODgyNjA0NjE2OlZLOjI2OTk0MTA3MTYwMTg3NzI2',
        message: "Thank heavens! I'm cancer free!  I just got cured of stage 4 breast cancer.   I'm so grateful. Indeed, herbal medicine works.",
        url: 'https://www.facebook.com/groups/CureOfCancer/permalink/26994107160187726/',
        postId: '26994107160187726',
        reactionCount: 3,
        likeCounts: 2,
        reshares: 0
    },
    {
        id: 'UzpfSTYxNTYyNDA3Njc0OTM2OlZLOjI2OTkzMTA4NzE2OTU0MjM3',
        message: null,
        url: 'https://www.facebook.com/groups/CureOfCancer/permalink/26993108716954237/',
        postId: '26993108716954237',
        reactionCount: 0,
        likeCounts: 0,
        reshares: 0
    },
    {
        id: 'UzpfSTEwMDA4ODkwNTM4NTU0NDpWSzoyNTAzMDgzMDYwNjUxNTQwMQ',
        message: "Good day everyone. This post is mainly to educate those people who don't know the difference between HPV and HSV.    HPV is a type of warts that is caused by Human Papilloma Virus and there are different strains of HPV but the most commonly one is the Oral wart. The symptoms are usually bumps around the genitals. It grows and multiply over time of not properly treated or cured.    HSV is another type of STDs. HSV can stay dormant in the body for years without getting any symptoms and you will be able to transfer the virus through S3x, Oral contact and kiss. It's is very important to be able to differentiate one from the other.    There's a narrative that no cure to these aforementioned diseases. That's not true. We have been providing solutions to this virus right from ages till now.    Do you have any of them? Stop being worried about that. Get my herbal supplements and eradicate that virus from your system as soon as possible call/ Whatsapp+2349038057418",
        url: 'https://www.facebook.com/groups/CureOfCancer/permalink/25030830606515401/',
        postId: '25030830606515401',
        reactionCount: 1,
        likeCounts: 1,
        reshares: 0
    },
    {
        id: 'UzpfSTYxNTU2NjcyNDIyNTE0OlZLOjI2OTgwMTM4NDQ0OTE3OTMx',
        message: "Skye's Med Bed",
        url: 'https://www.facebook.com/groups/CureOfCancer/permalink/26980138444917931/',
        postId: '26980138444917931',
        reactionCount: 0,
        likeCounts: 0,
        reshares: 0
    },
    {
        id: 'UzpfSTEwMDA2NDI3NTMwNTIxNDpWSzoyNjk3NzY4NTExODQ5NjU5Nw',
        message: null,
        url: 'https://www.facebook.com/groups/CureOfCancer/permalink/26977685118496597/',
        postId: '26977685118496597',
        reactionCount: 0,
        likeCounts: 0,
        reshares: 0
    },
    {
        id: 'UzpfSTEwMDA2NDI3NTMwNTIxNDpWSzoyNjk2NzIwNDUwNjIxMTMyNQ',
        message: null,
        url: 'https://www.facebook.com/groups/CureOfCancer/permalink/26967204506211325/',
        postId: '26967204506211325',
        reactionCount: 2,
        likeCounts: 2,
        reshares: 0
    },
    {
        id: 'UzpfSTYxNTU2NjcyNDIyNTE0OlZLOjI2OTYzNTM2NDI5OTExNDY2',
        message: "Skye's Med Bed",
        url: 'https://www.facebook.com/groups/CureOfCancer/permalink/26963536429911466/',
        postId: '26963536429911466',
        reactionCount: 0,
        likeCounts: 0,
        reshares: 0
    },
    {
        id: 'UzpfSTEwMDA1MjQ5NTA4NjgwNzpWSzoyNjk2MjM3NjQzMzM2MDc5OQ',
        message: null,
        url: 'https://www.facebook.com/groups/CureOfCancer/permalink/26962376433360799/',
        postId: '26962376433360799',
        reactionCount: 0,
        likeCounts: 0,
        reshares: 0
    },
    {
        id: 'UzpfSTEwMDA2NDI3NTMwNTIxNDpWSzoyNjk2MTM2NjI2Njc5NTE0OQ',
        message: null,
        url: 'https://www.facebook.com/groups/CureOfCancer/permalink/26961366266795149/',
        postId: '26961366266795149',
        reactionCount: 0,
        likeCounts: 0,
        reshares: 0
    },
    {
        id: 'UzpfSTEwMDA2NDI3NTMwNTIxNDpWSzoyNjk1NzMxNDY4MDUzMzY0MQ',
        message: null,
        url: 'https://www.facebook.com/groups/CureOfCancer/permalink/26957314680533641/',
        postId: '26957314680533641',
        reactionCount: 0,
        likeCounts: 0,
        reshares: 0
    },
    {
        id: 'UzpfSTYxNTYyNDA3Njc0OTM2OlZLOjI2OTU1NzU1NzA3MzU2MjA1',
        message: null,
        url: 'https://www.facebook.com/groups/CureOfCancer/permalink/26955755707356205/',
        postId: '26955755707356205',
        reactionCount: 0,
        likeCounts: 0,
        reshares: 0
    },
    {
        id: 'UzpfSTE0NTMyOTA1NjE6Vks6MjY5NTM0NDgxMTc1ODY5NjQ',
        message: 'https://conta.cc/3Xp66xI',
        url: 'https://www.facebook.com/groups/CureOfCancer/permalink/26953448117586964/',
        postId: '26953448117586964',
        reactionCount: 0,
        likeCounts: 0,
        reshares: 0
    },
    {
        id: 'UzpfSTEwMDA3MzM1MDU1MzgxODpWSzoyNjkxNDc1NzQ3NDc4OTM2Mg',
        message: "Hi everyone,    One of the hardest parts of battling cancer can be dealing with well-meaning but sometimes insensitive comments from others. It's tough when people say things like 'be more positive' or 'there are people worse off,' even though they mean well.    What truly helps is connecting with others who understand the depth of what we're going through. On this site, we have a community of people who have experienced cancer firsthand and can offer genuine empathy and support. It's comforting to share our struggles with those who truly understand.    If you're looking for additional resources or just want to connect with others who get it, **[www.oncostore.com](http://www.oncostore.com/)** is here to support you with a range of medications and products.    Wishing you all strength and understanding.👕",
        url: 'https://www.facebook.com/groups/CureOfCancer/permalink/26914757474789362/',
        postId: '26914757474789362',
        reactionCount: 0,
        likeCounts: 0,
        reshares: 0
    },
    {
        id: 'UzpfSTYxNTU2NjcyNDIyNTE0OlZLOjI2OTQ1MjY0MTcxNzM4Njky',
        message: "Skye's Med Bed",
        url: 'https://www.facebook.com/groups/CureOfCancer/permalink/26945264171738692/',
        postId: '26945264171738692',
        reactionCount: 0,
        likeCounts: 0,
        reshares: 0
    },
    {
        id: 'UzpfSTEwMDA2NDI3NTMwNTIxNDpWSzoyNjkzOTcwNDIxNTYyODAyMQ',
        message: null,
        url: 'https://www.facebook.com/groups/CureOfCancer/permalink/26939704215628021/',
        postId: '26939704215628021',
        reactionCount: 0,
        likeCounts: 0,
        reshares: 0
    },
    {
        id: 'UzpfSTEwMDA2NDI3NTMwNTIxNDpWSzoyNjkzODg1NTQyMjM3OTU2Nw',
        message: null,
        url: 'https://www.facebook.com/groups/CureOfCancer/permalink/26938855422379567/',
        postId: '26938855422379567',
        reactionCount: 0,
        likeCounts: 0,
        reshares: 0
    },
    {
        id: 'UzpfSTYxNTU2NjcyNDIyNTE0OlZLOjI2OTI5MTA1OTkzMzU0NTEw',
        message: "Skye's Med Bed",
        url: 'https://www.facebook.com/groups/CureOfCancer/permalink/26929105993354510/',
        postId: '26929105993354510',
        reactionCount: 0,
        likeCounts: 0,
        reshares: 0
    },
    {
        id: 'UzpfSTEwMDA0NDI3MDYwMDQ5MDpWSzoyNjkyNjgzMDcwMDI0ODcwNg',
        message: null,
        url: 'https://www.facebook.com/groups/CureOfCancer/permalink/26926830700248706/',
        postId: '26926830700248706',
        reactionCount: 0,
        likeCounts: 0,
        reshares: 0
    },
    {
        id: 'UzpfSTEwMDA1MjQ5NTA4NjgwNzpWSzoyNjkyNjA2MTIxMDMyNTY1NQ',
        message: null,
        url: 'https://www.facebook.com/groups/CureOfCancer/permalink/26926061210325655/',
        postId: '26926061210325655',
        reactionCount: 0,
        likeCounts: 0,
        reshares: 0
    },
    {
        id: 'UzpfSTEwMDA1MjQ5NTA4NjgwNzpWSzoyNjkyNjA1ODk5MDMyNTg3Nw',
        message: null,
        url: 'https://www.facebook.com/groups/CureOfCancer/permalink/26926058990325877/',
        postId: '26926058990325877',
        reactionCount: 0,
        likeCounts: 0,
        reshares: 0
    },
    {
        id: 'UzpfSTEwMDA2NDI3NTMwNTIxNDpWSzoyNjkxOTE2MjY3NzY4MjE3NQ',
        message: null,
        url: 'https://www.facebook.com/groups/CureOfCancer/permalink/26919162677682175/',
        postId: '26919162677682175',
        reactionCount: 0,
        likeCounts: 0,
        reshares: 0
    },
    {
        id: 'UzpfSTEwMDA2NDI3NTMwNTIxNDpWSzoyNjkxNTY0NTMxODAzMzkxMQ',
        message: null,
        url: 'https://www.facebook.com/groups/CureOfCancer/permalink/26915645318033911/',
        postId: '26915645318033911',
        reactionCount: 0,
        likeCounts: 0,
        reshares: 0
    },
    {
        id: 'UzpfSTYxNTU2NjcyNDIyNTE0OlZLOjI2OTE1NDQ2MTIxMzg3MTY0',
        message: "Skye's Med Bed",
        url: 'https://www.facebook.com/groups/CureOfCancer/permalink/26915446121387164/',
        postId: '26915446121387164',
        reactionCount: 0,
        likeCounts: 0,
        reshares: 0
    }
]

//take the clean and pass it to the scraper for it to analyse the posts
//Step 4: Building a Keyword-Specific Disinformation Detection Model and false information integration


// Function to make an API call using the group's post ID to fetch false information
import axios from 'axios';// Ensure axios is installed

const fetchFalseInformation = async (cleanGroupFeedId) => {
    const url = process.env.BASE_URL;
    const SCRAPER_CONSUMER_KEY = process.env.SCRAPER_CONSUMER_KEY // Replace with actual consumer key
    const SCRAPER_CONSUMER_SECRET = process.env.SCRAPER_CONSUMER_SECRET; // Replace with actual consumer secret

    try {
        const response = await axios.get(`${url}posts/false-information`, {
            params: {
                consumer_key: SCRAPER_CONSUMER_KEY,
                consumer_secret: SCRAPER_CONSUMER_SECRET,
                postId: 26929105993354510,
            },
            headers: {
                'Content-Type': 'application/json',
            },
        });
       // console.log(response.data); // Axios uses `data` to return the response body
        return response.data;
    } catch (error) {
        console.error('Error fetching false information:', error.message);
        throw error;
    }
};


// Main function to loop through the array of group feeds and update each with false info data
const updateGroupFeedsWithFalseInfo = async (cleanGroupFeeds) => {
    const updatedFeeds = await Promise.all(
        cleanGroupFeeds.map(async (feed) => {
            //console.log(feed.postId)
            const falseInfoData = await fetchFalseInformation(feed.postId); // Fetch false info for the feed
            //console.log(falseInfoData)
            return {
                ...feed, // Keep the original feed data
                falseInfoData   // Add the false info data to the feed object
            };
        })
    );

    return updatedFeeds;
};

// Call the function and process the results
updateGroupFeedsWithFalseInfo(cleanGroupFeed)
    .then(updatedFeeds => {
        console.log("Updated Feeds with False Information Data:", updatedFeeds);
        // Further processing of the updated feeds can be done here
    })
    .catch(error => {
        console.error("Error updating feeds with false information:", error);
    });

