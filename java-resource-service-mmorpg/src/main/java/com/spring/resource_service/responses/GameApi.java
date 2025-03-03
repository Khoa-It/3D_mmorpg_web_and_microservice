package com.spring.resource_service.responses;


import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class GameApi {
    public static CustomApiResponse createResponse(String success, String error, Object data) {
        String message = data != null ? success : error;
        return new CustomApiResponse(message, data);
    }
}
