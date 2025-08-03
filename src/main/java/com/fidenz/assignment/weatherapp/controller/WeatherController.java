package com.fidenz.assignment.weatherapp.controller;

import com.fidenz.assignment.weatherapp.service.WeatherService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class WeatherController {

    private final WeatherService weatherService;

    public WeatherController(WeatherService weatherService) {

        this.weatherService = weatherService;
    }


    @GetMapping("/weather")
    public ResponseEntity<List<Object>> getWeather() {
        List<Object> weatherData = weatherService.getWeatherData();
        return ResponseEntity.ok(weatherData);
    }

}
