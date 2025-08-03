package com.fidenz.assignment.weatherapp.service;

import com.fidenz.assignment.weatherapp.model.CityListWrapper;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

import java.io.InputStream;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CityService {

    public List<String> getCityCodes() {
        try {
            ObjectMapper mapper = new ObjectMapper();
            InputStream inputStream = getClass().getClassLoader().getResourceAsStream("cities.json");

            CityListWrapper wrapper = mapper.readValue(inputStream, CityListWrapper.class);

            return wrapper.getList().stream()
                    .map(city -> city.getCityCode())
                    .collect(Collectors.toList());

        } catch (Exception e) {
            throw new RuntimeException("Failed to read city codes", e);
        }
    }
}
