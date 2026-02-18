package com.knitwearteam.backend_system.Services;

import com.knitwearteam.backend_system.model.Customer;
import com.knitwearteam.backend_system.model.Image;
import com.knitwearteam.backend_system.model.BespokenCustom;
import com.knitwearteam.backend_system.repository.CustomerRepository;
import com.knitwearteam.backend_system.repository.CustomsRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class CustomService {

    private final CustomsRepository customsRepository;
    public Customer saveCustom(BespokenCustom custom,
                           String description,
                           List<MultipartFile> files,
                           Customer customer) throws IOException {
        int i=0;
        for(MultipartFile file:files){
            if (file.getSize() != 0) {
                Image image = toImageEntity(file);
                if(i==0){
                    image.setPreviewImage(true);
                    i=1;
                }
                custom.addImageToCustom(image);
            }
        }
        custom.setDescription(description);
        customsRepository.save(custom);
        customer.setBespokenCustom(custom);
        return customer;
    }

    private Image toImageEntity(MultipartFile file) throws IOException {
        Image image = new Image();
        image.setName(file.getName());
        image.setOriginalFileName(file.getOriginalFilename());
        image.setContentType(file.getContentType());
        image.setSize(file.getSize());
        image.setBytes(file.getBytes());
        return image;
    }

    public void deleteCustom(Long id) {
        customsRepository.deleteAllById(id);
    }

    public BespokenCustom getCustomById(Long id) {
        return customsRepository.findById(id).orElse(null);
    }
}
