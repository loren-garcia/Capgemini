package com.capgemini.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capgemini.model.Anuncio;

public interface AnuncioRepository extends JpaRepository<Anuncio, Long>{

}
