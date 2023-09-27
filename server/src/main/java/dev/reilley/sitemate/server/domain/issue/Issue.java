package dev.reilley.sitemate.server.domain.issue;

import dev.reilley.sitemate.server.domain.PersistentObject;
import jakarta.persistence.Entity;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

@Entity
public class Issue extends PersistentObject {
    @NotNull
    private String title;

    @NotNull
    private String description;

    @Override
    public String toString() {
        return "Issue{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
