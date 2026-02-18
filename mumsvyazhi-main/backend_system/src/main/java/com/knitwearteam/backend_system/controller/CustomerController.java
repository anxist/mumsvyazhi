package com.knitwearteam.backend_system.controller;

import com.knitwearteam.backend_system.Services.ProductService;
import com.knitwearteam.backend_system.exceptions.CustomerNotFoundException;
import com.knitwearteam.backend_system.exceptions.ProductNotFoundException;
import com.knitwearteam.backend_system.model.Customer;
import com.knitwearteam.backend_system.model.Product;
import com.knitwearteam.backend_system.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping("/customer-api")
public class CustomerController {
    private final ProductService productService;
    @Autowired
    private CustomerRepository repo ;
    @PostMapping("/add_with_products")
    Customer createCustomerWithProducts(@RequestParam(name = "userName") String userName,
                                      @RequestParam(name = "selectedProducts") List<Long> products_id) {
        Customer customer;
        List<Product> products=new ArrayList<>();
        for(Long id: products_id){
            products.add(productService.getProductById(id));
        }
        if (repo.findByUserName(userName).size() == 0) {
            customer = new Customer();
            customer.setUserName(userName);
        } else {
            customer = repo.findByUserName(userName).get(0);
            customer.setBespokenCustom(null);
        }
        customer.setProducts(products);
        return repo.save(customer);
    }

    @GetMapping("/{id}")
    @ResponseBody
    Customer getCustomerById(@PathVariable Long id) {
        System.out.println(repo.findById(id));
        return repo.findById(id)
                .orElseThrow(() -> new ProductNotFoundException(id));
    }
    @DeleteMapping("/{id}")
    String delete(@PathVariable Long id){
        if(!repo.existsById(id)){
            throw new CustomerNotFoundException(id);
        }
        repo.deleteById(id);
        return "Customer with id "+id+" was deleted";
    }

}
