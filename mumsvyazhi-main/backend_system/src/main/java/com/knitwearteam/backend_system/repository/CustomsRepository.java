package com.knitwearteam.backend_system.repository;

import com.knitwearteam.backend_system.model.BespokenCustom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomsRepository extends JpaRepository<BespokenCustom, Long>{
    void deleteAllById(Long id);
}
