# Keyword-Specific Disinformation Detection Tool

## Overview

This disinformation detection tool is designed to scrape Facebook Groups for keyword-specific posts, preprocess the data, and analyze it using a trained disinformation detection model. The tool aims to detect false or misleading information related to specific keywords, offering timely and accurate results to combat the spread of disinformation.

## Features
- **Facebook Group Scraper**: Extract posts mentioning specific keywords.
- **Data Preprocessing**: Clean and structure raw data for efficient analysis.
- **Keyword-Specific Disinformation Detection**: Analyze posts using an integrated detection model.
- **Batch and Real-Time Processing**: Run the detector in real-time or on batches of data.
- **False Positive/Negative Handling**: Minimize false results through advanced filtering strategies.

## Requirements

### 1. Software Dependencies
- **Node.js** (v14 or higher)
- **Axios** for API integration
- **Request** for API integration as found in the Scraper documentation
- **Social Proxy API** for web scraping
- **dotenv** for accessing environment variables

### 2. API Requirements
- **Facebook Graph API**: For scraping Facebook Groups data.
- **Disinformation Detection API**: An external service for analyzing post content offered by The Social Proxy

### 3. Environment Variables
Create a `.env` file in the root directory with the following values:
```
FACEBOOK_GRAPH_API_KEY=<your_facebook_api_key>
DISINFORMATION_API_KEY=<your_disinformation_detection_api_key>
SCRAPER_BASE_URL=<your_facebook_scraper_base_url>
```

## Setup & Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/disinformation-detector.git
   cd disinformation-detector
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**
   Add your API keys and scraper URLs to the `.env` file.

4. **Run the Tool:**
   ```bash
   node 
   ```

## How to Use

### 1. Scraping Facebook Groups Data
Run the scraper to extract posts mentioning your specified keyword:
```bash
node index.js.js //replace keyword in the API call with your preferred keyword
```

### 2. Running the Disinformation Detector
Once the posts are scraped, run the disinformation detection model:
```bash
node step3.js and cleanData.js
```

## Future Features
- **Visualization**: Add dashboards for a visual interpretation of keyword-specific results.
- **Enhanced Scraping**: Support for more platforms beyond Facebook Groups.

## License
This project is licensed under the MIT License.

## Contact
For any issues or contributions, feel free to submit a pull request or contact us at [support@example.com](mailto:support@example.com). 

---

**Note**: For a better scraping experience and to handle Facebook scraping efficiently, consider using [The Social Proxy](https://thesocialproxy.com).
