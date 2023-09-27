package dev.reilley.sitemate.server.domain;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

@MappedSuperclass
public abstract class PersistentObject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;
}
