package com.spring.resource_service.repositories;

import com.spring.resource_service.entities.StaticResource;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface IStaticResourceRepository extends MongoRepository<StaticResource, String> {
}
