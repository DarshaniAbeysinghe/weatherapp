package com.fidenz.assignment.weatherapp.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@Service
public class WeatherService {

    private final CityService cityService;
    private final RestTemplate restTemplate;
    private final String apiKey;

    public WeatherService(CityService cityService,
                          @Value("${weather.api.key}") String apiKey) {
        this.cityService = cityService;
        this.apiKey = apiKey;
        this.restTemplate = new RestTemplate();
    }


    @Cacheable(value = "weatherCache", unless = "#result == null")
    public List<Object> getWeatherData() {
        List<String> cityCodes = cityService.getCityCodes();
        List<Object> weatherDataList = new ArrayList<>();

        if (cityCodes.isEmpty()) {
            throw new RuntimeException("Nor city codes available.");
        }

        for (String cityId : cityCodes) {
            String url = "https://api.openweathermap.org/data/2.5/weather?id=" + cityId + "&units=metric&appid=" + apiKey;
            try {
                Object response = restTemplate.getForObject(url, Object.class);
                weatherDataList.add(response);
            } catch (Exception e) {
                System.err.println("Failed: " + cityId + "  " + e.getMessage());
            }
        }

        return weatherDataList;
    }
}
