package com.knitwearteam.backend_system.controller;

import com.knitwearteam.backend_system.model.Image;
import com.knitwearteam.backend_system.repository.ImageRepository;
import com.knitwearteam.backend_system.repository.ProductRepository;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/images")
public class ImageController {
    private final ImageRepository imageRepository;
    private final ProductRepository repo ;
    @GetMapping("/{idImage}")
    private ResponseEntity<?> getImageById(@PathVariable Long idImage) {
        Image image = imageRepository.findById(idImage).orElse(null);
//        String encoded = Base64.getEncoder().encodeToString("Hello".getBytes());
        assert image != null;
        return ResponseEntity.ok()
                .header("fileName", image.getOriginalFileName())
                .contentType(MediaType.valueOf(image.getContentType()))
                .contentLength(image.getSize())
                .body(new InputStreamResource(new ByteArrayInputStream(image.getBytes())));
    }
    @RequestMapping(value = "/get/{idImage}", method = RequestMethod.GET)
    @ResponseBody
    public String getImageAsByteArray(@PathVariable Long idImage, HttpServletResponse response) throws IOException {
        Image image = imageRepository.findById(idImage).orElse(null);
        assert image != null;
        InputStream in = new ByteArrayInputStream(image.getBytes());
        response.setContentType(MediaType.IMAGE_JPEG_VALUE);
        IOUtils.copy(in, response.getOutputStream());
        return java.util.Base64.getEncoder().encodeToString(image.getBytes());
    }
    @GetMapping("/all")
    List<Image> getAll(){
        return imageRepository.findAll();
    }

    @GetMapping("/product/{idProduct}")
    private List<Image> getImagesByProductId(@PathVariable Long idProduct){
        return imageRepository.findAllByProduct(repo.findById(idProduct));
    }

}
