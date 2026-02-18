package com.knitwearteam.backend_system.exceptions;

public class CustomerNotFoundException extends RuntimeException {
    public CustomerNotFoundException(Long id){
        super("Could not found the product with id "+ id);
    }
}
