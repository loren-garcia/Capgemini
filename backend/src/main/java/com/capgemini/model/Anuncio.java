package com.capgemini.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Anuncio {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long anuncioID;
	
	@Column(nullable = false)
	private String nomeAnuncio;
	
	@Column(nullable = false)
	private String cliente;
	
	@Column(nullable = false)
	private String dataInicio;
	
	@Column(nullable = false)
	private String dataTermino;
	
	@Column(nullable = false)
	private float investimento;
}
