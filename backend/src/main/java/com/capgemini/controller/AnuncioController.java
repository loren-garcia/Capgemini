package com.capgemini.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.capgemini.model.Anuncio;
import com.capgemini.repository.AnuncioRepository;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/anuncios")
public class AnuncioController {

	@Autowired
	private AnuncioRepository anuncioRepository;
	
	@GetMapping
	public List<Anuncio> list() {
		return anuncioRepository.findAll();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Anuncio create(@RequestBody Anuncio anuncio) {
		return anuncioRepository.save(anuncio);
	}
}
