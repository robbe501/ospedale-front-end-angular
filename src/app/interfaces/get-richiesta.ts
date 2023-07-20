export interface GetRichiesta {
          richiestaId: number,
          stato: string,
          nuovaData: string,
          nuovoOrario: string,
          appuntamento: {
            appuntamentoId: number,
            data: string,
            orario: string,
          }
}
