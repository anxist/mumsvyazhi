package com.knitwearteam.backend_system.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;
@Entity
@Table(name = "users")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;//идентификатор
    @Column(name = "name")
    private String name;//имя
    @Column(name = "username")
    private String userName;//имя
    @Column(name = "chatID")
    private Long chatID;//идентификатор

    @ToString.Exclude
    @JsonIgnore
    @OneToMany(fetch = FetchType.EAGER)
    private List<Product> products = new ArrayList<>();

    @PrimaryKeyJoinColumn
    @ToString.Exclude
    @JsonIgnore
    @OneToOne(fetch = FetchType.EAGER)
    private BespokenCustom bespokenCustom;

}
