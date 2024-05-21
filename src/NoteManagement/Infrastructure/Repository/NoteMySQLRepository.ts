import { Note } from "../../Domain/Entity/Note";
import NoteInterface  from "../../Domain/Port/NoteInterface";
import query from "../../../Database/mysql";


export default class noteMysqlRepository implements NoteInterface {
  async updateNote(id: number, contenido: string, date: string) {
    let updateQuery = "UPDATE Notes SET content = ?, date = ? WHERE id = ?";
    const params: any[] = [contenido, date, id];
    try {
      const [result]: any = await query(updateQuery, params);
      if (result && result.affectedRows > 0) {
        return true
      } else {
        throw new Error("No se pudo actualizar la nota");
      }
    } catch (error) {
      throw new Error(`Error en la operación de actualización`);
    }
  }

  async registerNote(note: Note): Promise<any> {
    const sql = "INSERT INTO Notes (name, content,date) VALUES (?,?,?)";
    const params: any[] = [note.name, note.content,note.date];
    try {
      const [result]: any = await query(sql, params);
    
    if (result) {
        const notes=await this.getStatistics();
        return {
            id: result.insertId, 
            name: note.name, 
            content:note.content,
            date: note.date,
            total: notes
        }

    } else {
      throw new Error("Error al insertar la nota en la base de datos");
    }
    }
    catch (error) {
        throw new Error(`Error en la operación de guardado`);
    }
  }
    async getStatistics() {
        const sql = "SELECT count(*) as Total FROM Notes;";
        const params: any[] = [];
        try {
        const [[result]]: any = await query(sql, params);
            return result.Total;
        if (result){
            return true;
        }
        else {
            return false;
        }
        }catch (error) {
            return false;
        }
    }
  async listAll(): Promise<any> {
    const sql = "SELECT * FROM Notes";
    const params: any[] = [];
    try {
      const [result]: any = await query(sql, params);
      
      if (result){
        return result
      }
      else {
        return false;
      }
    }
    catch (error) {
      return false;
    }
  }

  async delete(id: number): Promise<any> {
    const sql = "DELETE FROM Notes WHERE id = ?";
    const params: any[] = [id];
    try {
      const [result]: any = await query(sql, params);
      
      return true;
    }

    catch (error) {
      return false
    }
  }
}