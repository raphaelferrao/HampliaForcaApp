export class LetraResposta {

    letra: string;
    acertou: boolean = false;
    charEspecial?: boolean = false;
    usada: boolean = false;
    classCss: string;
    botaoDica: boolean = false;

    constructor(letra?: string, acertou?: boolean, usada?: boolean, charEspecial?: boolean, classCss?: string) {
        this.letra = letra;
        this.acertou = acertou;
        this.usada = usada;
        this.charEspecial = charEspecial;
        this.classCss = classCss;
    }

}
