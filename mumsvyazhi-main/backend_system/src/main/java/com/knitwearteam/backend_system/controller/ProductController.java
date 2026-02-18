package com.knitwearteam.backend_system.controller;

import com.knitwearteam.backend_system.exceptions.ProductNotFoundException;
import com.knitwearteam.backend_system.model.Product;
import com.knitwearteam.backend_system.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductRepository repo ;

    @PostMapping("/add")
    Product wasAdded(@RequestBody Product newProduct){
        return repo.save(newProduct);
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    @ResponseBody
    List<Product> getAll(){
        return repo.findAll();
    }
    @GetMapping("/{id}")
    @ResponseBody
    Product getProductById(@PathVariable Long id) {
        System.out.println(repo.findById(id));
        return repo.findById(id)
                .orElseThrow(() -> new ProductNotFoundException(id));
    }
    @DeleteMapping("/{id}")
    String delete(@PathVariable Long id){
        if(!repo.existsById(id)){
            throw new ProductNotFoundException(id);
        }
        repo.deleteById(id);
        return "Product with id "+id+" was deleted";
    }
//    @PatchMapping("/{id}")
//    public Product updateUser(@PathVariable Long id, Map<String, Object> fields) {
//
//        return repo.save(Objects.requireNonNull(ProductPatching.updateProductByFields(id, fields, repo)));
//    }

    @DeleteMapping("/all")
    void deleteAll(){
        repo.deleteAll();
    }
}