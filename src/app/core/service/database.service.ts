import { NUM_VERSAO_ULTIMA_CARGA, NUM_VERSAO_ATUAL, NUM_VERSAO_CARGA } from './../constantes';
import { Injectable } from '@angular/core';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  private databaseName: string = 'HampliaForcaApp.db';
  private database: SQLiteObject;
  private databaseReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor( private sqLite: SQLite,
               private sqLitePorter: SQLitePorter,
               private http: HttpClient,
               private storage: Storage ) {

  }

  async openDatabase() {
    try {
      this.database = await this.sqLite.create( { name: this.databaseName,
                                            location: 'default'} );

      const numeroVersaoUltimaCarga = await this.storage.get(NUM_VERSAO_ULTIMA_CARGA);

      if (numeroVersaoUltimaCarga === NUM_VERSAO_CARGA) {
        console.log('Database já atualizada!');
        this.databaseReady.next(true);
      } else {
        console.log('Database será atualizada!');
        await this.createDatabase();
      }
      console.log('database:', this.database);

    } catch (error) {
      console.error('Ocorreu um erro ao criar o banco de dados', error);
    }
  }

  private async createDatabase() {
    const result = await this.http.get('assets/database/dummyDB.sql', { responseType: 'text'})
      .subscribe(sql => {
        this.sqLitePorter.importSqlToDb(this.database, sql)
          .then(data => {
            this.databaseReady.next(true);
            this.storage.set(NUM_VERSAO_ULTIMA_CARGA, NUM_VERSAO_ATUAL);
            console.log('Database filled');
          })
          .catch(e => console.error(e));
      });
    return result ? true : false;
  }

  executeSQL(sql: string, params?: any[]) {
    return this.database.executeSql(sql, params);
  }

  executeSQLWithTransaction(sqlStatements: any[]) {
    return this.database.transaction( (tx) => {
      sqlStatements.forEach( (sqlStatement: any) => {
        tx.executeSql(sqlStatement.sql, sqlStatement.data);
      });
    });
  }

}
