Weather App Full Stack
This project is a secure full-stack web application that retrieves and displays weather information for multiple cities. The backend is built using Spring Boot and the frontend uses React. Authentication is integrated using Auth0 to ensure that only authorized users can access the weather data.

The backend reads city codes from a JSON file and fetches weather data from the OpenWeatherMap API. Since the free tier of the OpenWeatherMap API does not support the /group endpoint to fetch multiple cities’ weather in one request, the backend makes separate calls to the /weather endpoint for each city and then combines the results. This workaround allows the application to function fully within the free API limits.

On the frontend, users must log in via Auth0 to view the weather data. Multi-Factor Authentication (MFA) is enabled for additional security. The React app displays the weather information in a responsive and user-friendly interface.

Setup Instructions
Backend
Set your OpenWeatherMap API key in the application.properties file under the key weather.api.key.

Run the backend service using your IDE or by running ./mvnw spring-boot:run in the backend directory.

Frontend
Navigate to the frontend folder.

Install dependencies by running npm install.

Start the React development server with npm start.

Authentication
The app uses Auth0 for authentication. Only registered users can access the weather data, and MFA is enforced to enhance security.