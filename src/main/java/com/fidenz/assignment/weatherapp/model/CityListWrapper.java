package com.fidenz.assignment.weatherapp.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;

public class CityListWrapper {

    @JsonProperty("List")
    private List<City> list;

    public List<City> getList() {
        return list;
    }
    public void setList(List<City> list) {
        this.list = list;
    }
}
