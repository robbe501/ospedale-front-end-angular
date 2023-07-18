export interface GetPrestazione {
    prestazioneId: number,
    tipologia: string,
    medico: {
        medicoId: number,
        nome: string,
        cognome: string,
        email: string,
        abilitato: boolean
    }
}
