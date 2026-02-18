package com.knitwearteam.backend_system.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "products")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;//идентификатор
    @Column(name = "title")
    private String title;//название товара
    @Column(name = "description", columnDefinition = "text")
    private String description;//описание
    @Column(name = "price")
    private int price;//цена
    @ToString.Exclude
    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER,
    mappedBy = "product")
    private List<Image> images = new ArrayList<>();
    private Long previewImageId;

    public void addImageToProduct(Image image) {
        image.setProduct(this);
        images.add(image);
    }
} 
