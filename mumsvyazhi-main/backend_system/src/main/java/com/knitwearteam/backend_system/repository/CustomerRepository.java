package com.knitwearteam.backend_system.repository;

import com.knitwearteam.backend_system.model.Customer;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
    List<Customer> findByUserName(String username);
    List<Customer> findByChatID(Long chatID);
}
