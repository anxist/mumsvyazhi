package com.knitwearteam.backend_system.repository;

import com.knitwearteam.backend_system.model.Image;
import com.knitwearteam.backend_system.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ImageRepository extends JpaRepository<Image, Long> {
    List<Image> findAllByProduct(Optional<Product> product);
}
