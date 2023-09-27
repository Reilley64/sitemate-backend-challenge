package dev.reilley.sitemate.server.resource;

import jakarta.validation.Path;
import lombok.Getter;

import java.util.Map;

@Getter
public class BadRequestException {
    private final String title = "Bad request";
    private final Integer status = 400;
    private final Map<Path, String> detail;

    public BadRequestException(Map<Path, String> detail) {
        this.detail = detail;
    }
}
