package com.spring.resource_service.controllers;

import com.spring.resource_service.entities.StaticResource;
import com.spring.resource_service.responses.CustomApiResponse;
import com.spring.resource_service.responses.GameApi;
import com.spring.resource_service.services.StaticResourceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/static_resources")
public class StaticResourceController {
    @Autowired
    private StaticResourceService resourceService;

    @PostMapping
    public CustomApiResponse saveOrUpdate(@RequestBody String jsonData){
        StaticResource result = resourceService.saveOrUpdateResource(jsonData);
        System.out.println(result);
        return GameApi.createResponse("Update successfull !","Error update", result);
    }

    @GetMapping
    public CustomApiResponse getResourse(){
        String res = resourceService.getResource();
        return  GameApi.createResponse("Get data successfull", "Null data", res);
    }
}
