package com.spring.resource_service.services;

import com.spring.resource_service.entities.StaticResource;
import com.spring.resource_service.repositories.IStaticResourceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StaticResourceService {
    @Autowired
    private IStaticResourceRepository iResourceRepository;
    private static final String STATIC_RESOURCE_ID = "static_data";

    public StaticResource saveOrUpdateResource(String jsonData){
        Optional<StaticResource> existingResource = iResourceRepository.findById(STATIC_RESOURCE_ID);
        if (existingResource.isPresent()) {
            StaticResource staticResource = existingResource.get();
            staticResource.setJsonData(jsonData);
            return iResourceRepository.save(staticResource);
        }
        StaticResource newStaticResource = new StaticResource(STATIC_RESOURCE_ID, jsonData);
        return iResourceRepository.save(newStaticResource);
    }

    public String getResource(){
        Optional<StaticResource> staticResource = iResourceRepository.findById(STATIC_RESOURCE_ID);
        return staticResource.map(item -> item.getJsonData()).orElse(null);
    }
}
