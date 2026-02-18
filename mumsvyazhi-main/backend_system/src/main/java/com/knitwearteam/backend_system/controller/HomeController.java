package com.knitwearteam.backend_system.controller;


import com.knitwearteam.backend_system.Services.CustomService;
import com.knitwearteam.backend_system.Services.ProductService;
import com.knitwearteam.backend_system.model.BespokenCustom;
import com.knitwearteam.backend_system.model.Customer;
import com.knitwearteam.backend_system.model.Image;
import com.knitwearteam.backend_system.model.Product;
import com.knitwearteam.backend_system.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Controller
@RequiredArgsConstructor
public class HomeController {
    private final ProductService productService;
    private final CustomService customService;
    @Autowired
    private CustomerRepository customerRepository ;
    @GetMapping("/customer/")
    public String productInfo(Model model) {
        model.addAttribute("products", productService.listProducts(null));
        if(customerRepository.findAll().size()>0){
            model.addAttribute("customers",customerRepository.findAll());
        }
        ArrayList<MultipartFile> images = new ArrayList<>();
        int capacity = 5;
        model.addAttribute("images",images);
        return "new-customer";
    }
    @PostMapping("/customer/add_with_products")
    String createCustomerWithProducts(@RequestParam(name = "userName") String userName,
                                        @RequestParam(name = "selectedProducts") List<Long> products_id) {
        Customer customer;
        List<Product> products=new ArrayList<>();
        for(Long id: products_id){
            products.add(productService.getProductById(id));
        }
        if (customerRepository.findByUserName(userName).size() == 0) {
            customer = new Customer();
            customer.setUserName(userName);
        } else {
            customer = customerRepository.findByUserName(userName).get(0);
            customer.setBespokenCustom(null);
        }
        customer.setProducts(products);
        customerRepository.save(customer);
        return "redirect:/";
    }
    @PostMapping("/customer/add_with_custom")
    String createCustomerWithCustom(@RequestParam(name = "userName") String userName,
                                    @RequestParam(name="description")String description,
                                    @RequestParam("file1") MultipartFile file1, @RequestParam("file2") MultipartFile file2,
                                    @RequestParam("file3") MultipartFile file3,
                                    @RequestParam("file4") MultipartFile file4, @RequestParam("file5") MultipartFile file5
                                    ) throws IOException {
        Customer customer= customerRepository.findByUserName(userName).get(0);
        if (customer == null) {
            customer = new Customer();
            customer.setUserName(userName);
        } else {
            customService.deleteCustom(customer.getId());
            customer.setProducts(null);
        }
        List<MultipartFile> files = new ArrayList<>(Arrays.asList(file1,file2,file3,file4,file5));
        customer = customService.saveCustom(new BespokenCustom(),description,files,customer);
        customerRepository.save(customer);
        return "redirect:/";
    }
    @GetMapping("/customer/{id}")
    public String customerInfo(@PathVariable Long id, Model model) {
        Customer customer = customerRepository.findById(id).orElse(null);
        assert customer != null;
        model.addAttribute("customer",customer);
        if(customer.getProducts()!=null){
            model.addAttribute("products", customer.getProducts());
        }
        if(customer.getBespokenCustom()!=null){
            model.addAttribute("custom", customer.getBespokenCustom());
            model.addAttribute("images", customer.getBespokenCustom().getImages());
        }
        return "customer-info";
    }
    @PostMapping("/customer/delete/{id}")
    public String deleteCustomer(@PathVariable Long id) {
        customerRepository.deleteById(id);
        return "redirect:/";
    }
    @GetMapping("/")
    public String products(@RequestParam(name = "title", required = false) String title, Model model) {
        model.addAttribute("products", productService.listProducts(title));
        System.out.println(customerRepository.findAll());
        return "products";
    }

    @GetMapping("/product/{id}")
    public String productInfo(@PathVariable Long id, Model model) {
        Product product = productService.getProductById(id);
        model.addAttribute("product", product);
        model.addAttribute("images", product.getImages());
        return "product-info";
    }

    @PostMapping("/product/create")
    public String createProduct(@RequestParam("file1") MultipartFile file1, @RequestParam("file2") MultipartFile file2,
                                 @RequestParam("file3") MultipartFile file3, Product product) throws IOException {
        productService.saveProduct(product, file1, file2, file3);
        return "redirect:/";
    }

    @PostMapping("/product/delete/{id}")
    public String deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
        return "redirect:/";
    }
}
