//package com.knitwearteam.backend_system.Services;
//
//import com.knitwearteam.backend_system.exceptions.ProductNotFoundException;
//import com.knitwearteam.backend_system.model.Product;
//import com.knitwearteam.backend_system.repository.ProductRepository;
//import org.springframework.util.ReflectionUtils;
//
//import java.lang.reflect.Field;
//import java.util.Map;
//import java.util.Optional;
//
//public class ProductPatching {
//    public static Product updateProductByFields(Long id, Map<String, Object> fields, ProductRepository repository) {
//        Optional<Product> existingProduct = repository.findById(id);
//
//        if (existingProduct.isPresent()) {
//            fields.forEach((key, value) -> {
//                Field field = ReflectionUtils.findField(Product.class, key);
//                field.setAccessible(true);
//                ReflectionUtils.setField(field, existingProduct.get(), value);
//            });
//            return existingProduct.get();
//        }
//        return null;
//    }
//}
