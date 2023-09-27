package dev.reilley.sitemate.server.resource;

import dev.reilley.sitemate.server.domain.issue.Issue;
import dev.reilley.sitemate.server.domain.issue.IssueService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor

@RestController
@RequestMapping("issues")
@CrossOrigin("*")
public class IssueRestController {
    private final IssueService service;

    @PostMapping
    public Issue create(CreateIssueRequest request) {
        return service.create(request);
    }

    @GetMapping("{id}")
    public Issue read(@PathVariable Long id) {
        return service.read(id);
    }

    @PutMapping("{id}")
    public Issue update(@PathVariable Long id, UpdateIssueRequest request) {
        return service.update(this.read(id), request);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        service.delete(this.read(id));
    }
}
