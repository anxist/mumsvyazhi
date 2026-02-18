package com.knitwearteam.backend_system.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "bespoken-customs")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class BespokenCustom {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;//идентификатор
    @Column(name = "description", columnDefinition = "text")
    private String description;//описание

    @ToString.Exclude
    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER,
            mappedBy = "bespokenCustom")
    private List<Image> images = new ArrayList<>();

    @ToString.Exclude
    @JsonIgnore
    @OneToOne(fetch = FetchType.EAGER)
    @PrimaryKeyJoinColumn
    private Customer customer;

    public void addImageToCustom(Image image) {
        image.setBespokenCustom(this);
        images.add(image);
    }
}
