export interface PatchRichiesta {
  richiestaId: number;
  stato: 'accettato' | 'rifiutato' | 'attesa';
}
