import { Note } from "../../Domain/Entity/Note";
import NoteInterface  from "../../Domain/Port/NoteInterface";
import query from "../../../Database/mysql";


export default class noteMysqlRepository implements NoteInterface {
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
  async addAlumnnote(note:number,alumn: number) {
    let updateQuery = "UPDATE Students SET note = ? where id = ?";
    const params: any[] = [note,alumn];
    try {
      const [result]: any = await query(updateQuery, params);

      if (result && result.affectedRows > 0) {
        return true
      } else {
        throw new Error("No se pudo actualizar el usuario");
      }
    } catch (error) {
      throw new Error(`Error en la operación de actualización`);
    }
  }
  async listStudents(note: number): Promise<any> {
    const sql = "SELECT * FROM Students WHERE note = ?";
    const params: any[] = [note];
    try {
      const [result]: any = await query(sql, params);
      
      if (result){
        return result;
      }
      
      else {
        false
      }
    }
    catch (error) {
      false
    }
  }
  
  async listAll(): Promise<any> {
    const sql = "SELECT * FROM notes";
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
}