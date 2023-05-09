package com.colis.repository.impl;

import com.colis.model.Livreur;
import com.colis.repository.Livreur_Repository;

import javax.persistence.EntityManager;
import java.util.List;

public class LivreurRepositoryimpl extends BaseRepositoryimpl<Livreur,Long> implements Livreur_Repository {
    public LivreurRepositoryimpl( EntityManager em) {
        super(Livreur.class, em);
    }

    @Override
    public List<Livreur> findByNom(String name) {
        return jpaqlQueryFactory.select(livreur).from(livreur).where(livreur.nom.eq(name)).fetch();
    }

    @Override
    public List<Livreur> findByNum_tel(Long numtel) {
        return jpaqlQueryFactory.select(livreur).from(livreur).where(livreur.num_tel.eq(numtel)).fetch();
    }

}
