package dev.reilley.sitemate.server.domain.issue;

import dev.reilley.sitemate.server.resource.CreateIssueRequest;
import dev.reilley.sitemate.server.resource.UpdateIssueRequest;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@AllArgsConstructor
@Log4j2

@Service
public class IssueService {
    private final IssueRepository issueRepository;

    public Issue create(@NotNull CreateIssueRequest request) {
        Issue issue = new Issue();
        issue.setTitle(request.getTitle());
        issue.setDescription(request.getDescription());
        issue = issueRepository.save(issue);
        log.info("Created issue: {}", issue);
        return issue;
    }

    public Issue read(@NotNull Long id) {
        return issueRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, String.format("Issue with ID %s not found", id)));
    }


    public Issue update(@NotNull Issue issue, @NotNull UpdateIssueRequest request) {
        issue.setTitle(request.getTitle());
        issue.setDescription(request.getDescription());
        issue = issueRepository.save(issue);
        log.info("Updated issue: {}", issue);
        return issue;
    }

    public void delete(@NotNull Issue issue) {
        issueRepository.delete(issue);
        log.info("Deleted issue: {}", issue);
    }
}
