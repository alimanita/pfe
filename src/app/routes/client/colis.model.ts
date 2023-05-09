import { Destnateur } from "../admin/destinateur/destinateur.model";
import { Expediteur } from "../admin/expediteur/expediteur.model";

export class Colis {
  id?:number;
poids?:number;
   prix?:number;
   dateEnlevement?:string;
statut?:string;
destinateur?:Destnateur;
expediteur ?: Expediteur;
constructor(poids: number, prix: number, dateEnlevement :string,statut:string,
 destinateur: Destnateur, expediteur : Expediteur) {
   this.poids = poids;
   this.prix = prix;

   this.dateEnlevement = dateEnlevement;

   this.statut = statut;

   this.destinateur = destinateur;
this.expediteur = expediteur;

}

}
