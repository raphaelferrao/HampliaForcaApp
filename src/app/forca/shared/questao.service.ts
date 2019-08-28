import { Util } from './../../core/util';
import { Questao } from './questao';
import { DataBaseService } from './../../core/service/database.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestaoService {

  private util: Util = new Util();

  constructor( private dbService: DataBaseService ) {

  }

  async getQtd() {
    let qtdQuestoes = 0;

    const sql: string = 'SELECT COUNT(*) qtd FROM questao_forca';

    const result = await this.dbService.executeSQL(sql);
    const rows = result.rows;

    if ( (rows) && (rows.length > 0) ) {
      const item = rows.item(0);
      qtdQuestoes = item.qtd;
    }

    console.log('qtdQuestoes', qtdQuestoes);
    return qtdQuestoes;
  }

  async getById(id: number) {
    const sqlBuilder = [];
    sqlBuilder.push('SELECT q.id id, q.id_banca id_banca, b.nome nome_banca, q.id_prova id_prova, p.nome nome_prova, ');
    sqlBuilder.push('q.id_orgao id_orgao, o.nome nome_orgao, q.ano ano, q.enunciado enunciado, q.resposta resposta, ');
    sqlBuilder.push('q.id_assunto id_assunto, a.nome nome_assunto ');
    sqlBuilder.push('FROM questao_forca q, banca b, orgao o, prova p, assunto a ');
    sqlBuilder.push('WHERE q.id_banca = b.id');
    sqlBuilder.push('AND q.id_orgao = o.id');
    sqlBuilder.push('AND q.id_prova = p.id');
    sqlBuilder.push('AND q.id_assunto = a.id');
    sqlBuilder.push('AND q.id = ?');

    const sql: string = sqlBuilder.join(' ');
    const data = [id];

    const result = await this.dbService.executeSQL(sql, data);
    const rows = result.rows;

    const questao: Questao = new Questao();
    if ( (rows) && (rows.length > 0) ) {
      const item = rows.item(0);
      questao.id = item.id;
      questao.ano = item.ano;
      questao.enunciado = item.enunciado;
      questao.resposta = item.resposta;
      questao.resposta = this.util.removeAccents(questao.resposta.toUpperCase());
      questao.banca.id = item.id_banca;
      questao.banca.nome = item.nome_banca;
      questao.orgao.id = item.id_orgao;
      questao.orgao.nome = item.nome_orgao;
      questao.prova.id = item.id_prova;
      questao.prova.nome = item.nome_prova;
      questao.assunto.id = item.id_assunto;
      questao.assunto.nome = item.nome_assunto;
      questao.montarCabecalho();
    }

    console.log('questao', questao);
    return questao;
  }

}
