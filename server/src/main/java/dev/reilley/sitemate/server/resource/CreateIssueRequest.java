package dev.reilley.sitemate.server.resource;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class CreateIssueRequest {
    @NotNull
    private String title;

    @NotNull
    private String description;
}
